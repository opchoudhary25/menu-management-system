<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppController extends Controller
{
    public function index()
    {
        return view('app'); // This will render a view called "app"
    }
}

