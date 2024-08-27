<?php

namespace Database\Seeders;

use App\Models\Feature;
use App\Models\Package;
use App\Models\User;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'NIKO',
            'email' => 'niko@gmail.com',
            'password' => Hash::make('niko'),
        ]);

        Feature::create([
            'image' => 'plus-icon',
            'route_name' => 'feature1.index',
            'name' => 'Feature 1',
            'description' => 'Feature 1 description',
            'required_credits' => 1,
            'active' => true
        ]);

        Feature::create([
            'image' => 'sub-icon',
            'route_name' => 'feature2.index',
            'name' => 'Feature 2',
            'description' => 'Feature 2 description',
            'required_credits' => 2,
            'active' => true
        ]);

        Package::create([
            'name' => 'Basic',
            'price'=> 5,
            'credits' => 20
        ]);

        Package::create([
            'name' => 'Sliver',
            'price'=> 20,
            'credits' => 100
        ]);

        Package::create([
            'name' => 'Gold',
            'price'=> 50,
            'credits' => 500
        ]);

    }
}
