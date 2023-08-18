<?php

namespace App\Models;

use App\Models\DBCCParticipant;
use App\Models\DBCCTransaction;
use App\Models\DBCCReferralCode;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class DBCCTeam extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    protected $table = 'dbcc_teams';

    public function peserta_dbcc()
    {
        return $this->hasMany(DBCCParticipant::class, 'id_team');
    }

    public function dbcc_transaksi()
    {
        return $this->hasOne(DBCCTransaction::class, 'id_team');
    }

    public function dbcc_referal_code()
    {
        return $this->belongsTo(DBCCReferralCode::class, 'id_referral_code');
    }

    public function peserta_cs()
    {
        return $this->hasMany(CoachingSessionParticipant::class, 'id_team');
    }
}