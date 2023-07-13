<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CSReferralCode extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $table = "cs_referral_codes";
}