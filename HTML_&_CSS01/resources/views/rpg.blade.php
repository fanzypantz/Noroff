@extends('layout')

@section('title', 'Portfolio')
@section('bg-image', 'andreas-tollanes-rpg_blur.jpg')

@section('css')
<link href="{{ asset('css/gallery.css') }}" rel="stylesheet">
<link href="{{ asset('css/gallery_single.css') }}" rel="stylesheet">
@stop

@section('content')

<div class="porfolio-container">
    <div class="image-container">
        <img class="portfolio-thumb" src="/images/andreas-tollanes-rpg.jpg" alt="Rendered image of a rpg launcher">
        <h2>RPG Launcher</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</div>

@stop
