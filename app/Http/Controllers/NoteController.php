<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NoteController extends Controller
{
    public function index(){

        $notes = new Note();
        $notes = $notes->getNotes();

        return Inertia::render('Note/Index', ['notes' => $notes]);

    }
}
