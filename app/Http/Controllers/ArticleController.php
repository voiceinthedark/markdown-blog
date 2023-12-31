<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = new Article();
        $files = $articles->getLatest();
        // dd($files);
        return Inertia::render('Blog/Index', ['articles' => $files]);
    }

    public function show($slug){
        // Get the document from the filesystem that matches the slug
        $articles = File::allFiles(resource_path('/views/articles'));
        foreach ($articles as $article) {
            if(basename($article, '.md') === $slug){
                $directory = Arr::last(explode('/', $article->getPath()));
                $fullPath = [$directory, $article->getBasename()];
                $articleObject = (new Article())->getArticleData($fullPath);

                return Inertia::render('Blog/Article', ['article' => $articleObject]);
            }
        }

        abort(404);

    }

}
