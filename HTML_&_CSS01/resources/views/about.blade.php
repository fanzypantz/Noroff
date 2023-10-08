@extends('layout')

@section('title', 'About')
@section('bg-image', 'portfolio_bg_blured02.jpg')

@section('css')
    <link href="{{ asset('css/about.css') }}" rel="stylesheet">
@stop

@section('content')

    <div class="about-container">
        <img class="headshot" src="/images/headshot.jpg" alt="Picture of Andreas Tollånes" width="500">
        <h1>Andreas Halvorsen Tollånes</h1>
        <p>I am a developer with experience in everything from game design to programming, 3D art/animation and backend web development.</p>
        <p>Current occupation: Studying frontend development at Noroff</p>
        <span class="social-icons">
        <a href="https://www.facebook.com/fanzypantzy">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
        </a>
        <a href="https://www.linkedin.com/in/andreas-toll%C3%A5nes-7b438b61/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
            </svg>
        </a>
        <a href="mailto:andreas@tollanes.com" target="_top">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
            </svg>
        </a>
    </span>
    </div>

@stop