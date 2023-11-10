<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;

class ItemSearchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->search;
        $data = Cache::remember('itemSearch_' . urlencode($search), 120, function () use ($search) {
            $response =  Http::withToken(config('services.kassalapp.key'))->get('https://kassal.app/api/v1/products', [
                'search' => $search,
                'unique' => false
            ]);
            return $response->json();
        });

        return $data;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $ean)
    {
        $data = Cache::remember('ean' . urlencode($ean), 120, function () use ($ean) {
            $response =  Http::withToken(config('services.kassalapp.key'))->get('https://kassal.app/api/v1/products/ean/' . $ean, []);
            return $response->json();
        });

        return $data;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
