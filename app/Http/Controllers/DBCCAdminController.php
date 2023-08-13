<?php

namespace App\Http\Controllers;

use App\Models\DBCCParticipant;
use App\Models\DBCCReferralCode;
use App\Models\DBCCTeam;
use App\Models\DBCCTransaction;
use Inertia\Inertia;
use Illuminate\Http\Request;

class DBCCAdminController extends Controller
{
    //
    public function index()
    {
        $data["title"] = "DBCC";
        $data["sectionTitle"] = "Transaction DBCC";
        $data["selectedTable"] = 5;
        $data["active"] = 3;
        $req = ['periode', 'search', 'status'];
        if (request('status') == null) {
            request()->merge([
                "status" => "PENDING"
            ]);
        }
        $transactions = DBCCTransaction::filter(request($req))->where('status_bayar', 'PAID')->paginate(10)->withQueryString();
        $refcodes = DBCCReferralCode::all();
        foreach ($transactions as $trx) {
            $trx->dbcc_team;
            $trx['ref_code'] =  $trx->dbcc_team->id_referral_code ? DBCCReferralCode::where('id', $trx->dbcc_team->id_referral_code)->first()->code : '';
        }
        foreach ($refcodes as $rc) {
            $rc['used'] = count(DBCCTeam::where('id_referral_code', $rc->id)->get());
        }

        session()->put(['page' => request('page') ?? 1, 'periode' => request('periode') ?? "", 'status' => request('status') ?? ""]);
        $data['transactions'] = $transactions;
        $data['referral_codes'] = $refcodes;
        $data['filter'] = session('periode');
        $data['info'] = session('success') ?? session('rejected') ?? "";
        $data['search'] = request('search');
        $data['status'] = request('status');

        return Inertia::render("Dashboard", $data);
    }

    public function payment()
    {
        $buktiBayar = DBCCTransaction::where('id', request('id'))->first()->bukti_bayar;
        return ["bukti" => $buktiBayar];
    }

    public function detail(DBCCTeam $team)
    {
        $data["title"] = "Team Detail";
        $data['sectionTitle'] = "Team Detail - " . $team->team_name;
        $data['team'] = $team;
        $data['team']['reg_code'] = DBCCTransaction::where('id_team', $team->id)->first()->dbcc_registration_code;
        $data['participants'] = DBCCParticipant::where('id_team', $team->id)->get();

        $data["selectedTable"] = 6;
        $data["active"] = 3;
        $data["page"] = session('page');
        $data["periode"] = session('periode');
        $data['status'] = session('status');
        return Inertia::render("Dashboard", $data);
    }
}