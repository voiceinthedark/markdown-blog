<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
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

}
