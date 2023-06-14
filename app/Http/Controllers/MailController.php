<?php

namespace App\Http\Controllers;

use App\Mail\SemnasRejected;
use App\Mail\SemnasVerif;
use Illuminate\Http\Request;
use App\Models\SemnasParticipant;
use App\Models\SemnasTransaction;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function sendVerif(SemnasParticipant $participant)
    {
        $update = SemnasTransaction::where('id_peserta', $participant->id)->update(['status_verif' => 'DONE']);
        if ($update) {
            Mail::to($participant->email)->send(new SemnasVerif($participant));
            $event = session('event') ?? '';
            $page = session('page');
            $url = "/dashboard/national-seminar?event=$event&page=$page";
            return redirect()->to($url)->with('success', [$participant->full_name, 'success']);
        }
    }

    public function sendRejected(SemnasTransaction $transaction)
    {
        $update = $transaction->update(['status_verif' => "REJECTED"]);
        if ($update) {
            Mail::to($transaction->peserta_semnas->email)->send(new SemnasRejected($transaction));
            $event = session('event') ?? '';
            $page = session('page');
            $url = "/dashboard/national-seminar?event=$event&page=$page";
            return redirect()->to($url)->with('rejected', [$transaction->account_name, 'rejected']);
        }
    }
}
