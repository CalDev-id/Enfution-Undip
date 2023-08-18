<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DBCCReferralCode extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $table = 'dbcc_referral_codes';

    public function dbcc_team()
    {
        return $this->hasMany(DBCCTeam::class);
    }
}