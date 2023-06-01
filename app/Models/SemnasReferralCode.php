<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SemnasReferralCode extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    protected $table = 'semnas_referral_codes';

    public function peserta_semnas()
    {
        return $this->hasMany(SemnasParticipant::class);
    }
}
