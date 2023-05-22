<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/national-seminar', function () {
    return Inertia::render('NationalSeminar');
})->name('national-seminar');

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



Route::get('/registration-national-seminar', function () {
    return Inertia::render('Semnas/FormSemnas');
})->name('form-semnas');
Route::get('/registration-EarlyTalk1', function () {
    return Inertia::render('Semnas/FormET1');
})->name('form-et1');
Route::get('/registration-EarlyTalk2', function () {
    return Inertia::render('Semnas/FormET2');
})->name('form-et2');



Route::get('/payment-confirmation-dbcc', function () {
    return Inertia::render('DBCC/PaymentConfirmation');
})->name('payment-confirmation');

Route::get('/payment-confirmation-semnas', function () {
    return Inertia::render('Semnas/PaymentConfirmation');
})->name('payment-confirmation');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
