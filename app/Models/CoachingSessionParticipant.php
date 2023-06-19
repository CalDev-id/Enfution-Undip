<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CoachingSessionParticipant extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $table = "cs_participants";
}
