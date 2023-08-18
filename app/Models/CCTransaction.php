<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CCTransaction extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $table = "cc_transactions";

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
            $filters['periode'] ?? false,
            fn ($query, $periode) =>
            $query->where(fn ($query) => $query->where('status_periode', $periode))
        );
    }

    public function cc_participant()
    {
        return $this->belongsTo(CoachingClinicParticipant::class, 'id_first_member');
    }
}