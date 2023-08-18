<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DBCCParticipant extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $table = 'dbcc_participants';

    public function dbcc_team()
    {
        return $this->belongsTo(DBCCTeam::class, 'id_team');
    }
}