<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\SemnasParticipant;
use App\Models\SemnasTransaction;
use App\Models\SemnasReferralCode;

use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use function Symfony\Component\VarDumper\Dumper\esc;

class SemnasParticipantController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    static private $view;
    static private $event;

    public function __construct()
    {
        SemnasParticipantController::segmentURL();
    }

    public function index()
    {
        return Inertia::render('NationalSeminar');
    }


    static private function segmentURL()
    {
        $urlForm = request()->segment(1);
        switch ($urlForm) {
            case 'registration-national-seminar':
                SemnasParticipantController::$view = 'FormSemnas';
                SemnasParticipantController::$event = 'summit';
                break;
            case 'registration-EarlyTalk1':
                SemnasParticipantController::$view = 'FormET1';
                SemnasParticipantController::$event = 'talk-1';
                break;
            case 'registration-EarlyTalk2':
                SemnasParticipantController::$view = 'FormET2';
                SemnasParticipantController::$event = 'talk-2';
                break;
            default:
                return false;
                break;
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {

        $data = [];
        $currentDateTime = Carbon::now();
        if (SemnasParticipantController::$event == "summit") {
            if ($currentDateTime->between(
                Carbon::parse(SemnasTransactionController::$timeRegist[SemnasParticipantController::$event]['EB']['open']),
                Carbon::parse(SemnasTransactionController::$timeRegist[SemnasParticipantController::$event]['EB']['closed'])
            )) {
                $data['time_regist'] = "Early Bird";
            } elseif ($currentDateTime->between(
                Carbon::parse(SemnasTransactionController::$timeRegist[SemnasParticipantController::$event]['PS1']['open']),
                Carbon::parse(SemnasTransactionController::$timeRegist[SemnasParticipantController::$event]['PS1']['closed'])
            )) {
                $data['time_regist'] = "Presale 1";
            } elseif ($currentDateTime->between(
                Carbon::parse(SemnasTransactionController::$timeRegist[SemnasParticipantController::$event]['PS2']['open']),
                Carbon::parse(SemnasTransactionController::$timeRegist[SemnasParticipantController::$event]['PS2']['closed'])
            )) {
                $data['time_regist'] = "Presale 2";
            } else {
                $data['time_regist'] = "Normal";
            }
        } else {
            $data['time_regist'] = "Normal";
        }

        if (session()->has('not_success')) {
            $data['info'] = session('not_success');
        }
        return Inertia::render("Semnas/" . SemnasParticipantController::$view, $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        // dd($request);
        $rules = [
            'full_name' => 'required|string|max:255',
            'faculty_departements_batch' => 'nullable|string|max:100',
            'gender' => 'required',
            'place_dob' => 'required|string|max:100',
            'status' => 'required',
            'university' => 'nullable|string|max:150',
            'phone_number' => 'required|string|max:16',
            'line_id' => 'required|string|max:20',
            'email' => 'required|max:200|unique:semnas_participants,email|email:rfc,dns',
            'ktm' => 'nullable|file|max:2048|mimes:jpg,png',
        ];

        // dd(request());
        if (request('status') != "Non-Student" && request('status')) {
            $rules['faculty_departements_batch'] = 'required|string|max:100';
            $rules['university'] = 'required|string|max:150';
        }

        $validateData = $request->validate($rules);

        if (!$validateData) {
            return false;
        }

        $filterData = [
            'full_name' => esc(request('full_name')),
            'gender' => esc(request('gender')),
            'place_dob' => esc(request('place_dob')),
            'status' => esc(request('status')),
            'phone_number' => esc(request('phone_number')),
            'line_id' => esc(request('line_id')),
            'email' => esc(request('email')),
            'event' => SemnasParticipantController::$event,
        ];

        if (request('faculty_departements_batch')) {
            $filterData['faculty_departements_batch'] = esc(request('faculty_departements_batch'));
        }

        if (request('university')) {
            $filterData['university'] = esc(request('university'));
        }

        if ($validateData['ktm'] != null) {
            Storage::disk('semnas_ktm')->put('', $validateData['ktm']);
            $filterData['ktm'] = Storage::disk('semnas_ktm')->put('', $validateData['ktm']);
        }

        // Get id coupun if any
        if (request('coupon')) {
            $couponExists = SemnasReferralCode::where('code', request('coupon'))->first();
            $couponQty = (int) $couponExists->qty;
            if ($couponExists && $couponQty > 0) {
                $filterData['id_referral_code'] = $couponExists->id;
                $couponQty--;
                $couponExists->update(['qty' => $couponQty]);
            }
        }

        SemnasParticipant::create($filterData);

        $tempTrx = [
            "id_peserta" => SemnasParticipant::all()->sortByDesc('created_at')->where('full_name', $filterData['full_name'])->first()->id,
        ];
        SemnasTransaction::create($tempTrx);
        Session::put([
            'id_peserta' => $tempTrx['id_peserta'],
            'event' => SemnasParticipantController::$event,
        ]);
        return redirect()->route('national-seminar.payment-confirmation');
    }

    /**
     * Display the specified resource.
     */

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SemnasParticipant $semnas_participant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SemnasParticipant $semnas_participant)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SemnasParticipant $semnas_participant)
    {
        //
    }
}