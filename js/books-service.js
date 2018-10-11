var gBooks = []
var gdeleteBook
var gCurrId
var gIdx = 0

function createNewBook(book, price) {
    var newBook = {
        id: gIdx++,
        title: book,
        price: price,
        rating: '0'
    }
    gBooks.push(newBook)
    localStorage.books = JSON.stringify(gBooks)
    return gBooks
}

function getBooks() {
    if (!localStorage.books) return gBooks
    else return gBooks = JSON.parse(localStorage.getItem('books'))

}


function getBookId(idx) {
    var book = gBooks.find((book) => {
        return (book.id === idx);
    })
    return book
}

function createBook() {
    var newBookTitle = $('.new-book-title').val()
    var newBookPrice = $('.new-book-price').val()
    $('.new-book-title').val('')
    $('.new-book-price').val('')
    createNewBook(newBookTitle, newBookPrice)
    $('#new-book-modal').modal('hide')
    renderBooks()
}

function onUpdate(idx) {
    gCurrId = idx

}

function setNewPrice(ev) {
    gBooks[gCurrId].price = $('#new-price-input').val()
    $('#new-price-input').val('')
    localStorage.books = JSON.stringify(gBooks)

    $('#update-modal').modal('hide')
    renderBooks()
}



function onPrevPage() {}

function onNextPage() {}

function deleteBook() {
    var book = getBookId(gCurrId)
    gBooks.splice(gBooks[gCurrId], 1)
    localStorage.books = JSON.stringify(gBooks)
    $('#delete').modal('hide')
    renderBooks()
}

function sort(sortBy) {
    if (sortBy === 'Price') {
        gBooks.sort((a, b) => {
            return b.price - a.price
        })
    } else if (sortBy === 'Rating') {
        gBooks.sort((a, b) => {
            return a.rating - b.rating
        })
    } else if (sortBy === "Name")
        gBooks.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
            if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
            return 0;
        })
    localStorage.books = JSON.stringify(gBooks)
}

function ratingUp(idx) {
    var currRating = gBooks[idx].rating
    if (currRating === 9) return
    currRating++
    gBooks[idx].rating = currRating
    localStorage.books = JSON.stringify(gBooks)
    renderBooks()
}

function ratingDown(idx, value) {
    var currRating = gBooks[idx].rating
    if (currRating === 0) return
    currRating--
    gBooks[idx].rating = currRating
    localStorage.books = JSON.stringify(gBooks)
    renderBooks()
}

function getBookRating(idx) {
    return gBooks[idx].rating
}