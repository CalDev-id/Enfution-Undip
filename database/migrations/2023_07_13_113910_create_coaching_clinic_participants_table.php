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
        Schema::create('cc_participants', function (Blueprint $table) {
            $table->id('id');
            $table->string('full_name', 255);
            $table->enum('gender', ['Male', 'Female']);
            $table->string('place_dob', 100);
            $table->string('email', 200);
            $table->string('line_id', 20);
            $table->string('phone_number', 16);
            $table->string('faculty_department_batch', 255);
            $table->string('university_institute', 150);
            $table->string('member_photo', 255);
            $table->string('paper_review', 255);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cc_participants');
    }
};