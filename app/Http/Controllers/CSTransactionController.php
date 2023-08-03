<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\CoachingSessionParticipant;
use App\Models\CSTransaction;
use Illuminate\Support\Facades\Storage;
use function Symfony\Component\VarDumper\Dumper\esc;
use App\Http\Requests\Storecs_transactionRequest;
use App\Http\Requests\Updatecs_transactionRequest;
use Illuminate\Http\Request;

class CSTransactionController extends Controller
{
    static private $event_period;

    static public $ticketPriceCS = [
        "cs" => [
            "NORMAL" => [
                "Bundle" => 60000,
                "Person" => 25000
            ],
            "EB" => [
                "Bundle" => 40000,
                "Person" => 15000
            ],
        ],
    ];

    static public $timeRegistCS = [
        "cs" => [
            "EB" => [
                "open" => '2023-07-14 00:00:01',
                "closed" => '2023-07-14 23:59:59',
            ],
            "NORMAL" => [
                "open" => '2023-07-15 00:00:01',
                "closed" => '2023-08-15 23:59:59',
            ],
        ],
    ];

    static private function getTicketPrice()
    {
        $currentDateTime = Carbon::now();
        if (session('event') == 'cs') {
            if (session('type') == 'Bundle') {
                if ($currentDateTime->between(
                    Carbon::parse(CSTransactionController::$timeRegistCS[session('event')]['EB']['open']),
                    Carbon::parse(CSTransactionController::$timeRegistCS[session('event')]['EB']['closed'])
                )) {
                    CSTransactionController::$event_period = "EB";
                    return CSTransactionController::$ticketPriceCS[session('event')]["EB"][session('type')];
                } else {
                    CSTransactionController::$event_period = "NORMAL";
                    return CSTransactionController::$ticketPriceCS[session('event')]["NORMAL"][session('type')];
                }
            } else if (session('type') == 'Person') {
                if ($currentDateTime->between(
                    Carbon::parse(CSTransactionController::$timeRegistCS[session('event')]['EB']['open']),
                    Carbon::parse(CSTransactionController::$timeRegistCS[session('event')]['EB']['closed'])
                )) {
                    CSTransactionController::$event_period = "EB";
                    return CSTransactionController::$ticketPriceCS[session('event')]["EB"][session('type')];
                } else {
                    CSTransactionController::$event_period = "NORMAL";
                    return CSTransactionController::$ticketPriceCS[session('event')]["NORMAL"][session('type')];
                }
            }
        }

        CSTransactionController::$event_period = "NORMAL";
        return CSTransactionController::$ticketPriceCS[session('event')]["NORMAL"][session('type')];
    }

    public function save(Request $request)
    {
        $idPeserta = session('id_peserta');
        $existPeserta = CoachingSessionParticipant::where('id', $idPeserta)->first();
        $event = session('event');

        if (!$existPeserta) {
            session()->forget(['id_peserta', 'event', 'type']);
            switch ($event) {
                case 'cs':
                    return redirect()->route('dbcc.form-cs')->with("not_success", true);
                    break;
                default:
                    return false;
                    break;
            }
        }

        $rules = [
            'account_name' => 'required|string|max:100',
            'account_number' => 'required|string|max:100',
            'payment_method' => 'required|string|max:100',
            'payment_slip' => 'required|file|max:2048|mimes:jpg,png',
        ];

        $validateData = $request->validate($rules);

        if (!$validateData) {
            return false;
        }

        $totalPrice = session('dbcc_part') == 'Y' ? CSTransactionController::getTicketPrice() * 0 : CSTransactionController::getTicketPrice() * 1;

        $filterData = [
            'account_name' => esc(request('account_name')),
            'account_number' => esc(request('account_number')),
            'metode_bayar' => esc(request('payment_method')),
            'amount' => esc($totalPrice),
            'status_periode' => esc(CSTransactionController::$event_period),
            'status_bayar' => "PAID",
        ];


        if ($validateData['payment_slip'] != null) {
            $path = '/home/n1567050/public_html/uploads/cs_payment_slip';
            $extension = $validateData['payment_slip']->getClientOriginalExtension();
            $filename = uniqid() . '.' . $extension;
            $validateData['payment_slip']->move($path, $filename);
            $filterData['bukti_bayar'] = $filename;
        }

        $createdTrx = CSTransaction::where('id_first_member', $idPeserta)->update($filterData);
        if ($createdTrx) {
            session()->forget(['id_peserta', 'event', 'type', 'dbcc_part']);
            return Inertia::render('DBCC/PaymentConfirmationCS', ['modal' => true]);
        }
    }

    public function transaction()
    {
        $data['name'] =  CoachingSessionParticipant::where('id', session('id_peserta'))->first()->full_name;
        $data['total'] = session('dbcc_part') == 'Y' ? CSTransactionController::getTicketPrice() * 0 : CSTransactionController::getTicketPrice() * 1;
        return Inertia::render('DBCC/PaymentConfirmationCS', $data);
    }
}
