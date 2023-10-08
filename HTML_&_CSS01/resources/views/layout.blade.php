<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Andreas Tollånes - @yield('title')</title>


        <!-- Fonts -->


        <!-- Styles -->
        <link href="{{ asset('css/normalize.css') }}" rel="stylesheet">
        <link href="{{ asset('css/base.css') }}" rel="stylesheet">
        @yield('css')
    </head>
    <body>
        <div class="container">
            <div class="menu">
                <nav class="nav">
                    <div class="top-bar"></div>
                    <div class="bottom-bar"></div>
                    <div class="nav-section name-container line">
                        <a href="{{ route('home') }}"><h2 class="name">andreas</h2></a>
                        <svg><line x1="0" y1="0" x2="140" y2="0" style="stroke:rgb(255,255,255);stroke-width:8" /></svg>
                        <a href="{{ route('home') }}"><h2 class="name">Tollånes</h2></a>
                    </div>
                    <div class="nav-links line">
                        <ul>
                            <li>
                                <a href="{{ route('home') }}">Home</a>
                            </li>
                            <li>
                                <svg><line x1="0" y1="0" x2="140" y2="0" style="stroke:rgb(255,255,255);stroke-width:8" /></svg>
                            </li>
                            <li>
                                <a href="{{ route('portfolio') }}">Portfolio</a>
                            </li>
                            <li>
                                <svg><line x1="0" y1="0" x2="140" y2="0" style="stroke:rgb(255,255,255);stroke-width:8" /></svg>
                            </li>
                            <li>
                                <a href="{{ route('about') }}">About</a>
                            </li>
                        </ul>
                    </div>
                    <div class="nav-section social">
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
                </nav>

            </div>
            <div class="content">
                <img class="bg-image" src="/images/@yield('bg-image')" alt="Rendered background-image of a living room">
                @yield('content')
            </div>
        </div>
    </body>
</html>
