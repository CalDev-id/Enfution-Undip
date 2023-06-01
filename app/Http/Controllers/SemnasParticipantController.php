<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\SemnasParticipant;
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
        // dd(SemnasParticipantController::$event);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        //
        // dd(SemnasParticipantController::$event);
        return Inertia::render("Semnas/" . SemnasParticipantController::$view);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        // dd($request);
        $rules = [
            'full_name' => 'required|string|max:255',
            'faculty_departements_batch' => 'required|string|max:100',
            'gender' => 'required',
            'place_dob' => 'required|string|max:100',
            'status' => 'required',
            'university' => 'required|string|max:150',
            'phone_number' => 'required|string|max:16',
            'line_id' => 'required|string|max:20',
            'email' => 'required|max:200|unique:semnas_participants,email|email:rfc,dns',
            'ktm' => 'nullable|file|max:2048|mimes:jpg,png',
        ];

        $validateData = $request->validate($rules);

        if (!$validateData) {
            return false;
        }

        $filterData = [
            'full_name' => esc(request('full_name')),
            'faculty_departements_batch' => esc(request('faculty_departements_batch')),
            'gender' => esc(request('gender')),
            'place_dob' => esc(request('place_dob')),
            'status' => esc(request('status')),
            'university' => esc(request('university')),
            'phone_number' => esc(request('phone_number')),
            'line_id' => esc(request('line_id')),
            'email' => esc(request('email')),
            'event' => SemnasParticipantController::$event,
        ];

        if ($validateData['ktm'] != null) {
            Storage::disk('semnas_ktm')->put('', $validateData['ktm']);
            $filterData['ktm'] = Storage::disk('semnas_ktm')->put('', $validateData['ktm']);
        }

        // Get id coupun if any
        if (request('coupon')) {
            // dd(request('coupon'));
            $couponExists = SemnasReferralCode::where('code', request('coupon'))->first();
            if ($couponExists) {
                $filterData['id_referral_code'] = $couponExists->id;
            }
        }

        // dd(SemnasParticipantController::getTicketPrice());
        SemnasParticipant::create($filterData);
        Session::put([
            'id_peserta' => SemnasParticipant::where('full_name', $filterData['full_name'])->first()->id,
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
