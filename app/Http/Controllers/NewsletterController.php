<?php

namespace App\Http\Controllers;

use App\Models\Subscriber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

use function Symfony\Component\VarDumper\Dumper\esc;

class NewsletterController extends Controller
{
    public function index()
    {
        $data["title"] = "Dashboard";
        $data["sectionTitle"] = "Subscribers";
        $data["selectedTable"] = 3;
        $data["active"] = 6;
        $req = ['search'];

        $subscribers = Subscriber::filter(request($req))->paginate(5)->withQueryString();

        $data['subscribers'] = $subscribers;
        $data['search'] = request('search');

        return Inertia::render("Dashboard", $data);
    }

    public function newsLetter()
    {
        $data["title"] = "Newsletter";
        $data["sectionTitle"] = "Send Newsletter";
        $data["selectedTable"] = 4;
        $data["active"] = 6;

        return Inertia::render("Dashboard", $data);
    }

    public function subscribe(Request $request)
    {
        $rules = [
            'email' => 'required|email|unique:subscribers',
        ];

        $validateData = $request->validate($rules);

        if (!$validateData) {
            return false;
        }

        $filterData = [
            'email' => esc(request('email')),
        ];

        Subscriber::create($filterData);
    }

    public function sendNewsLetter(Request $request)
    {
        $request->validate([
            'subject' => 'required',
            'description' => 'required',
        ]);

        $subscribers = Subscriber::all();

        foreach ($subscribers as $subscriber) {
            Mail::raw($request->description, function ($message) use ($request, $subscriber) {
                $message->to($subscriber->email)
                    ->subject($request->subject);
            });
        }

        return redirect()->back()->with('success2', 'Newsletter berhasil dikirim!')
            ->withInput(['subject' => '', 'description' => '']);
    }
}