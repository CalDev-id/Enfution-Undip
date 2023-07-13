<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CoachingClinicParticipant extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $table = "cc_participants";

    public function cc_transaksi()
    {
        return $this->hasOne(CCTransaction::class, 'id_first_member');
    }
}