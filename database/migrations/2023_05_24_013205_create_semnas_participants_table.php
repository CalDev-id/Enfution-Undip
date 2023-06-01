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
        Schema::create('semnas_participants', function (Blueprint $table) {
            $table->id('id');
            $table->string('full_name', 255);
            $table->string('faculty_departements_batch', 100);
            $table->enum('gender', ['Male', 'Female']);
            $table->string('place_dob', 100);
            $table->enum('status', ["Undergraduate", "Student", "Non-student"]);
            $table->string('university', 150);
            $table->string('phone_number', 16);
            $table->string('line_id', 20);
            $table->string('email', 200);
            $table->string('ktm', 30)->nullable();
            $table->enum('event', ["talk-1", "talk-2", "semnas"]);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('semnas_participants');
    }
};
