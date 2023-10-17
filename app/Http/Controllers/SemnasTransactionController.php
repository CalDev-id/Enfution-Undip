<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\SemnasParticipant;
use App\Models\SemnasTransaction;
use Illuminate\Support\Facades\Storage;
use function Symfony\Component\VarDumper\Dumper\esc;
use App\Http\Requests\Storesemnas_transactionRequest;
use App\Http\Requests\Updatesemnas_transactionRequest;
use App\Models\SemnasReferralCode;
use Illuminate\Http\Request;

class SemnasTransactionController extends Controller
{

    static private $event_period;

    static public $ticketPrice = [
        "summit" => [
            "NORMAL" => 300000,
            "EB" => 250000,
            "PS1" => 270000,
            "PS2" => 280000
        ],
        "talk-1" => [
            "NORMAL" => 15000,
        ],
        "talk-2" => [
            "NORMAL" => 15000,
        ],
    ];

    static public $timeRegist = [
        "summit" => [
            "EB" => [
                "open" => '2023-07-15 00:00:01',
                "closed" => '2023-07-22 23:59:59',
            ],
            "PS1" => [
                "open" => '2023-07-23 00:00:01',
                "closed" => '2023-07-23 21:00:00',
            ],
            "PS2" => [
                "open" => '2023-08-10 00:00:01',
                "closed" => '2023-08-15 23:59:59',
            ],
            "NORMAL" => [
                "open" => '2023-08-16 00:00:01',
                "closed" => '2023-08-17 23:59:59',
            ],
        ],
        "talk-1" => [
            "NORMAL" => [
                "open" => '2023-06-18 00:00:01',
                "closed" => '2023-07-13 23:59:59',
            ],
        ],
        "talk-2" => [
            "NORMAL" => [
                "open" => '2023-08-13 00:00:01',
                "closed" => '2023-09-16 18:59:59',
            ],
        ],
    ];

    static private function getTicketPrice()
    {
        $currentDateTime = Carbon::now();
        if (session('event') == 'summit') {
            if ($currentDateTime->between(
                Carbon::parse(SemnasTransactionController::$timeRegist[session('event')]['EB']['open']),
                Carbon::parse(SemnasTransactionController::$timeRegist[session('event')]['EB']['closed'])
            )) {
                SemnasTransactionController::$event_period = "EB";
                return SemnasTransactionController::$ticketPrice[session('event')]["EB"];
            } elseif ($currentDateTime->between(
                Carbon::parse(SemnasTransactionController::$timeRegist[session('event')]['PS1']['open']),
                Carbon::parse(SemnasTransactionController::$timeRegist[session('event')]['PS1']['closed'])
            )) {
                SemnasTransactionController::$event_period = "PS1";
                return SemnasTransactionController::$ticketPrice[session('event')]["PS1"];
            } elseif ($currentDateTime->between(
                Carbon::parse(SemnasTransactionController::$timeRegist[session('event')]['PS2']['open']),
                Carbon::parse(SemnasTransactionController::$timeRegist[session('event')]['PS2']['closed'])
            )) {
                SemnasTransactionController::$event_period = "PS2";
                return SemnasTransactionController::$ticketPrice[session('event')]["PS2"];
            }
        }

        SemnasTransactionController::$event_period = "NORMAL";
        return SemnasTransactionController::$ticketPrice[session('event')]["NORMAL"];
    }

    static private function getDiscount($idCoupon)
    {
        $discountPercent = ((float) SemnasReferralCode::where('id', $idCoupon)->first()->diskon_persen) / 100;
        return $discountPercent;
    }

    public function save(Request $request)
    {
        $idPeserta = session('id_peserta');
        $existPeserta = SemnasParticipant::where('id', $idPeserta)->first();
        $event = session('event');

        if (!$existPeserta) {
            session()->forget(['id_peserta', 'event']);
            switch ($event) {
                case 'summit':
                    return redirect()->route('national-seminar.form-summit')->with("not_success", true);
                    break;
                case 'talk-1':
                    return redirect()->route('national-seminar.form-et1')->with("not_success", true);
                    break;
                case 'talk-2':
                    return redirect()->route('national-seminar.form-et2')->with("not_success", true);
                    break;
                default:
                    return false;
                    break;
            }
        }

        $rules = [
            'account_name' => 'required|string|max:100',
            'account_number' => 'required|string|max:100',
            'bank_name' => 'required',
            'payment_slip' => 'required|file|max:2048|mimes:jpg,png',
        ];

        $validateData = $request->validate($rules);

        if (!$validateData) {
            return false;
        }

        $idCoupon = $existPeserta->id_referral_code;
        $totalPrice = SemnasTransactionController::getTicketPrice();
        if ($idCoupon) {
            $totalPrice = SemnasTransactionController::getTicketPrice() * (1 - SemnasTransactionController::getDiscount($idCoupon));
        }

        $filterData = [
            'account_name' => esc(request('account_name')),
            'account_number' => esc(request('account_number')),
            'amount' => esc($totalPrice),
            'bank_name' => esc(request('bank_name')),
            'status_periode' => esc(SemnasTransactionController::$event_period),
            'status_bayar' => "PAID",
        ];


        if ($validateData['payment_slip'] != null) {
            $path = 'uploads/semnas_payment_slip';
            $extension = $validateData['payment_slip']->getClientOriginalExtension();
            $filename = uniqid() . '.' . $extension;
            $validateData['payment_slip']->move($path, $filename);
            $filterData['bukti_bayar'] = $filename;
        }

        $createdTrx = SemnasTransaction::where('id_peserta', $idPeserta)->update($filterData);
        if ($createdTrx) {
            session()->forget(['id_peserta', 'event']);
            return Inertia::render('Semnas/PaymentConfirmation', ['modal' => true]);
        }
    }


    public function transaction()
    {
        $data['name'] =  SemnasParticipant::where('id', session('id_peserta'))->first()->full_name;
        $idCoupon = SemnasParticipant::where('id', session('id_peserta'))->first()->id_referral_code;
        $data['total'] = SemnasTransactionController::getTicketPrice();
        if ($idCoupon) {
            $data['total'] = SemnasTransactionController::getTicketPrice() * (1 - SemnasTransactionController::getDiscount($idCoupon));
        }
        return Inertia::render('Semnas/PaymentConfirmation', $data);
    }
}
