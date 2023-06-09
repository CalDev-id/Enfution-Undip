<?php

namespace App\Http\Controllers;

use App\Mail\SemnasVerif;
use Illuminate\Http\Request;
use App\Models\SemnasParticipant;
use App\Models\SemnasTransaction;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function sendVerif(SemnasParticipant $participant)
    {
        // dd($participant);
        Mail::to($participant->email)->send(new SemnasVerif($participant));
        SemnasTransaction::where('id_peserta', $participant->id)->update(['status_verif' => 'DONE']);
        $event = session('event') ?? '';
        $page = session('page');
        $url = "/dashboard/national-seminar?event=$event&page=$page";
        return redirect()->to($url)->with('success', [$participant->full_name, 'success']);
    }
}
