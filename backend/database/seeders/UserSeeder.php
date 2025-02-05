<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Aymen',
            'email' => 'admin@boomai.com',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
            'plan' => 'enterprise',
            'theme' => 'dark',
            'bio' => 'Founder & CEO of BoomAI. Passionate about making AI accessible to everyone.',
        ]);
    }
}
