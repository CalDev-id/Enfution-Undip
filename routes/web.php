<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SemnasParticipantController;
use App\Http\Controllers\SemnasTransactionController;
use App\Models\semnas_participant;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use PHPUnit\Framework\Attributes\Group;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('HomePage');
})->name('home');

// Route::get('/national-seminar', function () {
//     return Inertia::render('NationalSeminar');
// })->name('national-seminar.hello');

Route::get('/DBCC', function () {
    return Inertia::render('DBCCPage');
})->name('dbcc');

Route::get('/registration-dbcc', function () {
    return Inertia::render('DBCC/FormDBCC');
})->name('form-dbcc');

Route::get('/registration-coaching-session', function () {
    return Inertia::render('DBCC/FormSession');
})->name('form-session');

Route::get('/registration-coaching-clinic', function () {
    return Inertia::render('DBCC/FormClinic');
})->name('form-clinic');

// Route::get('/payment-confirmation-semnas', [SemnasParticipantController::class, 'transaction'])->name('payment-confirmation');

Route::controller(SemnasParticipantController::class)->name('national-seminar.')->group(function () {
    Route::get('/national-seminar', 'index')->name('main');
    // Load form
    Route::get('/registration-national-seminar', 'create')->name('form-summit')->middleware('url-semnas');
    Route::get('/registration-EarlyTalk1', 'create')->name('form-et1')->middleware('url-semnas');
    Route::get('/registration-EarlyTalk2', 'create')->name('form-et2')->middleware('url-semnas');
    // Process Form
});

// Sementara kek gini dulu dah yak, nanti gua cara lain lagi wkwk
Route::post('/registration-national-seminar', [SemnasParticipantController::class, 'store'])->middleware('url-semnas');
Route::post('/registration-EarlyTalk1', [SemnasParticipantController::class, 'store'])->middleware('url-semnas');
Route::post('/registration-EarlyTalk2', [SemnasParticipantController::class, 'store'])->middleware('url-semnas');


Route::get('/payment-confirmation-semnas', [SemnasTransactionController::class, 'transaction'])->name('national-seminar.payment-confirmation')->middleware('payment-semnas');
Route::post('/payment-confirmation-semnas', [SemnasTransactionController::class, 'save'])->middleware('payment-semnas');



Route::get('/payment-confirmation-dbcc', function () {
    return Inertia::render('DBCC/PaymentConfirmation');
})->name('payment-confirmation');



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
