<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ships extends Model
{
    protected $fillable = ['ship_name', 'ship_capacity'];
    use HasFactory;
}
