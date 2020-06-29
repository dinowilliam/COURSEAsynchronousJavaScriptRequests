
function handleSuccess () {
    // In the function, the `this` value is the XHR object
    // This.responseText holds the response from the server
    console.log( this.responseText ); // the HTML of https://unsplash.com/
}

function handleError () {
    // In the function, the `this` value is the XHR object
    console.log( 'An error occurred 😞' );
}

// The Ajax request are created
const asyncRequestObject = new XMLHttpRequest();
asyncRequestObject.open('GET', 'https://unsplash.com/');
asyncRequestObject.onload = handleSuccess;
asyncRequestObject.onerror = handleError;
asyncRequestObject.send();
