<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DBCCTransaction extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $table = 'dbcc_transactions';

    public function dbcc_team()
    {
        $this->belongsTo(DBCCTeam::class, 'id_team');
    }
}
