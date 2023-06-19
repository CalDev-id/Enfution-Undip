<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DBCCTeam extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    protected $table = 'dbcc_teams';

    public function peserta_dbcc()
    {
        $this->hasMany(DBCCParticipant::class);
    }

    public function dbcc_transaksi()
    {
        $this->hasOne(DBCCTransaction::class);
    }

    public function dbcc_referal_code()
    {
        $this->belongsTo(DBCCReferralCode::class, 'id_referral_code');
    }
}
