<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class NoteController extends Controller
{
    public function index()
    {

        $notes = new Note();
        $notes = $notes->getNotes();

        return Inertia::render('Note/Index', ['notes' => $notes]);
    }

    public function show($slug)
    {
        // Get the document from the filesystem that matches the slug
        $notes = File::allFiles(resource_path('/views/notes'));
        foreach ($notes as $note) {
            if (basename($note) === $slug) {
                $fullPath = $note->getBasename();
                $noteObject = (new Note())->getNoteData($fullPath);
                return Inertia::render('Note/Note', ['note' => $noteObject]);
            }
        }
        abort(404);
    }
}
