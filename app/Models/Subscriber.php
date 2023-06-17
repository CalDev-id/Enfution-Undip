<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
    
class Subscriber extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    protected $table = 'subscribers';

    public function scopeFilter($query, array $filters)
    {
        $query->when(
            $filters['search'] ?? false,
            fn ($query, $search) =>
            $query->where(fn ($query) => $query->where('email', 'like', '%' . $search . '%'))
        );
    }
}