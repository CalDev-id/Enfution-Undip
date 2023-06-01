<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SemnasParticipant extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    protected $table = 'semnas_participants';

    public function semnas_transaksi()
    {
        return $this->hasOne(SemnasTransaction::class);
    }

    public function referral_code_semnas()
    {
        return $this->belongsTo(SemnasReferralCode::class, 'id_referral_code');
    }
}
