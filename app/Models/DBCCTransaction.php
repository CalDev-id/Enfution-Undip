<?php

namespace App\Models;

use App\Models\DBCCTeam;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class DBCCTransaction extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $table = 'dbcc_transactions';

    public function scopeFilter($query, array $filters)
    {
        $query->when(
            $filters['search'] ?? false,
            fn ($query, $search) =>
            $query->where(fn ($query) => $query->where('account_name', 'like', '%' . $search . '%')->orWhere('account_number', 'like', '%' . $search . '%'))->orWhere('dbcc_registration_code', $search)
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

    public function dbcc_team()
    {
        return $this->belongsTo(DBCCTeam::class, 'id_team');
    }
}