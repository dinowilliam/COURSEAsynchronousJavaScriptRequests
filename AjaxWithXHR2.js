
function handleSuccess () {
    const data = JSON.parse( this.responseText ); // convert data from JSON to a JavaScript object
    console.log( data );
}
    
function handleError () { 
    console.log( 'An error occurred \uD83D\uDE1E' );
}
  
const asyncRequestObject = new XMLHttpRequest();
asyncRequestObject.open('GET', 'https://unsplash.com');
asyncRequestObject.onload = handleSuccess;
asyncRequestObject.onerror = handleError;
asyncRequestObject.send();