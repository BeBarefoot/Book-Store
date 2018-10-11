function init() {
    renderBooks()
}

function renderBooks() {
    var books = getBooks()

    var elBooksTable = books.map((book) => {
        return `
          <tr>
                <th scope="book-id row">${book.id}</th>
                <td class="table-book-title">${book.title}</td>
                <td class="table-book-price">${book.price}</td>
                <td>
                    <button class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg" onclick="onModal(${book.id})">Details</button>
                    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content" >
                               
                            </div>
                        </div>
                    </div>
                    <a class="btn btn-secondery btn-warning" data-toggle="modal" data-target="#update-modal" onclick="onUpdate(${book.id})" >Update</a>
                    <a class="btn btn-secondery btn-danger" onclick="onDelete(${book.id})">Delete</a>
                    <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-success" onclick="ratingDown(${book.id})">-</button>
  <button type="button" id="rating-stat" class="btn btn-secondary white">${getBookRating(book.id)}</button>
  <button type="button" class="btn btn-success" onclick="ratingUp(${book.id})" >+</button>
</div>
                </td>
            </tr>
            `
    })
    $('.books-table').html(elBooksTable.join(''))
}

function onModal(idx) {
    $('.modal-content').html(`<img src = img/book${idx}.png>`)
}

function onDelete(idx) {
    $('#delete').modal('show')
    gCurrId = idx
}

function sortBy(sortValue) {
    sort(sortValue.innerText)
    renderBooks()
}