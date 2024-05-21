
document.addEventListener("DOMContentLoaded", function () {

    function getBorrowedBooks() {
        var borrowedBooks = localStorage.getItem("borrowedBooks");
        if (borrowedBooks) {
            return JSON.parse(borrowedBooks);
        } else {
            return [];
        }
    }

    function displayBorrowedBooks() {
        var borrowedBooks = getBorrowedBooks();
        var borrowedBooksTable = document.getElementById("borrowedBooksTable");
        borrowedBooksTable.innerHTML = "";

        borrowedBooks.forEach(function (book, index) {

            var row = borrowedBooksTable.insertRow();
            var numberCell = row.insertCell(0);
            var nameCell = row.insertCell(1);
            numberCell.textContent = index + 1;
            nameCell.textContent = book.name;

        });
        var bookCount = document.getElementById("bookCount");
        bookCount.textContent = borrowedBooks.length;
    }
    displayBorrowedBooks();
});
