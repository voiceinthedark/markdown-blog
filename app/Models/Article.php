<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;

class Article extends Model
{
    use HasFactory;

    public $filesNames;
    public $fileSystem;

    public function __construct()
    {
        // Get only files that ends with .md
        $this->filesNames = collect(File::allFiles(resource_path('views/articles'), '.*'))->filter(function ($file) {
            // dd($file);
            return pathinfo($file, PATHINFO_EXTENSION) === 'md';
        })
        ->map(function ($file) {
            $directory = Arr::last(explode('/', $file->getPath()));
            return [$directory, $file->getBasename()];
        });

        $this->fileSystem = new Filesystem();
    }

    public function getLatest(){
        // $articles = [];
        // foreach ($this->filesNames as $filename) {
        //     $articles[] = $this->getArticleData($filename);
        // }
        // return collect($articles);
        return $this->filesNames;
    }

    public function getArticleData($filename){
        $file = $this->fileSystem->get(resource_path('views/'.$filename.'.md'));
        return $file;
    }

}
