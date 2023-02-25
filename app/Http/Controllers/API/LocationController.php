<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\PostCodeRequest;
use App\Http\Requests\StoreLocationRequest;
use App\Http\Requests\UpdateLocationRequest;
use App\Http\Resources\LocationResource;
use App\Http\Resources\LocationShowResource;
use App\Http\Resources\SingleLocation;
use App\Http\Resources\SingleLocationResource;
use App\Models\Location;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\Console\Input\Input;

class LocationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $location = Location::query()->orderBy('id', 'asc')->paginate(10);
        return LocationResource::collection($location);
    }

    public function allpostcodes()
    {
        return LocationResource::collection(Location::all());
    }

    public function queryPostcode(request $request)
    {
            $postcode = $request->input('postcode');

            $location = DB::table('locations')
                    ->select('ID','Postcode','Street_Address','Lat','Long')
                    ->where('Postcode', '=', $postcode)
                    ->whereNotNull('Postcode')
                    ->get();

            if(sizeof($location) == 0){
                $response =['status' => 'Not Found! Check your Postcode and try again', 'message' => 'Not Found'];
                return response()->json($response,404);
            }
            else{
                $response =['status' => 'success', 'locations' => $location];
                return response()->json($response,200);
            }
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLocationRequest $request)
    {
        $data = $request->validated();
        $location = Location::create($data);
        return response()->json(new LocationResource($location),201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return new LocationResource(Location::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLocationRequest $request, string $id)
    {
        $data = $request->validated();
        $location = Location::findOrFail($id);
        $location->update($data);
        return new LocationResource($location);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($location)
    {
        $location = Location::findOrFail($location);
        $location->delete($location);
        return response()->json([""=>""],204);
    }
}

// $token = bin2hex(random_bytes(32));
//                 $response =['token' => $token];
//                 return response()->json($response,404);
