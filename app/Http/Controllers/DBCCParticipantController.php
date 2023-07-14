<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\DBCCParticipant;
use App\Models\DBCCTransaction;
use App\Models\DBCCReferralCode;
use App\Models\DBCCTeam;
use App\Policies\DBCCParticipantPolicy;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use function Symfony\Component\VarDumper\Dumper\esc;

class DBCCParticipantController extends Controller
{
    static private $view;
    static private $event;

    public function __construct()
    {
        DBCCParticipantController::segmentURL();
    }

    public function index()
    {
        $currentDateTime = Carbon::now();
        $time_regist = "";

        if ($currentDateTime->between(
            Carbon::parse(DBCCTransactionController::$timeRegist["summit"]['EB']['open']),
            Carbon::parse(DBCCTransactionController::$timeRegist["summit"]['EB']['closed'])
        )) {
            $time_regist = "EB";
        } elseif ($currentDateTime->between(
            Carbon::parse(DBCCTransactionController::$timeRegist["summit"]['NORMAL']['open']),
            Carbon::parse(DBCCTransactionController::$timeRegist["summit"]['NORMAL']['closed'])
        )) {
            $time_regist = "NORMAL";
        }


        $data = [
            "ticketPrice" => DBCCTransactionController::$ticketPrice["summit"][$time_regist] ?? 0,
            "timeRegist" => $time_regist,
        ];
        return Inertia::render('DBCCPage', $data);
    }


    static private function segmentURL()
    {
        $urlForm = request()->segment(1);
        switch ($urlForm) {
            case 'registration-dbcc':
                DBCCParticipantController::$view = 'FormDBCC';
                DBCCParticipantController::$event = 'summit';
                break;
            default:
                return false;
                break;
        }
    }

    public function create()
    {
        $data = [];
        $currentDateTime = Carbon::now();
        if (DBCCParticipantController::$event == "summit") {
            if ($currentDateTime->between(
                Carbon::parse(DBCCTransactionController::$timeRegist[DBCCParticipantController::$event]['EB']['open']),
                Carbon::parse(DBCCTransactionController::$timeRegist[DBCCParticipantController::$event]['EB']['closed'])
            )) {
                $data['time_regist'] = "Early Bird";
            } else {
                $data['time_regist'] = "Normal";
            }
        } else {
            $data['time_regist'] = "Normal";
        }

        if (session()->has('not_success')) {
            $data['info'] = session('not_success');
        }

        if (session()->has('email_not_valid')) {
            $data['email_not_valid'] = session('email_not_valid');
        }
        return Inertia::render("DBCC/" . DBCCParticipantController::$view, $data);
    }

    public function store(Request $request)
    {
        // Team
        $rulesteam = [
            'team_name' => 'required|string|max:255',
            'faculty_department_batch' => 'required|string|max:100',
            'university_institute' => 'required|string|max:150',
            'member_photo' => 'required|mimetypes:application/pdf|max:2048',
        ];

        $validateDataTeam = $request->validate($rulesteam);

        if (!$validateDataTeam) {
            return false;
        }

        $filterDataTeam = [
            'team_name' => esc(request('team_name')),
            'faculty_department_batch' => esc(request('faculty_department_batch')),
            'university_institute' => esc(request('university_institute')),
            'event' => DBCCParticipantController::$event,
        ];

        if ($validateDataTeam['member_photo'] != null) {
            $path = 'uploads/dbcc_members';
            $extension = $validateDataTeam['member_photo']->getClientOriginalExtension();
            $filename = uniqid() . '.' . $extension;
            $validateDataTeam['member_photo']->move($path, $filename);
            $filterDataTeam['member_photo'] = $filename;
        }

        if (request('coupon')) {
            $couponExists = DBCCReferralCode::where('code', request('coupon'))->first();
            $couponQty = (int) $couponExists->qty;
            if ($couponExists && $couponQty > 0) {
                $filterDataTeam['id_referral_code'] = $couponExists->id;
                $couponQty--;
                $couponExists->update(['qty' => $couponQty]);
            }
        }

        $team = DBCCTeam::create($filterDataTeam);

        // Person 1
        $rules = [
            'full_name' => 'required|string|max:255',
            'gender' => 'required',
            'place_dob' => 'required|string|max:100',
            'phone_number' => 'required|string|max:16',
            'line_id' => 'required|string|max:20',
            'email' => 'required|max:200|email:rfc,dns',
        ];

        $validateData = $request->validate($rules);

        if (!$validateData) {
            return false;
        }

        if (request('email')) {
            $getDomain = explode('@', request('email'));
            $lastDomain = end($getDomain);
            if ($lastDomain != "gmail.com") {
                session()->flash("email_not_valid", "Please enter a valid Gmail address.");
                switch (session('event')) {
                    case 'summit':
                        return redirect()->route('dbcc.form-summit');
                        break;
                    default:
                        return false;
                        break;
                }
            }
        }

        $filterData = [
            'full_name' => esc(request('full_name')),
            'gender' => esc(request('gender')),
            'place_dob' => esc(request('place_dob')),
            'phone_number' => esc(request('phone_number')),
            'line_id' => esc(request('line_id')),
            'email' => esc(request('email')),
            'id_team' => $team->id,
            'event' => DBCCParticipantController::$event,
        ];

        $teamLeader = DBCCParticipant::create($filterData);

        $filterDataTeamLeader = [
            'id_leader' => $teamLeader->id,
        ];

        DBCCTeam::where('id', $team->id)->update($filterDataTeamLeader);

        // Person 2
        $rules2 = [
            'full_name2' => 'required|string|max:255',
            'gender2' => 'required',
            'place_dob2' => 'required|string|max:100',
            'phone_number2' => 'required|string|max:16',
            'line_id2' => 'required|string|max:20',
            'email2' => 'required|max:200|email:rfc,dns',
        ];

        $validateData2 = $request->validate($rules2);

        if (!$validateData2) {
            return false;
        }

        if (request('email2')) {
            $getDomain = explode('@', request('email2'));
            $lastDomain = end($getDomain);
            if ($lastDomain != "gmail.com") {
                session()->flash("email_not_valid", "Please enter a valid Gmail address.");
                switch (session('event')) {
                    case 'summit':
                        return redirect()->route('dbcc.form-summit');
                        break;
                    default:
                        return false;
                        break;
                }
            }
        }

        $filterData2 = [
            'full_name' => esc(request('full_name2')),
            'gender' => esc(request('gender2')),
            'place_dob' => esc(request('place_dob2')),
            'phone_number' => esc(request('phone_number2')),
            'line_id' => esc(request('line_id2')),
            'email' => esc(request('email2')),
            'id_team' => $team->id,
            'event' => DBCCParticipantController::$event,
        ];

        DBCCParticipant::create($filterData2);

        // Person 3
        $rules3 = [
            'full_name3' => 'required|string|max:255',
            'gender3' => 'required',
            'place_dob3' => 'required|string|max:100',
            'phone_number3' => 'required|string|max:16',
            'line_id3' => 'required|string|max:20',
            'email3' => 'required|max:200|email:rfc,dns',
        ];

        $validateData3 = $request->validate($rules3);

        if (!$validateData3) {
            return false;
        }

        if (request('email3')) {
            $getDomain = explode('@', request('email3'));
            $lastDomain = end($getDomain);
            if ($lastDomain != "gmail.com") {
                session()->flash("email_not_valid", "Please enter a valid Gmail address.");
                switch (session('event')) {
                    case 'summit':
                        return redirect()->route('dbcc.form-summit');
                        break;
                    default:
                        return false;
                        break;
                }
            }
        }

        $filterData3 = [
            'full_name' => esc(request('full_name3')),
            'gender' => esc(request('gender3')),
            'place_dob' => esc(request('place_dob3')),
            'phone_number' => esc(request('phone_number3')),
            'line_id' => esc(request('line_id3')),
            'email' => esc(request('email3')),
            'id_team' => $team->id,
            'event' => DBCCParticipantController::$event,
        ];

        DBCCParticipant::create($filterData3);

        $tempTrx = [
            "id_team" => DBCCTeam::all()->sortByDesc('created_at')->where('team_name', $filterDataTeam['team_name'])->first()->id,
        ];
        DBCCTransaction::create($tempTrx);
        Session::put([
            'id_team' => $tempTrx['id_team'],
            'event' => DBCCParticipantController::$event,
        ]);
        return redirect()->route('dbcc.payment-confirmation');
    }
}
