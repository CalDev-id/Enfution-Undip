<?php

namespace App\Http\Controllers;

use App\Models\CCTransaction;
use App\Models\CSTransaction;
use App\Models\DBCCTransaction;
use Inertia\Inertia;
use App\Models\Subscriber;
use App\Models\SemnasTransaction;

class DashboardController extends Controller
{
    //
    public function index()
    {
        $data["title"] = "Dashboard";
        $data["sectionTitle"] = "Welcome to Dashboard, Admin!";
        $data["selectedTable"] = 0;
        $data["active"] = 1;

        $data['semnas'] = [
            "pendapatan" => SemnasTransaction::where('status_bayar', "PAID")->where('status_verif', "DONE")->sum('amount'),
            "pendaftar" => count(SemnasTransaction::all()->where('status_bayar', "PAID")),
            "pending" => count(SemnasTransaction::all()->where('status_bayar', "PAID")->where('status_verif', "PENDING")),
            "done" => count(SemnasTransaction::all()->where('status_bayar', "PAID")->where('status_verif', "DONE")),
            "rejected" => count(SemnasTransaction::all()->where('status_bayar', "PAID")->where('status_verif', "REJECTED")),
        ];

        $data['dbcc'] = [
            "pendapatan" => DBCCTransaction::where('status_bayar', "PAID")->where('status_verif', "DONE")->sum('amount'),
            "pendaftar" => count(DBCCTransaction::all()->where('status_bayar', "PAID")),
            "pending" => count(DBCCTransaction::all()->where('status_bayar', "PAID")->where('status_verif', "PENDING")),
            "done" => count(DBCCTransaction::all()->where('status_bayar', "PAID")->where('status_verif', "DONE")),
            "rejected" => count(DBCCTransaction::all()->where('status_bayar', "PAID")->where('status_verif', "REJECTED")),
        ];

        $data['cs'] = [
            "pendapatan" => CSTransaction::where('status_bayar', "PAID")->where('status_verif', "DONE")->sum('amount'),
            "pendaftar" => count(CSTransaction::all()->where('status_bayar', "PAID")),
            "pending" => count(CSTransaction::all()->where('status_bayar', "PAID")->where('status_verif', "PENDING")),
            "done" => count(CSTransaction::all()->where('status_bayar', "PAID")->where('status_verif', "DONE")),
            "rejected" => count(CSTransaction::all()->where('status_bayar', "PAID")->where('status_verif', "REJECTED")),
        ];

        $data['cc'] = [
            "pendapatan" => CCTransaction::where('status_bayar', "PAID")->where('status_verif', "DONE")->sum('amount'),
            "pendaftar" => count(CCTransaction::all()->where('status_bayar', "PAID")),
            "pending" => count(CCTransaction::all()->where('status_bayar', "PAID")->where('status_verif', "PENDING")),
            "done" => count(CCTransaction::all()->where('status_bayar', "PAID")->where('status_verif', "DONE")),
            "rejected" => count(CCTransaction::all()->where('status_bayar', "PAID")->where('status_verif', "REJECTED")),
        ];

        $data['subs'] = [
            "subscriber" => count(Subscriber::all()),
        ];
        return Inertia::render("Dashboard", $data);
    }
}