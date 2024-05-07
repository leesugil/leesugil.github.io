// Load jQuery from CDN
var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

script.onload = function() {
    // Your custom jQuery-dependent code can go here
    $(document).ready(function() {
        console.log("jQuery has been loaded and is ready.");
        // Example: Change the background color of all paragraphs
        $("p").css("background-color", "yellow");
    });
};

