@extends('layout')

@section('title', 'Home')
@section('bg-image', 'andreas-tollanes-render01.jpg')

@section('css')
<link href="{{ asset('css/index.css') }}" rel="stylesheet">
@stop

@section('content')

<div class="main-title">
    <h1>Developer</h1>
    <svg>
        <line x1="0" y1="0" x2="300" y2="0" style="stroke:rgb(255,255,255);stroke-width:10" />
    </svg>
    <h1>Designer</h1>
</div>

@stop