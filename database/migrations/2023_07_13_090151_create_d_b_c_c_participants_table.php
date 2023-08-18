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
        Schema::create('dbcc_participants', function (Blueprint $table) {
            $table->id('id');
            $table->string('full_name', 255);
            $table->enum('gender', ['Male', 'Female']);
            $table->string('place_dob', 100);
            $table->string('phone_number', 16);
            $table->string('line_id', 20);
            $table->string('email', 200);
            $table->foreignId('id_team');
            $table->timestamps();

            $table->foreign('id_team', 'fk_participant_team')->references('id')->on('dbcc_teams')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dbcc_participants');
    }
};