window.addEventListener( 'load', function() {
    displayCart()
})

function displayCart() {
    fetch("https://striveschool-api.herokuapp.com/books")
        .then( response =>
            // console.log( "response ", response.json() ) 
            response.json() 
        )
        // .then( data => console.log(data) )
        .then( showCart)
        .catch( error => console.error(error) )
}

function showCart( bookList) {
    console.log( bookList );

}