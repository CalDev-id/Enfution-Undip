<?php

namespace App\Http\Middleware;

use Closure;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Controllers\SemnasTransactionController;

class URLSemnas
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        $currentDateTime = Carbon::now();
        if (URLSemnas::checkEvent() == 'summit') {
            if (!$currentDateTime->between(
                Carbon::parse(SemnasTransactionController::$timeRegist[URLSemnas::checkEvent()]['EB']['open']),
                Carbon::parse(SemnasTransactionController::$timeRegist[URLSemnas::checkEvent()]['NORMAL']['closed'])
            )) {
                return redirect()->route('national-seminar.main');
            }
        } else {
            if (
                (!$currentDateTime->between(
                    Carbon::parse(SemnasTransactionController::$timeRegist[URLSemnas::checkEvent()]['NORMAL']['open']),
                    Carbon::parse(SemnasTransactionController::$timeRegist[URLSemnas::checkEvent()]['NORMAL']['closed'])
                ) && URLSemnas::checkEvent() == 'talk-1') || (!$currentDateTime->between(
                    Carbon::parse(SemnasTransactionController::$timeRegist[URLSemnas::checkEvent()]['NORMAL']['open']),
                    Carbon::parse(SemnasTransactionController::$timeRegist[URLSemnas::checkEvent()]['NORMAL']['closed'])
                ) && URLSemnas::checkEvent() == 'talk-2')
            ) {
                return redirect()->route('national-seminar.main');
            }
        }
        return $next($request);
    }

    static private function checkEvent()
    {
        $urlForm = request()->segment(1);
        switch ($urlForm) {
            case 'registration-national-seminar':
                return "summit";
                break;
            case 'registration-EarlyTalk1':
                return "talk-1";
                break;
            case 'registration-EarlyTalk2':
                return "talk-2";
                break;
            default:
                return false;
                break;
        }
    }
}
