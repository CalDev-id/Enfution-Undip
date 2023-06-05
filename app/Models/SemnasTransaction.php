<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SemnasTransaction extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    protected $table = 'semnas_transactions';

    public function peserta_semnas()
    {
        return $this->belongsTo(SemnasParticipant::class, 'id_peserta');
    }
}
