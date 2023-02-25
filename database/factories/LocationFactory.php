<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Location>
 */
class LocationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $api_key = bin2hex(random_bytes(32));
        return [
            // 'Postcode' => fake()->postcode(),
            // 'Street_Address' => fake()->streetAddress(),
            // 'Lat' => fake()->latitude(),
            // 'Long' => fake()->longitude(),
            'api_key'  => $api_key,
        ];
    }
}
