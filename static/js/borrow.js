
document.addEventListener("DOMContentLoaded", function () {

    var borrowButton = document.querySelector("#borrowButton");
    borrowButton.addEventListener("click", function (event) {
        event.preventDefault();


        var bookID = document.getElementById("bid").value;
        var bookName = document.getElementById("bn").value;
        var bookAuthor = document.getElementById("ba").value;

        // Update the availability of the book to "borrowed"
        var bookAvailability = document.getElementById("bav");
        bookAvailability.value = "Borrowed";


        var borrowedBook = {
            id: bookID,
            name: bookName,
            author: bookAuthor
        };

        // Check if localStorage already contains borrowed books
        var borrowedBooks = localStorage.getItem("borrowedBooks");
        if (!borrowedBooks) {

            borrowedBooks = [];
        } else {

            borrowedBooks = JSON.parse(borrowedBooks);
        }
        borrowedBooks.push(borrowedBook);
        localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));
        alert("Book borrowed successfully!");
    });
});

