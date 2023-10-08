@extends('layout')

@section('title', 'Portfolio')
@section('bg-image', 'portfolio_bg_blured.jpg')

@section('css')
    <link href="{{ asset('css/gallery.css') }}" rel="stylesheet">
@stop

@section('content')

    <div class="porfolio-container">
        <div class="image-container">
            <a href="{{ route('livingroom') }}"><img class="portfolio-thumb" src="/images/gallery01.jpg" alt="Rendered image of a living room" width="500"></a>
            <a href="{{ route('livingroom') }}"><h2>Living Room 01</h2></a>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="image-container">
            <a href="{{ route('livingroom02') }}"><img class="portfolio-thumb" src="/images/gallery02.jpg" alt="Rendered image of a living room" width="500"></a>
            <a href="{{ route('livingroom02') }}"><h2>Living Room 02</h2></a>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="image-container">
            <a href="{{ route('rpg') }}"><img class="portfolio-thumb" src="/images/gallery03.jpg" alt="Rendered image of a rpg launcher" width="500"></a>
            <a href="{{ route('rpg') }}"><h2>RPG Launcher</h2></a>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="image-container">
            <a href="{{ route('bedroom') }}"><img class="portfolio-thumb" src="/images/gallery04.jpg" alt="Rendered image of a bedroom" width="500"></a>
            <a href="{{ route('bedroom') }}"><h2>Bedroom</h2></a>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>

@stop