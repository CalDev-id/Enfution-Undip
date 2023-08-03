<?php

namespace App\Http\Controllers;

use App\Mail\CCVerif;
use App\Mail\CSVerif;
use App\Mail\DBCCVerif;
use App\Mail\CCRejected;
use App\Mail\CSRejected;
use App\Models\DBCCTeam;
use App\Mail\SemnasVerif;
use App\Mail\DBCCRejected;
use Illuminate\Support\Str;
use App\Mail\SemnasRejected;
use Illuminate\Http\Request;
use App\Models\CCTransaction;
use App\Models\CSTransaction;
use App\Models\DBCCParticipant;
use App\Models\DBCCTransaction;
use App\Models\SemnasParticipant;
use App\Models\SemnasTransaction;
use Illuminate\Support\Facades\Mail;
use App\Models\CoachingClinicParticipant;
use App\Models\CoachingSessionParticipant;
use Illuminate\Support\Testing\Fakes\Fake;

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

    public function DBCCVerif(DBCCTeam $team)
    {
        $str_random = Str::random(8);
        $updated_data = [
            "status_verif" => "DONE",
            "dbcc_registration_code" => $team->team_name . "-" . $str_random
        ];
        $update = DBCCTransaction::where('id_team', $team->id)->update($updated_data);
        $email = DBCCParticipant::where('id_team', $team->id)->first()->email;
        if ($update) {
            Mail::to($email)->send(new DBCCVerif($team));
            $periode = session('periode') ?? '';
            $page = session('page');
            $url = "/dashboard/DBCC?periode=$periode&page=$page";
            return redirect()->to($url)->with('success', [$team->team_name, 'success']);
        }
    }

    public function DBCCRejected(DBCCTeam $team)
    {
        $update = DBCCTransaction::where('id_team', $team->id)->update(['status_verif' => 'REJECTED']);
        $email = DBCCParticipant::where('id_team', $team->id)->first()->email;
        if ($update) {
            Mail::to($email)->send(new DBCCRejected($team));
            $periode = session('periode') ?? '';
            $page = session('page');
            $url = "/dashboard/DBCC?periode=$periode&page=$page";
            return redirect()->to($url)->with('rejected', [$team->team_name, 'rejected']);
        }
    }

    public function CSVerif(CoachingSessionParticipant $participant)
    {
        $updated_data = [
            "status_verif" => "DONE",
            "amount" => 0
        ];
        $update = CSTransaction::where('id_first_member', $participant->id)->update($updated_data);
        $email = $participant->email;
        if ($update) {
            Mail::to($email)->send(new CSVerif($participant));
            $periode = session('periode') ?? '';
            $page = session('page');
            $url = "/dashboard/coaching-session?periode=$periode&page=$page";
            return redirect()->to($url)->with('success', [$participant->cs_transaksi->account_name, 'success']);
        }
    }

    public function CSRejected(CoachingSessionParticipant $participant)
    {
        $update = CSTransaction::where('id_first_member', $participant->id)->update(['status_verif' => 'REJECTED']);
        $email = $participant->email;
        if ($update) {
            Mail::to($email)->send(new CSRejected($participant));
            $periode = session('periode') ?? '';
            $page = session('page');
            $url = "/dashboard/coaching-session?periode=$periode&page=$page";
            return redirect()->to($url)->with('rejected', [$participant->cs_transaksi->account_name, 'rejected']);
        }
    }

    public function CCVerif(CoachingClinicParticipant $participant)
    {
        $update = CCTransaction::where('id_first_member', $participant->id)->update(['status_verif' => 'DONE']);
        $email = $participant->email;
        if ($update) {
            Mail::to($email)->send(new CCVerif($participant));
            $periode = session('periode') ?? '';
            $page = session('page');
            $url = "/dashboard/coaching-clinic?periode=$periode&page=$page";
            return redirect()->to($url)->with('success', [$participant->cc_transaksi->account_name, 'success']);
        }
    }

    public function CCRejected(CoachingClinicParticipant $participant)
    {
        $update = CCTransaction::where('id_first_member', $participant->id)->update(['status_verif' => 'REJECTED']);
        $email = $participant->email;
        if ($update) {
            Mail::to($email)->send(new CCRejected($participant));
            $periode = session('periode') ?? '';
            $page = session('page');
            $url = "/dashboard/coaching-clinic?periode=$periode&page=$page";
            return redirect()->to($url)->with('rejected', [$participant->cc_transaksi->account_name, 'rejected']);
        }
    }
}
