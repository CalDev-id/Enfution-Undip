<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\DBCCParticipant;
use App\Models\DBCCTeam;
use App\Models\DBCCTransaction;
use App\Models\SemnasReferralCode;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // SemnasReferralCode::factory()->count(3)->create();

        // Team
        // DBCCTeam::create([
        //     "team_name" => "test",
        //     "faculty_department_batch" => "test/test/23",
        //     "university_institute" => "slkalksalsa",
        //     "member_photo" => "flowchart agus.pdf",
        // ]);
        // DBCCTeam::create([
        //     "team_name" => "test2",
        //     "faculty_department_batch" => "test2/test2/23",
        //     "university_institute" => "sakslak",
        //     "member_photo" => "flowchart agus.pdf",
        // ]);

        // Participant
        DBCCParticipant::create([
            "full_name" => "sklaksla",
            "gender" => "Male",
            "place_dob" => "lksla",
            "phone_number" => "02190211",
            "line_id" => "@sajsa",
            "email" => "saklsa@gmail.com",
            "id_team" => 3,
        ]);
        DBCCParticipant::create([
            "full_name" => "kslaksla",
            "gender" => "Female",
            "place_dob" => "sla;",
            "phone_number" => "0219213211",
            "line_id" => "@lksla",
            "email" => "lksla@gmail.com",
            "id_team" => 3,
        ]);
        DBCCParticipant::create([
            "full_name" => "smasl",
            "gender" => "Female",
            "place_dob" => "dklas",
            "phone_number" => "0219022",
            "line_id" => "@kska",
            "email" => "lkskl@gmail.com",
            "id_team" => 3,
        ]);

        DBCCParticipant::create([
            "full_name" => "ls;a;ls;",
            "gender" => "Female",
            "place_dob" => "kjdkaj",
            "phone_number" => "019201",
            "line_id" => "@lksalksa",
            "email" => "ldksl@gmail.com",
            "id_team" => 4,
        ]);
        DBCCParticipant::create([
            "full_name" => "dsdsd",
            "gender" => "Female",
            "place_dob" => "dlsol",
            "phone_number" => "0832932",
            "line_id" => "@dslkdls",
            "email" => "ldksl@gmail.com",
            "id_team" => 4,
        ]);
        DBCCParticipant::create([
            "full_name" => "lsdkals",
            "gender" => "Female",
            "place_dob" => "slkalsa",
            "phone_number" => "0239232",
            "line_id" => "@slaks",
            "email" => "dksl@gmail.com",
            "id_team" => 4,
        ]);

        // Transaction
        DBCCTransaction::create([
            "account_name" => "saksa",
            "account_number" => "21201201",
            "metode_bayar" => "saksjak",
            "id_team" => 3,
            "amount" => 250000,
            "bukti_bayar" => "6p0v9obUBRSyOtv5iIdZqxB9CVVmNILx5aFVIg3r.jpg",
            "status_periode" => "EB",
        ]);

        DBCCTransaction::create([
            "account_name" => "saksla",
            "account_number" => "2120192",
            "metode_bayar" => "skalska",
            "id_team" => 4,
            "amount" => 270000,
            "bukti_bayar" => "6p0v9obUBRSyOtv5iIdZqxB9CVVmNILx5aFVIg3r.jpg",
            "status_periode" => "NR",
        ]);
    }
}
