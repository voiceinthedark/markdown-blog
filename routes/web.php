<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\NoteController;
use App\Models\Article;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\TagController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/blog', [ArticleController::class, 'index'])->name('blog.index');
Route::get('/blog/{article}', [ArticleController::class, 'show'])->name('blog.show');
Route::get('/blog/tags/{tag}', [TagController::class, 'show'])->name('blog.tag');
Route::get('/note', [NoteController::class, 'index'])->name('note.index');
Route::get('/note/{note}', [NoteController::class, 'show'])->name('note.show');
