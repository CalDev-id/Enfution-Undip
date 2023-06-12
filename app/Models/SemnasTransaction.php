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
            $filters['search'] ?? false,
            fn ($query, $search) =>
            $query->where(fn ($query) => $query->where('account_name', 'like', '%' . $search . '%')->orWhere('account_number', 'like', '%' . $search . '%'))
        );
        $query->when(
            $filters['status'] ?? false,
            fn ($query, $status) =>
            $query->where(fn ($query) => $query->where('status_verif', $status))
        );
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
