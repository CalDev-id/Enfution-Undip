<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CoachingSessionParticipant extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $table = "cs_participants";

    public function dbcc_team()
    {
        return $this->belongsTo(DBCCTeam::class, 'id_team');
    }

    public function cs_transaksi()
    {
        return $this->hasOne(CSTransaction::class, "id_first_member");
    }
}