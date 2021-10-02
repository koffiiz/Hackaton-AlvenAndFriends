<?php

namespace App\Http\Controllers;

use App\Models\Crew;
use Illuminate\Http\Request;

class CrewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $crews = Crew::all();
        return response()->json([
            'success' => true,
            'data' => $crews,
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
        // ship_id: shipId,
        //     phone: phone,
        //     address: address
        $crew = new Crew;
        $crew->first_name = $request->first_name; 
        $crew->middle_name = $request->middle_name; 
        $crew->last_name = $request->last_name; 
        $crew->email = $request->email;
        $crew->phone = $request->phone;
        $crew->ship_id = $request->ship_id;
        $crew->address = $request->address;
        
        $crew->save();

        return response()->json([
            'success' => true,
            'data' => $crew,
            'message' => 'Succesfully created'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Crew  $crew
     * @return \Illuminate\Http\Response
     */
    public function show(Crew $crew)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Crew  $crew
     * @return \Illuminate\Http\Response
     */
    public function edit(Crew $crew)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Crew  $crew
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Crew $crew)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Crew  $crew
     * @return \Illuminate\Http\Response
     */
    public function destroy(Crew $crew)
    {
        //
    }
}
