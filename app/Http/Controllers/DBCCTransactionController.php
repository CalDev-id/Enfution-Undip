<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\DBCCParticipant;
use App\Models\DBCCTransaction;
use Illuminate\Support\Facades\Storage;
use function Symfony\Component\VarDumper\Dumper\esc;
use App\Http\Requests\Storedbcc_transactionRequest;
use App\Http\Requests\Updatedbcc_transactionRequest;
use App\Models\DBCCReferralCode;
use App\Models\DBCCTeam;
use Illuminate\Http\Request;

class DBCCTransactionController extends Controller
{
    static private $event_period;

    static public $ticketPrice = [
        "summit" => [
            "NORMAL" => 250000,
            "EB" => 230000
        ],
    ];

    static public $timeRegist = [
        "summit" => [
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
        if (session('event') == 'summit') {
            if ($currentDateTime->between(
                Carbon::parse(DBCCTransactionController::$timeRegist[session('event')]['EB']['open']),
                Carbon::parse(DBCCTransactionController::$timeRegist[session('event')]['EB']['closed'])
            )) {
                DBCCTransactionController::$event_period = "EB";
                return DBCCTransactionController::$ticketPrice[session('event')]["EB"];
            }
        }

        DBCCTransactionController::$event_period = "NORMAL";
        return DBCCTransactionController::$ticketPrice[session('event')]["NORMAL"];
    }

    static private function getDiscount($idCoupon)
    {
        $discountPercent = ((float) DBCCReferralCode::where('id', $idCoupon)->first()->diskon_persen) / 100;
        return $discountPercent;
    }

    public function save(Request $request)
    {
        $idTeam = session('id_team');
        $existTeam = DBCCTeam::where('id', $idTeam)->first();
        $event = session('event');

        if (!$existTeam) {
            session()->forget(['id_team', 'event']);
            switch ($event) {
                case 'summit':
                    return redirect()->route('dbcc.form-summit')->with("not_success", true);
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

        $idCoupon = $existTeam->id_referral_code;
        $totalPrice = DBCCTransactionController::getTicketPrice();
        if ($idCoupon) {
            $totalPrice = DBCCTransactionController::getTicketPrice() * (1 - DBCCTransactionController::getDiscount($idCoupon));
        }

        $filterData = [
            'account_name' => esc(request('account_name')),
            'account_number' => esc(request('account_number')),
            'metode_bayar' => esc(request('payment_method')),
            'amount' => esc($totalPrice),
            'status_periode' => esc(DBCCTransactionController::$event_period),
            'status_bayar' => "PAID",
        ];


        if ($validateData['payment_slip'] != null) {
            $path = 'uploads/dbcc_payment_slip';
            $extension = $validateData['payment_slip']->getClientOriginalExtension();
            $filename = uniqid() . '.' . $extension;
            $validateData['payment_slip']->move($path, $filename);
            $filterData['bukti_bayar'] = $filename;
        }

        $createdTrx = DBCCTransaction::where('id_team', $idTeam)->update($filterData);
        if ($createdTrx) {
            session()->forget(['id_team', 'event']);
            return Inertia::render('DBCC/PaymentConfirmation', ['modal' => true]);
        }
    }

    public function transaction()
    {
        $data['name'] =  DBCCTeam::where('id', session('id_team'))->first()->team_name;
        $idCoupon = DBCCTeam::where('id', session('id_team'))->first()->id_referral_code;
        $data['total'] = DBCCTransactionController::getTicketPrice();
        if ($idCoupon) {
            $data['total'] = DBCCTransactionController::getTicketPrice() * (1 - DBCCTransactionController::getDiscount($idCoupon));
        }
        return Inertia::render('DBCC/PaymentConfirmation', $data);
    }
}
