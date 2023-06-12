<?php

use App\Http\Controllers\MailController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SemnasAdminController;
use App\Http\Controllers\SemnasParticipantController;
use App\Http\Controllers\SemnasTransactionController;
use App\Models\semnas_participant;
use App\Models\SemnasParticipant;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use PHPUnit\Framework\Attributes\Group;


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


// Awal DBCC

Route::get('/DBCC', function () {
    return Inertia::render('DBCCPage');
})->name('dbcc');

Route::get('/registration-dbcc', function () {
    // return Inertia::render('DBCC/FormDBCC');
    return redirect()->route('dbcc');
})->name('form-dbcc');

Route::get('/registration-coaching-session', function () {
    // return Inertia::render('DBCC/FormSession');
    return redirect()->route('dbcc');
})->name('form-session');

Route::get('/registration-coaching-clinic', function () {
    // return Inertia::render('DBCC/FormClinic');
    return redirect()->route('dbcc');
})->name('form-clinic');

Route::get('/payment-confirmation-dbcc', function () {
    // return Inertia::render('DBCC/PaymentConfirmation');
    return redirect()->route('dbcc');
})->name('payment-confirmation');

// Akhir DBCC

// Awal Dashboard
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [SemnasAdminController::class, 'index'])->name('dashboard');
    Route::get('/dashboard/national-seminar', [SemnasAdminController::class, 'semnas'])->name('dashboard-semnas');
    Route::get('/dashboard/DBCC', [SemnasAdminController::class, 'DBCC'])->name('dashboard-DBCC');
    Route::get('/getPaymentSlip', [SemnasAdminController::class, 'payment']);
    Route::get('/detail-semnas-participant/{participant}', [SemnasAdminController::class, 'detail']);
    Route::get('/sendVerif/{participant}', [MailController::class, 'sendVerif']);
    Route::get('/rejected/{transaction}', [MailController::class, 'sendRejected']);
});
// Akhir Dashboard

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
