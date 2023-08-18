<?php

use App\Http\Controllers\CCAdminController;
use App\Http\Controllers\CSAdminController;
use App\Http\Controllers\CSParticipantController;
use App\Http\Controllers\CSTransactionController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DBCCAdminController;
use App\Http\Controllers\DBCCParticipantController;
use App\Http\Controllers\DBCCTransactionController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\SemnasAdminController;
use App\Http\Controllers\SemnasParticipantController;
use App\Http\Controllers\SemnasTransactionController;
use App\Http\Controllers\NewsletterController;
use App\Models\CSTransaction;
use App\Models\semnas_participant;
use App\Models\SemnasParticipant;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use PHPUnit\Framework\Attributes\Group;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

Route::get('/', function () {
    return Inertia::render('HomePage');
})->name('home');


// Awal Semnas

Route::get('/national-seminar', [SemnasParticipantController::class, 'index'])->name('national-seminar.main');

Route::controller(SemnasParticipantController::class)->middleware('url-semnas')->group(function () {
    // Load form
    Route::get('/registration-national-seminar', 'create')->name('national-seminar.form-summit');
    Route::get('/registration-EarlyTalk1', 'create')->name('national-seminar.form-et1');
    Route::get('/registration-EarlyTalk2', 'create')->name('national-seminar.form-et2');
    // Process Form
    Route::post('/registration-national-seminar', 'store');
    Route::post('/registration-EarlyTalk1', 'store');
    Route::post('/registration-EarlyTalk2', 'store');
});

Route::controller(SemnasTransactionController::class)->middleware('payment-semnas')->group(function () {
    Route::get('/payment-confirmation-semnas', 'transaction')->name('national-seminar.payment-confirmation');
    Route::post('/payment-confirmation-semnas', 'save');
});

// Akhir Semnas

// Awal DBCC | CS | CC

Route::get('/DBCC', [DBCCParticipantController::class, 'index'])->name('dbcc.main');

Route::controller(DBCCParticipantController::class)->middleware('url-dbcc')->group(function () {
    // Load Form
    Route::get('/registration-dbcc', 'create')->name('dbcc.form-summit');
    // Process Form
    Route::post('/registration-dbcc', 'store');
});

Route::controller(CSParticipantController::class)->middleware('url-cs')->group(function () {
    // Load Form
    Route::get('/registration-coaching-session', 'create')->name('dbcc.form-cs');
    // Process Form
    Route::post('/registration-coaching-session', 'store');
});

// Route::controller(CCParticipantController::class)->middleware('url-cc')->group(function () {
//     // Load Form
//     Route::get('/registration-coaching-clinic', 'create')->name('dbcc.form-cc');
//     // Process Form
//     Route::get('/registration-coaching-clinic', 'store');
// });

Route::controller(DBCCTransactionController::class)->middleware('payment-dbcc')->group(function () {
    Route::get('/payment-confirmation-dbcc', 'transaction')->name('dbcc.payment-confirmation');
    Route::post('/payment-confirmation-dbcc', 'save');
});

Route::controller(CSTransactionController::class)->middleware('payment-cs')->group(function () {
    Route::get('/payment-confirmation-cs', 'transaction')->name('cs.payment-confirmation');
    Route::post('/payment-confirmation-cs', 'save');
});

// Akhir DBCC | CS | CC

// Awal Subscribe

Route::post('/subscribe', [NewsletterController::class, 'subscribe'])->name('subscribe');

// Akhir Subscribe

// Awal CC

Route::get('/registration-coaching-clinic', function () {
    // return Inertia::render('DBCC/FormClinic');
    return redirect()->route('dbcc.main');
})->name('form-clinic');

// Akhir CC

// Awal Dashboard
Route::middleware(['auth', 'verified'])->group(function () {
    // Semnas
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/dashboard/national-seminar', [SemnasAdminController::class, 'semnas'])->name('dashboard-semnas');
    Route::get('/getPaymentSlipSemnas', [SemnasAdminController::class, 'payment']);
    Route::get('/detail-semnas-participant/{participant}', [SemnasAdminController::class, 'detail']);
    Route::get('/sendVerif/{participant}', [MailController::class, 'sendVerif']);
    Route::get('/rejected/{transaction}', [MailController::class, 'sendRejected']);
    Route::get('/printSemnas', [ReportController::class, 'printVerif']);

    // DBCC
    Route::get('/dashboard/DBCC', [DBCCAdminController::class, 'index'])->name('dashboard-DBCC');
    Route::get('/getPaymentSlipDBCC', [DBCCAdminController::class, 'payment']);
    Route::get('/detail-dbcc-participant/{team}', [DBCCAdminController::class, 'detail']);
    Route::get('/DBCCVerif/{team}', [MailController::class, 'DBCCVerif']);
    Route::get('/DBCCRejected/{team}', [MailController::class, 'DBCCRejected']);
    Route::get('/printDBCC', [ReportController::class, 'printDBCCVerif']);

    // Coaching Session
    Route::get('/dashboard/coaching-session', [CSAdminController::class, 'index'])->name('dashboard-CS');
    Route::get('/getPaymentSlipCS', [CSAdminController::class, 'payment']);
    Route::get('/getDetailFileCS', [CSAdminController::class, 'file']);
    Route::get('/detail-cs-participant/{participant}', [CSAdminController::class, 'detail']);
    Route::get('/CSVerif/{participant}', [MailController::class, 'CSVerif']);
    Route::get('/CSRejected/{participant}', [MailController::class, 'CSRejected']);
    Route::get('/printCS', [ReportController::class, 'printCSVerif']);

    // Coaching Clinic
    Route::get('/dashboard/coaching-clinic', [CCAdminController::class, 'index'])->name('dashboard-CC');
    Route::get('/getPaymentSlipCC', [CCAdminController::class, 'payment']);
    Route::get('/getDetailFileCC', [CCAdminController::class, 'file']);
    Route::get('/detail-cc-participant/{participant}', [CCAdminController::class, 'detail']);
    Route::get('/CCVerif/{participant}', [MailController::class, 'CCVerif']);
    Route::get('/CCRejected/{participant}', [MailController::class, 'CCRejected']);
    Route::get('/printCC', [ReportController::class, 'printCCVerif']);

    // Newsletter
    Route::get('/dashboard/subscriber', [NewsletterController::class, 'index'])->name('dashboard-subscriber');
    Route::get('/newsLetter', [NewsletterController::class, 'newsLetter'])->name('newsLetter');
    Route::post('/sendNewsLetter', [NewsletterController::class, 'sendNewsLetter']);
});
// Akhir Dashboard

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
