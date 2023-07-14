<?php

namespace App\Http\Middleware;

use Closure;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Controllers\DBCCTransactionController;

class URLDBCC
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $currentDateTime = Carbon::now();
        if (URLDBCC::checkEvent() == 'summit') {
            if (!$currentDateTime->between(
                Carbon::parse(DBCCTransactionController::$timeRegist[URLDBCC::checkEvent()]['EB']['open']),
                Carbon::parse(DBCCTransactionController::$timeRegist[URLDBCC::checkEvent()]['NORMAL']['closed'])
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
            case 'registration-dbcc':
                return "summit";
                break;
            default:
                return false;
                break;
        }
    }
}
