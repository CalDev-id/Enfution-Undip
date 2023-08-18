<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\CSTransaction;
use App\Models\CoachingSessionParticipant;

class CSAdminController extends Controller
{
    //
    public function index()
    {
        $data["title"] = "Coaching Session";
        $data["sectionTitle"] = "Transaction Coaching Session";
        $data["selectedTable"] = 7;
        $data["active"] = 4;
        $req = ['periode', 'search', 'status'];
        if (request('status') == null) {
            request()->merge([
                "status" => "PENDING"
            ]);
        }
        $transactions = CSTransaction::filter(request($req))->where('status_bayar', 'PAID')->paginate(10)->withQueryString();
        foreach ($transactions as $trx) {
            $trx = $trx->cs_participant;
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
        $buktiBayar = CSTransaction::where('id', request('id'))->first()->bukti_bayar;
        return ["bukti" => $buktiBayar];
    }

    public function file()
    {
        $file = request('kode') == "p" ? CoachingSessionParticipant::where('id', request('id'))->first()->dbcc_payment_slip : CoachingSessionParticipant::where('id', request('id'))->first()->member_photo;
        return ["file" => $file];
    }

    public function detail(CoachingSessionParticipant $participant)
    {
        $data['team'] = $participant->id_team ? $participant->dbcc_team : "";
        $data['participants'] = !$participant->id_team ? CoachingSessionParticipant::where("outside_dbcc", $participant->outside_dbcc)->get() : ($participant->type == "Bundle" ? $data['team']->peserta_cs : [$participant]);

        $data["title"] = "Participant Detail";
        $data['sectionTitle'] = "Participant Detail";

        $data["selectedTable"] = 8;
        $data["active"] = 4;
        $data["page"] = session('page');
        $data["periode"] = session('periode');
        $data['status'] = session('status');
        return Inertia::render("Dashboard", $data);
    }
}