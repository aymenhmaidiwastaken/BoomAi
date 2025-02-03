<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ai_generations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->enum('tool', [
                'text-generator',
                'image-generator',
                'code-generator',
                'chat-assistant',
                'content-rewriter',
                'seo-optimizer',
                'email-composer',
                'social-media',
                'translator',
                'summarizer',
            ]);
            $table->text('prompt');
            $table->longText('result')->nullable();
            $table->integer('tokens_used')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ai_generations');
    }
};
