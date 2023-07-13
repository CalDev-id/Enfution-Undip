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
        Schema::create('cs_transactions', function (Blueprint $table) {
            $table->id('id');
            $table->string('account_name', 100);
            $table->string('account_number', 100);
            $table->string('metode_bayar', 100);
            $table->foreignId('id_first_member');
            $table->integer('amount');
            $table->string('bukti_bayar');
            $table->enum('status_periode', ["EB", "NR"]);
            $table->enum('status_bayar', ["PENDING", "PAID"])->default('PENDING');
            $table->enum('status_verif', ["PENDING", "DONE", "REJECTED"])->default('PENDING');
            $table->timestamps();

            $table->foreign('id_first_member', 'fk_transaction_cs')->references('id')->on('cs_participants')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cs_transactions');
    }
};