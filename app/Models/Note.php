<?php

namespace App\Models;

use App\Utils\Markdown;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Facades\File;
use Spatie\YamlFrontMatter\YamlFrontMatter;
use Illuminate\Support\Str;

class Note extends Model
{
    use HasFactory;

    public $notesNames;
    public $fileSystem;
    public $converter;

    public function __construct()
    {
        $this->fileSystem = new Filesystem();
        $this->converter = new Markdown();
    }

    public function getNotes()
    {
        $notes = collect();
        $this->notesNames = collect(File::allFiles(resource_path('views/notes'), '.*'))->sortByDesc(function ($file) {
            return $file->getBasename();
        })->map(function ($file) {
            return $file->getBasename();
        });

        foreach ($this->notesNames as $noteName) {
            $notes->push($this->getNoteData($noteName));
        }
        return $notes;
    }

    public function getNoteData($filename)
    {
        $filePath = resource_path('views/notes/' . $filename);
        $fileContent = $this->fileSystem->get($filePath);

        $parsedContent = YamlFrontMatter::parse($fileContent);

        $note['id'] = $filename;
        $note['meta'] = $parsedContent->matter();
        $note['tags'] = $parsedContent->matter('tags');
        $note['slug'] = Str::replace('.md', '', $filename);
        $note['body'] = $this->converter->convert($parsedContent->body());

        return $note;
    }
}
