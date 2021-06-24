window.addEventListener('load', function () {
    displayCart()
})

function displayCart() {
    fetch("https://striveschool-api.herokuapp.com/books")
        .then(response =>
            // console.log( "response ", response.json() ) 
            response.json()
        )
        // .then( data => console.log(data) )
        .then(showCart)
        .catch(error => console.error(error))
}

function showCart(bookList) {
    console.log(bookList);

    let newBookList = ""
    bookList.forEach( book => {
        console.log( book)
        const { asin,
            category,
            img,
            price,
            title } = book
        newBookList += `<div class="col mb-6">
                            <img 
                                class="card-img-top"
                                src=${ img }
                                style="
                                    width:200px;
                                "           
                            >
                            <div class="card-body">
                                <h5 class="card-title" >${ title }</h5>
                                <p class="card-text">asin:     ${ asin }</p>
                                <p class="card-text">category: ${ category }</p>
                                <p class="card-text">price:    ${ price }</p>
                            </div>

                        </div>`
        return newBookList
    })
    console.log( newBookList);    
    document.querySelector('#display-book-list').innerHTML = newBookList

}