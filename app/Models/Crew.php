<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Crew extends Model
{
    protected $fillable = ['avatar', 'ship_id', 'first_name', 'middle_name', 'last_name', 'phone' ,'email', 'address'];
    use HasFactory;
}
