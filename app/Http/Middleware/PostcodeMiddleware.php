<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class PostcodeMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $validator = Validator::make($request->all(), [
            'postcode' => 'required|string',
            'api_key' => 'required|string'
        ]);

        if ($validator->fails())
        {
           $errors = implode(" ", $validator->errors()->all());
           $response =['status' => 'error', 'message' => $errors];
           return response()->json($response,400);
        }
        else
        {
            $api_key = $request->input('api_key');
            $postcode = $request->input('postcode');

            $location = DB::table('users')
                    ->select('api_key')
                    ->where('api_key', '=', $api_key)
                    ->where('status', '=', 'active')
                    ->whereNotNull('api_key')
                    ->get();

            if(sizeof($location) == 0){
                $response = ['status'=>'Access denied! Please provide a valid api_key'];
                return response()->json($response,401);
            }
            else{
                return $next($request);
            }
        }
    }
}
