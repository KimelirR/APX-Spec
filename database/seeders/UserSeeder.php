<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $api_key = bin2hex(random_bytes(32));
        User::create([
            'name' => 'admin',
            'email_verified_at' => now(),
			'password' => Hash::make('adminlaravel@2023'),
            'api_key' => $api_key,
            'email' => 'admin@laravel.com',
            'remember_token' => Str::random(10),
        ]);
    }
}
