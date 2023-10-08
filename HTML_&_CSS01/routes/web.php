<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
})->name('home');

Route::get('/about', function () {
    return view('about');
})->name('about');

Route::get('/portfolio', function () {
    return view('portfolio');
})->name('portfolio');

Route::get('/contact', function () {
    return view('contact');
})->name('contact');

Route::get('/portfolio/livingroom', function () {
    return view('livingroom');
})->name('livingroom');

Route::get('/portfolio/livingroom02', function () {
    return view('livingroom02');
})->name('livingroom02');

Route::get('/portfolio/rpg', function () {
    return view('rpg');
})->name('rpg');

Route::get('/portfolio/bedroom', function () {
    return view('bedroom');
})->name('bedroom');
