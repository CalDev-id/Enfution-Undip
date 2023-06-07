<?php

namespace App\Http\Controllers;

use App\Models\SemnasParticipant;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\SemnasTransaction;

class SemnasAdminController extends Controller
{

    public function index()
    {
        $data["title"] = "Dashboard";
        $data["sectionTitle"] = "Welcome to Dashboard, Admin!";
        $data["selectedTable"] = 0;
        $data["active"] = 1;

        $data['semnas'] = [
            "pendapatan" => SemnasTransaction::where('status_bayar', "PAID")->where('status_verif', "DONE")->sum('amount'),
            "pendaftar" => count(SemnasTransaction::all()),
            "pending" => count(SemnasTransaction::all()->where('status_bayar', "PAID")->where('status_verif', "PENDING")),
            "done" => count(SemnasTransaction::all()->where('status_bayar', "PAID")->where('status_verif', "DONE")),
            "rejected" => count(SemnasTransaction::all()->where('status_bayar', "PAID")->where('status_verif', "REJECTED")),
        ];


        return Inertia::render("Dashboard", $data);
    }

    public function semnas()
    {
        session()->put('page', request('page') ?? 1);
        $filter = request('event');
        $data["title"] = "Dashboard";
        $data["sectionTitle"] = "Transactions National Seminar";
        $data["selectedTable"] = 1;
        $data["active"] = 2;

        $transactions = SemnasTransaction::where('status_bayar', "PAID")->where('status_verif', "PENDING")->paginate(5);
        $req = ['event'];
        if ($filter) {
            $transactions = SemnasTransaction::filter(request($req))->where('status_bayar', "PAID")->where('status_verif', "PENDING")->paginate(5)->withQueryString();
        }

        foreach ($transactions as $trx) {
            $trx = $trx->peserta_semnas;
        }

        session()->put(['page' => request('page') ?? 1, 'event' => $filter != null ? $filter : ""]);

        $data['transactions'] = $transactions;
        $data['filter'] = session('event');

        return Inertia::render("Dashboard", $data);
    }

    public function payment()
    {
        $buktiBayar = SemnasTransaction::where('id', request('id'))->first()->bukti_bayar;
        return ["bukti" => $buktiBayar];
    }

    public function detail(SemnasParticipant $participant)
    {

        $data["title"] = "Participants Semnas";
        $data['sectionTitle'] = "Participant Detail - $participant->full_name";
        $data['data_diri'] = [
            "id" => $participant->id,
            "full_name" => $participant->full_name,
            "gender" => $participant->gender,
            "place_dob" => $participant->place_dob,
            "phone_number" => $participant->phone_number,
            "line_id" => $participant->line_id,
            "email" => $participant->email,
            "university" => $participant->university,
            "faculty_departments_batch" => $participant->faculty_departments_batch,
            "status" => $participant->status,
            "event" => $participant->event,
            "ktm" => $participant->ktm,
        ];

        $data["selectedTable"] = 2;
        $data["active"] = 2;
        $data["page"] = session('page');
        $data["event"] = session('event');
        return Inertia::render("Dashboard", $data);
    }
}
