<?php

namespace App\Http\Controllers;

use App\Models\Ships;
use Illuminate\Http\Request;

class ShipsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ships = Ships::all();
        return response()->json([
            'success' => true,
            'data' => $ships,
            'message' => 'Succesfully Fetched'
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $ship = new Ships();
        $ship->ship_name = $request->ship_name;
        $ship->ship_capacity = $request->ship_capacity;
        $ship->save();

        return response()->json([
            'success' => true,
            'data' => $ship,
            'message' => 'Succesfully created'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ships  $ships
     * @return \Illuminate\Http\Response
     */
    public function show(Ships $ships)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Ships  $ships
     * @return \Illuminate\Http\Response
     */
    public function edit(Ships $ships)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Ships  $ships
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Ships $ships)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ships  $ships
     * @return \Illuminate\Http\Response
     */
    public function destroy(Ships $ships)
    {
        //
    }
}
