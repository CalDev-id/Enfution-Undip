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
        Schema::create('dbcc_teams', function (Blueprint $table) {
            $table->id('id');
            $table->string('team_name', 255);
            $table->string('faculty_department_batch', 255);
            $table->string('university_institute', 150);
            $table->string('member_photo', 255);
            $table->foreignId('id_referral_code')->nullable();
            $table->timestamps();

            $table->foreign('id_referral_code', 'fk_team_referral_code')->references('id')->on('dbcc_referral_codes')->nullOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dbcc_teams');
    }
};