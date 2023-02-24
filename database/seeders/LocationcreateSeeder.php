<?php

namespace Database\Seeders;

use App\Models\Location;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LocationcreateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Location::create([
            'Postcode' => '50555',
            'Street_Address' => '555 Switzerland',
            'Lat' => '22.896325',
            'Long' => '26.826999',
        ]);
    }
}
