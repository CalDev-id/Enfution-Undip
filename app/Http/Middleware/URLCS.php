<?php

namespace App\Http\Middleware;

use Closure;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Controllers\CSTransactionController;

class URLCS
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $currentDateTime = Carbon::now();
        if (URLCS::checkEvent() == 'cs') {
            if (!$currentDateTime->between(
                Carbon::parse(CSTransactionController::$timeRegistCS[URLCS::checkEvent()]['EB']['open']),
                Carbon::parse(CSTransactionController::$timeRegistCS[URLCS::checkEvent()]['NORMAL']['closed'])
            )) {
                return redirect()->route('dbcc.main');
            }
        }
        return $next($request);
    }

    static private function checkEvent()
    {
        $urlForm = request()->segment(1);
        switch ($urlForm) {
            case 'registration-coaching-session':
                return "cs";
                break;
            default:
                return false;
                break;
        }
    }
}
