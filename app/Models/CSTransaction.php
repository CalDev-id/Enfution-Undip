<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CSTransaction extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $table = "cs_transactions";
    protected $with = ['cs_participant'];

    public function scopeFilter($query, array $filters)
    {
        $query->when(
            $filters['search'] ?? false,
            fn ($query, $search) =>
            $query->where(fn ($query) => $query->where('account_name', 'like', '%' . $search . '%')->orWhere('account_number', 'like', '%' . $search . '%'))->orWhere(fn ($query) =>
            $query->whereHas('cs_participant', fn ($query) => $query->where('dbcc_registration_code', $search)))
        );
        $query->when(
            $filters['status'] ?? false,
            fn ($query, $status) =>
            $query->where(fn ($query) => $query->where('status_verif', $status))
        );
        $query->when(
            $filters['periode'] ?? false,
            fn ($query, $periode) =>
            $query->where(fn ($query) => $query->where('status_periode', $periode))
        );
    }

    public function cs_participant()
    {
        return $this->belongsTo(CoachingSessionParticipant::class, 'id_first_member');
    }
}