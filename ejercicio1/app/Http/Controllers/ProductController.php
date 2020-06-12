<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
class ProductController extends Controller
{
    /**
     * Store a new product resource in storage
     * 
     * @ parama  \Illuminate\Http\Request  $request
     * 
     **/
    public function add(Request $response){
        $product=Product::find($response->id);
        if(!$product){
            return response()->json(['error'=>array([
                'code'=>404,
                'message'=>'Can no t find it'],404
            )]);
        }
        $product->stock=8;
        $product->save();
        return $product;//->quantity;
        // return "product Added";
    }
}
