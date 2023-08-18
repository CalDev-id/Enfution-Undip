<?php

namespace App\Http\Controllers;

use App\Models\CoachingSessionParticipant;
use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\CoachingSessionParticipantParticipant;
use App\Models\CSTransaction;
use App\Models\DBCCTeam;
use App\Policies\CSParticipantPolicy;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use function Symfony\Component\VarDumper\Dumper\esc;

class CSParticipantController extends Controller
{
    static private $view;
    static private $event;

    public function __construct()
    {
        CSParticipantController::segmentURL();
    }

    public function index()
    {
        $currentDateTime = Carbon::now();
        $time_regist = "";

        if ($currentDateTime->between(
            Carbon::parse(CSTransactionController::$timeRegistCS["cs"]['EB']['open']),
            Carbon::parse(CSTransactionController::$timeRegistCS["cs"]['EB']['closed'])
        )) {
            $time_regist = "EB";
        } elseif ($currentDateTime->between(
            Carbon::parse(CSTransactionController::$timeRegistCS["cs"]['NORMAL']['open']),
            Carbon::parse(CSTransactionController::$timeRegistCS["cs"]['NORMAL']['closed'])
        )) {
            $time_regist = "NORMAL";
        }


        $data = [
            "ticketPriceCS" => CSTransactionController::$ticketPriceCS["cs"][$time_regist]["Person"] ?? 0,
            "timeRegistCS" => $time_regist,
        ];
        return Inertia::render('DBCCPage', $data);
    }


    static private function segmentURL()
    {
        $urlForm = request()->segment(1);
        switch ($urlForm) {
            case 'registration-coaching-session':
                CSParticipantController::$view = 'FormSession';
                CSParticipantController::$event = 'cs';
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
        if (CSParticipantController::$event == "cs") {
            if ($currentDateTime->between(
                Carbon::parse(CSTransactionController::$timeRegistCS[CSParticipantController::$event]['EB']['open']),
                Carbon::parse(CSTransactionController::$timeRegistCS[CSParticipantController::$event]['EB']['closed'])
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
        return Inertia::render("DBCC/" . CSParticipantController::$view, $data);
    }

    public function store(Request $request)
    {
        $rulesType = [
            'type' => 'required',
        ];

        $validateDataType = $request->validate($rulesType);

        if (!$validateDataType) {
            return false;
        }

        $filterDataType = [
            'type' => esc(request('type')),
        ];

        // Person 1
        if ($filterDataType['type'] != 'Person') {
            $rules = [
                'type' => 'required',
                'full_name' => 'required|string|max:255',
                'gender' => 'required',
                'place_dob' => 'required|string|max:100',
                'email' => 'required|max:200|email:rfc,dns',
                'line_id' => 'required|string|max:20',
                'phone_number' => 'required|string|max:16',
                'faculty_department_batch' => 'required|string|max:100',
                'university_institute' => 'required|string|max:150',
                'dbcc_participant' => 'required',
                'member_photo' => 'required|mimetypes:application/pdf|max:2048',
            ];
        } else {
            $rules = [
                'type' => 'required',
                'full_name' => 'required|string|max:255',
                'gender' => 'required',
                'place_dob' => 'required|string|max:100',
                'email' => 'required|max:200|email:rfc,dns',
                'line_id' => 'required|string|max:20',
                'phone_number' => 'required|string|max:16',
                'faculty_department_batch' => 'required|string|max:100',
                'university_institute' => 'required|string|max:150',
                'dbcc_participant' => 'required',
                'member_photo' => 'required|file|max:2048|mimes:jpg,png',
            ];
        }

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
                    case 'cs':
                        return redirect()->route('dbcc.form-cs');
                        break;
                    default:
                        return false;
                        break;
                }
            }
        }

        $filterData = [
            'type' => esc(request('type')),
            'full_name' => esc(request('full_name')),
            'gender' => esc(request('gender')),
            'place_dob' => esc(request('place_dob')),
            'email' => esc(request('email')),
            'line_id' => esc(request('line_id')),
            'phone_number' => esc(request('phone_number')),
            'faculty_department_batch' => esc(request('faculty_department_batch')),
            'university_institute' => esc(request('university_institute')),
            'dbcc_participant' => esc(request('dbcc_participant')),
            'event' => CSParticipantController::$event,
        ];

        if ($validateData['member_photo'] != null) {
            $path = '/home/n1567050/public_html/uploads/cs_members';
            $extension = $validateData['member_photo']->getClientOriginalExtension();
            $filename = uniqid() . '.' . $extension;
            $validateData['member_photo']->move($path, $filename);
            $filterData['member_photo'] = $filename;
        }

        if ($filterDataType['type'] != 'Person') {
            $rules2 = [
                'type' => 'required',
                'full_name2' => 'required|string|max:255',
                'gender2' => 'required',
                'place_dob2' => 'required|string|max:100',
                'email2' => 'required|max:200|email:rfc,dns',
                'line_id2' => 'required|string|max:20',
                'phone_number2' => 'required|string|max:16',
                'faculty_department_batch2' => 'required|string|max:100',
                'university_institute2' => 'required|string|max:150',
                'dbcc_participant' => 'required',
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
                        case 'cs':
                            return redirect()->route('dbcc.form-cs');
                            break;
                        default:
                            return false;
                            break;
                    }
                }
            }

            $filterData2 = [
                'type' => esc(request('type')),
                'full_name' => esc(request('full_name2')),
                'gender' => esc(request('gender2')),
                'place_dob' => esc(request('place_dob2')),
                'email' => esc(request('email2')),
                'line_id' => esc(request('line_id2')),
                'phone_number' => esc(request('phone_number2')),
                'faculty_department_batch' => esc(request('faculty_department_batch2')),
                'university_institute' => esc(request('university_institute2')),
                'dbcc_participant' => esc(request('dbcc_participant')),
                'member_photo' => $filename,
                'event' => CSParticipantController::$event,
            ];

            $rules3 = [
                'type' => 'required',
                'full_name3' => 'required|string|max:255',
                'gender3' => 'required',
                'place_dob3' => 'required|string|max:100',
                'email3' => 'required|max:200|email:rfc,dns',
                'line_id3' => 'required|string|max:20',
                'phone_number3' => 'required|string|max:16',
                'faculty_department_batch3' => 'required|string|max:100',
                'university_institute3' => 'required|string|max:150',
                'dbcc_participant' => 'required',
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
                        case 'cs':
                            return redirect()->route('dbcc.form-cs');
                            break;
                        default:
                            return false;
                            break;
                    }
                }
            }

            $filterData3 = [
                'type' => esc(request('type')),
                'full_name' => esc(request('full_name3')),
                'gender' => esc(request('gender3')),
                'place_dob' => esc(request('place_dob3')),
                'email' => esc(request('email3')),
                'line_id' => esc(request('line_id3')),
                'phone_number' => esc(request('phone_number3')),
                'faculty_department_batch' => esc(request('faculty_department_batch3')),
                'university_institute' => esc(request('university_institute3')),
                'dbcc_participant' => esc(request('dbcc_participant')),
                'member_photo' => $filename,
                'event' => CSParticipantController::$event,
            ];
        }

        // Validate DBCC Participant
        if ($filterData['dbcc_participant'] != 'N') {
            $rulesdbccparticipant = [
                'team_name' => 'required|string|max:100|exists:dbcc_teams,team_name',
                'dbcc_registration_code' => 'required|string|max:150|exists:dbcc_transactions,dbcc_registration_code',
                'dbcc_payment_slip' => 'required|file|max:2048|mimes:jpg,png'
            ];
    
            $validateDataDBCCParticipant = $request->validate($rulesdbccparticipant);
    
            if (!$validateDataDBCCParticipant) {
                return false;
            }

            $team = DBCCTeam::where('team_name', $validateDataDBCCParticipant['team_name'])->first();
    
            $filterDataDBCCParticipant = [
                'id_team' => $team->id,
                'dbcc_registration_code' => esc(request('dbcc_registration_code')),
            ];
    
            if ($validateDataDBCCParticipant['dbcc_payment_slip'] != null) {
                $path = '/home/n1567050/public_html/uploads/cs_payment_dbcc_proof';
                $extension = $validateDataDBCCParticipant['dbcc_payment_slip']->getClientOriginalExtension();
                $filename = uniqid() . '.' . $extension;
                $validateDataDBCCParticipant['dbcc_payment_slip']->move($path, $filename);
                $filterDataDBCCParticipant['dbcc_payment_slip'] = $filename;
            }
        }

        
        $Person1 = CoachingSessionParticipant::create($filterData);

        if ($filterData['dbcc_participant'] != 'Y') {
            $filterDataNotDBCCParticipant = [
                'outside_dbcc' => 'OUT-' . $Person1->id,
            ];
        }

        if ($filterDataType['type'] != 'Person') {
            $Person2 = CoachingSessionParticipant::create($filterData2);
            $Person3 = CoachingSessionParticipant::create($filterData3);
        }

        if ($filterData['dbcc_participant'] != 'N') {
            CoachingSessionParticipant::where('id', $Person1->id)->update($filterDataDBCCParticipant);
        }

        if (($filterDataType['type'] != 'Person') && ($filterData['dbcc_participant'] != 'N')) {
            CoachingSessionParticipant::where('id', $Person2->id)->update($filterDataDBCCParticipant);
            CoachingSessionParticipant::where('id', $Person3->id)->update($filterDataDBCCParticipant);
        }

        if (($filterDataType['type'] != 'Person') && ($filterData['dbcc_participant'] != 'Y')) {
            CoachingSessionParticipant::where('id', $Person1->id)->update($filterDataNotDBCCParticipant);
            CoachingSessionParticipant::where('id', $Person2->id)->update($filterDataNotDBCCParticipant);
            CoachingSessionParticipant::where('id', $Person3->id)->update($filterDataNotDBCCParticipant);
        } elseif (($filterDataType['type'] != 'Bundle') && ($filterData['dbcc_participant'] != 'Y')) {
            CoachingSessionParticipant::where('id', $Person1->id)->update($filterDataNotDBCCParticipant);
        }

        $tempTrx = [
            "id_first_member" => CoachingSessionParticipant::all()->sortByDesc('created_at')->where('full_name', $filterData['full_name'])->first()->id,
        ];
        CSTransaction::create($tempTrx);
        Session::put([
            'id_peserta' => $tempTrx['id_first_member'],
            'event' => CSParticipantController::$event,
            'type' => $filterDataType['type'],
            'dbcc_part' => $filterData['dbcc_participant'],
        ]);
        return redirect()->route('cs.payment-confirmation');
    }
}
