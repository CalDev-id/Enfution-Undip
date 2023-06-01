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

class SemnasTransactionController extends Controller
{

    static private $event_period;

    static private $ticketPrice = [
        "summit" => [
            "default" => 0,
            "EB" => 250000,
            "PS1" => 270000,
            "PS2" => 280000
        ],
        "talk-1" => [
            "default" => 0,
            "EB" => 200000,
            "PS1" => 210000,
            "PS2" => 220000
        ],
        "talk-2" => [
            "default" => 0,
            "EB" => 100000,
            "PS1" => 120000,
            "PS2" => 150000
        ],
    ];

    static private $timeRegist = [
        "summit" => [
            "default" => 0,
            "EB" => [
                "open" => '2023-05-31 08:00:00',
                "closed" => '2023-05-31 08:15:59',
            ],
            "PS1" => [
                "open" => '2023-05-31 08:16:00',
                "closed" => '2023-05-31 08:16:59',
            ],
            "PS2" => [
                "open" => '2023-05-31 08:17:00',
                "closed" => '2023-05-31 08:30:00',
            ],
        ],
        "talk-1" => [
            "default" => 0,
            "EB" => [
                "open" => '2023-05-31 08:00:00',
                "closed" => '2023-05-31 08:22:59',
            ],
            "PS1" => [
                "open" => '2023-05-31 08:23:00',
                "closed" => '2023-05-31 08:23:59',
            ],
            "PS2" => [
                "open" => '2023-05-31 08:24:00',
                "closed" => '2023-05-31 08:30:00',
            ],
        ],
        "talk-2" => [
            "default" => 0,
            "EB" => [
                "open" => '2023-05-31 08:00:00',
                "closed" => '2023-05-31 08:40:59',
            ],
            "PS1" => [
                "open" => '2023-05-31 08:41:00',
                "closed" => '2023-05-31 08:41:59',
            ],
            "PS2" => [
                "open" => '2023-05-31 08:42:00',
                "closed" => '2023-05-31 08:43:00',
            ],
        ],
    ];
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    static private function getTicketPrice()
    {
        $currentDateTime = Carbon::now();
        // dd(session('event'));
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
        }
        SemnasTransactionController::$event_period = "PS2";
        return SemnasTransactionController::$ticketPrice[session('event')]["PS2"];
    }

    static private function getDiscount($idCoupon)
    {
        $discountPercent = SemnasReferralCode::where('id', $idCoupon)->first()->diskon_persen / 100;
        return $discountPercent;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function simpan(Storesemnas_transactionRequest $request)
    {
        //


        $rules = [
            'account_name' => 'required|string|max:100',
            'account_number' => 'required|string|max:100',
            'amount' => 'required',
            'bayar_via' => 'required',
            'payment_slip' => 'required|file|max:2048|mimes:jpg,png',
        ];

        $validateData = $request->validate($rules);

        if (!$validateData) {
            return false;
        }

        $idPeserta = session('id_peserta');
        $idCoupon = SemnasParticipant::where('id', $idPeserta)->first()->id_referral_code;
        $totalPrice = SemnasTransactionController::getTicketPrice() * (1 - SemnasTransactionController::getDiscount($idCoupon));

        $filterData = [
            'account_name' => esc(request('account_name')),
            'account_number' => esc(request('account_number')),
            'amount' => esc($totalPrice),
            'bayar_via' => esc(request('bayar_via')),
            'id_peserta' => esc($idPeserta),
            'status_periode' => esc(SemnasTransactionController::$event_period),
        ];

        dd($filterData);

        if ($validateData['payment_slip'] != null) {
            Storage::disk('semnas_payment_slip')->put('', $validateData['payment_slip']);
            $filterData['bukti_bayar'] = Storage::disk('semnas_payment_slip')->put('', $validateData['payment_slip']);
        }

        SemnasTransaction::created($filterData);
        dd("berhasil bayar boss!!");
    }


    public function transaction()
    {
        // SemnasTransactionController::getDiscount(1);
        // dd(session()->get('id_peserta'));
        $data['name'] =  SemnasParticipant::where('id', session('id_peserta'))->first()->full_name;
        // $data['name'] =  "Ucup";

        $idCoupon = SemnasParticipant::where('id', session('id_peserta'))->first()->id_referral_code;
        // $idCoupon = 3;
        // $data['total'] = session('ticketPrice');
        $data['total'] = SemnasTransactionController::getTicketPrice() * (1 - SemnasTransactionController::getDiscount($idCoupon));
        // $data['total'] = 10000;
        // if ($idCoupon) {
        //     $data['total'] = session('ticketPrice') - 10000;
        // $data['total'] = SemnasTransactionController::getTicketPrice();
        // }
        return Inertia::render('Semnas/PaymentConfirmation', $data);
    }

    /**
     * Display the specified resource.
     */
    public function show(SemnasTransaction $semnas_transaction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SemnasTransaction $semnas_transaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Updatesemnas_transactionRequest $request, SemnasTransaction $semnas_transaction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SemnasTransaction $semnas_transaction)
    {
        //
    }
}
