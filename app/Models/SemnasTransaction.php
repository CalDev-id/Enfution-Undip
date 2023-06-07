<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SemnasTransaction extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    protected $table = 'semnas_transactions';
    protected $with = ['peserta_semnas'];

    public function scopeFilter($query, array $filters)
    {
        $query->when(
            $filters['event'] ?? false,
            fn ($query, $event) =>
            $query->whereHas('peserta_semnas', fn ($query) => $query->where('event', $event))
        );
    }


    public function peserta_semnas()
    {
        return $this->belongsTo(SemnasParticipant::class, 'id_peserta');
    }
}
