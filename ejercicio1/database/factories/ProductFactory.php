<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'title'=>'Nutella',
        'price'=>'10',
        'stock'=>'8',
        'image'=>'/assets/images/nutella.jpg'   
    ];
});
