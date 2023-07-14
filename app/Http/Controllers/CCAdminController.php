<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\CCTransaction;
use App\Models\CoachingClinicParticipant;

class CCAdminController extends Controller
{
    //
    public function index()
    {
        $data["title"] = "Coaching Clinic";
        $data["sectionTitle"] = "Transaction Coaching Clinic";
        $data["selectedTable"] = 9;
        $data["active"] = 5;
        $req = ['periode', 'search', 'status'];
        if (request('status') == null) {
            request()->merge([
                "status" => "PENDING"
            ]);
        }
        $transactions = CCTransaction::filter(request($req))->where('status_bayar', 'PAID')->paginate(10)->withQueryString();
        foreach ($transactions as $trx) {
            $trx = $trx->cc_participant;
        }

        session()->put(['page' => request('page') ?? 1, 'periode' => request('periode') ?? "", 'status' => request('status') ?? ""]);
        $data['transactions'] = $transactions;
        $data['filter'] = session('periode');
        $data['info'] = session('success') ?? session('rejected') ?? "";
        $data['search'] = request('search');
        $data['status'] = request('status');

        return Inertia::render("Dashboard", $data);
    }

    public function payment()
    {
        $buktiBayar = CCTransaction::where('id', request('id'))->first()->bukti_bayar;
        return ["bukti" => $buktiBayar];
    }

    public function file()
    {
        $file = request('kode') == "p" ? CoachingClinicParticipant::where('id', request('id'))->first()->paper_review : CoachingClinicParticipant::where('id', request('id'))->first()->member_photo;
        return ["file" => $file];
    }

    public function detail(CoachingClinicParticipant $participant)
    {
        $data['participants'] = CoachingClinicParticipant::where("paper_review", $participant->paper_review)->get();

        $data["title"] = "Participant Detail";
        $data['sectionTitle'] = "Participant Detail";

        $data["selectedTable"] = 10;
        $data["active"] = 5;
        $data["page"] = session('page');
        $data["periode"] = session('periode');
        $data['status'] = session('status');
        return Inertia::render("Dashboard", $data);
    }
}