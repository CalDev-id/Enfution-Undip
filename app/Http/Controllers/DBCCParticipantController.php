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

        $time_registCS = "";

        if ($currentDateTime->between(
            Carbon::parse(CSTransactionController::$timeRegistCS["cs"]['EB']['open']),
            Carbon::parse(CSTransactionController::$timeRegistCS["cs"]['EB']['closed'])
        )) {
            $time_registCS = "EB";
        } elseif ($currentDateTime->between(
            Carbon::parse(CSTransactionController::$timeRegistCS["cs"]['NORMAL']['open']),
            Carbon::parse(CSTransactionController::$timeRegistCS["cs"]['NORMAL']['closed'])
        )) {
            $time_registCS = "NORMAL";
        }

        $data = [
            "ticketPrice" => DBCCTransactionController::$ticketPrice["summit"][$time_regist] ?? 0,
            "timeRegist" => $time_regist,
            "ticketPriceCS" => CSTransactionController::$ticketPriceCS["cs"][$time_registCS]["Person"] ?? 0,
            "timeRegistCS" => $time_registCS,
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

        if (session()->has('refcode_not_found')) {
            $data['refcode_not_found'] = session('refcode_not_found');
        }
        return Inertia::render("DBCC/" . DBCCParticipantController::$view, $data);
    }

    public function store(Request $request)
    {
        // Validate Team
        $rulesteam = [
            'team_name' => 'required|string|max:100',
            'faculty_department_batch' => 'required|string|max:100',
            'university_institute' => 'required|string|max:150',
            'member_photo' => 'required|mimetypes:application/pdf|max:2048',
        ];

        $validateDataTeam = $request->validate($rulesteam);

        if (!$validateDataTeam) {
            return false;
        }

        // Validate Team Leader
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

        // Validate Person 2
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

        // Validate Person 3
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

        // Insert Team Leader
        $filterData = [
            'full_name' => esc(request('full_name')),
            'gender' => esc(request('gender')),
            'place_dob' => esc(request('place_dob')),
            'phone_number' => esc(request('phone_number')),
            'line_id' => esc(request('line_id')),
            'email' => esc(request('email')),
            'event' => DBCCParticipantController::$event,
        ];

        $teamLeaderExist = DBCCParticipant::where('phone_number', $filterData['phone_number'])->where('email', $filterData['email'])->where('line_id', $filterData['line_id'])->first();

        if (!$teamLeaderExist) {
            $rulesteam['team_name'] = 'required|string|max:100|unique:dbcc_teams,team_name';
            $validateDataTeam = $request->validate($rulesteam);
            if (!$validateDataTeam) {
                return false;
            }
        }

        $teamLeader = null;
        if (!$teamLeaderExist) {
            if (request('coupon')) {
                $couponExistsLeader = DBCCReferralCode::where('code', request('coupon'))->first();
                // Cek apakah ada kupon
                if ($couponExistsLeader) {
                    $couponQtyLeader = (int) $couponExistsLeader->qty;
                    if ($couponQtyLeader > 0) {
                        $teamLeader = DBCCParticipant::create($filterData);
                    } else {
                        session()->flash("refcode_not_found", "Referral code is out of stock, please leave the referral code field blank");
                        return redirect()->route('dbcc.form-summit');
                    }
                } else {
                    session()->flash("refcode_not_found", "Referral code not found, please leave the referral code field blank.");
                    return redirect()->route('dbcc.form-summit');
                }
            } else {
                $teamLeader = DBCCParticipant::create($filterData);
            }
        } else {
            $teamLeader = $teamLeaderExist;
        }

        $filterDataTeam = [
            'team_name' => esc(request('team_name')),
            'faculty_department_batch' => esc(request('faculty_department_batch')),
            'id_leader' => $teamLeader->id,
            'university_institute' => esc(request('university_institute')),
            'event' => DBCCParticipantController::$event,
        ];

        // Check Coupon
        $teamExists = null;
        if (request('coupon')) {
            $couponExists = DBCCReferralCode::where('code', request('coupon'))->first();
            // Cek apakah ada kupon
            if ($couponExists) {
                $teamExists = DBCCTeam::where('team_name', request('team_name'))->where('id_leader', $teamLeader->id)->first();
                $couponQty = (int) $couponExists->qty;
                if (!$teamExists) {
                    if ($couponQty > 0) {
                        $filterDataTeam['id_referral_code'] = $couponExists->id;
                        $couponQty--;
                        $couponExists->update(['qty' => $couponQty]);
                    } else {
                        session()->flash("refcode_not_found", "Referral code is out of stock, please leave the referral code field blank");
                        return redirect()->route('dbcc.form-summit');
                    }
                } elseif ($teamExists) {
                    if ($teamExists->id_referral_code != $couponExists->id) {
                        session()->flash("refcode_not_found", "Referral code mismatch, please enter the referral code during your initial registration.");
                        return redirect()->route('dbcc.form-summit');
                    }
                }
            } else {
                session()->flash("refcode_not_found", "Referral code not found, please leave the referral code field blank.");
                return redirect()->route('dbcc.form-summit');
            }
        } else {
            $teamExists = DBCCTeam::where('team_name', request('team_name'))->where('id_leader', $teamLeader->id)->first();
        }

        if ($validateDataTeam['member_photo'] != null) {
            $path = 'uploads/dbcc_members';
            $extension = $validateDataTeam['member_photo']->getClientOriginalExtension();
            $filename = uniqid() . '.' . $extension;
            $validateDataTeam['member_photo']->move($path, $filename);
            $filterDataTeam['member_photo'] = $filename;
        }

        if (!$teamExists) {
            $team = DBCCTeam::create($filterDataTeam);
            DBCCParticipant::where('id', $teamLeader->id)->update(['id_team' => $team->id]);
        }

        $leader = DBCCParticipant::where('id', $teamLeader->id)->first();

        // Person 2
        $filterData2 = [
            'full_name' => esc(request('full_name2')),
            'gender' => esc(request('gender2')),
            'place_dob' => esc(request('place_dob2')),
            'phone_number' => esc(request('phone_number2')),
            'line_id' => esc(request('line_id2')),
            'email' => esc(request('email2')),
            'id_team' => $leader->id_team,
            'event' => DBCCParticipantController::$event,
        ];

        // Person 3
        $filterData3 = [
            'full_name' => esc(request('full_name3')),
            'gender' => esc(request('gender3')),
            'place_dob' => esc(request('place_dob3')),
            'phone_number' => esc(request('phone_number3')),
            'line_id' => esc(request('line_id3')),
            'email' => esc(request('email3')),
            'id_team' => $leader->id_team,
            'event' => DBCCParticipantController::$event,
        ];

        $tempTrx = [
            "id_team" => DBCCTeam::all()->sortByDesc('created_at')->where('team_name', $filterDataTeam['team_name'])->first()->id,
        ];

        if (!$teamExists) {
            DBCCParticipant::create($filterData2);
            DBCCParticipant::create($filterData3);
            DBCCTransaction::create($tempTrx);
        }

        Session::put([
            'id_team' => $tempTrx['id_team'],
            'event' => DBCCParticipantController::$event,
        ]);
        return redirect()->route('dbcc.payment-confirmation');
    }
}
