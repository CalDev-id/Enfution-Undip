<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('semnas_transactions', function (Blueprint $table) {
            $table->id('id_transaksi');
            $table->string('account_name', 100);
            $table->string('account_number', 100);
            $table->string('metode_bayar', 100);
            $table->foreignId('id_peserta');
            $table->foreignId('id_referral_code');
            $table->integer('amount');
            $table->string('bukti_bayar');
            $table->enum('status_bayar', ["PAID", "PENDING"])->default('PENDING');
            $table->enum('status_verif', ["PENDING", "DONE", "REJECTED"])->default('PENDING');

            $table->foreign('id_peserta', 'fk_transactions_peserta')->references('id')->on('semnas_participants')->cascadeOnDelete();
            $table->foreign('id_referral_code', 'fk_transactions_referral_code')->references('id')->on('semnas_referral_codes')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('semnas_transactions');
    }
};
