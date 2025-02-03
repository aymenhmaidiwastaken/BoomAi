<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AiGeneration extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'tool',
        'prompt',
        'result',
        'tokens_used',
    ];

    /**
     * Get the user who created the generation.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
