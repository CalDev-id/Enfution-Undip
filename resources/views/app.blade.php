<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
     <script>
        
        $(".step").click( function() {
        $(this).addClass("active").prevAll().addClass("active");
        $(this).nextAll().removeClass("active");
    });
    
    $(".step01").click( function() {
        $("#line-progress").css("width", "3%");
        $(".discovery").addClass("active").siblings().removeClass("active");
    });
    
    $(".step02").click( function() {
        $("#line-progress").css("width", "25%");
        $(".strategy").addClass("active").siblings().removeClass("active");
    });
    
    $(".step03").click( function() {
        $("#line-progress").css("width", "50%");
        $(".creative").addClass("active").siblings().removeClass("active");
    });
    
    $(".step04").click( function() {
        $("#line-progress").css("width", "75%");
        $(".production").addClass("active").siblings().removeClass("active");
    });
    
    $(".step05").click( function() {
        $("#line-progress").css("width", "100%");
        $(".analysis").addClass("active").siblings().removeClass("active");
    });
    
     
        </script>
</html>
