
// Function to initialize the Facebook SDK
function initializeFacebookSDK() {
    window.fbAsyncInit = function() {
        FB.init({
            appId      : 'your-app-id', // Replace 'your-app-id' with your actual Facebook App ID
            cookie     : true,         // Enable cookies to allow the server to access the session
            xfbml      : true,         // Parse social plugins on this webpage
            version    : 'api-version' // Use 'api-version', e.g., 'v14.0'
        });

        // Log a page view using Facebook Analytics
        FB.AppEvents.logPageView();

        // Check login status
        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
    };

    // Load the Facebook SDK asynchronously
    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return; // If the script is already there, do not load it again
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js"; // URL to the Facebook SDK
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}

// Callback function to handle the result of the authentication
function statusChangeCallback(response) {
    console.log('Facebook login status changed.');
    console.log(response);  // Log the current login status.
    if (response.status === 'connected') {
        // The user is logged in and has authenticated your app.
        console.log('User successfully logged in with Facebook.');
        // You can add a redirect here or initialize the user experience
    } else if (response.status === 'not_authorized') {
        // The user is logged into Facebook, but not your app.
        console.log('User logged into Facebook, but not the app.');
    } else {
        // The user is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        console.log('User not logged into Facebook.');
    }
}

// Call the function to initialize the Facebook SDK
initializeFacebookSDK();

