<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TagController extends Controller
{
    public function index(){

    }

    public function show($tag){
        $article= new Article();
        $articles = $article->getTag($tag);
        // dd($tag, $articles);
        if($articles->count() == 0){
            return redirect('/');
        }
        return Inertia::render('Blog/Tags/Tag', ['articles' => $articles]);
    }
}
