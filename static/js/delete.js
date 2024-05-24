// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelector('form').addEventListener('submit', function (event) {
//         event.preventDefault();
//         const selectElement = document.querySelector('#delete');
//         const bookToDelete = selectElement.value;

//         alert(`Book "${bookToDelete}" will be deleted.`);


//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
        const selectElement = document.querySelector('#delete');
        const bookToDelete = selectElement.value;

        if (bookToDelete) {
            // Send an AJAX request to delete the book
            const formData = new FormData();
            formData.append('delete', bookToDelete);

            fetch('/delete/', {
                method: 'POST',
                body: formData,
                headers: {
                    'X-CSRFToken': getCookie('csrftoken') // Include CSRF token in headers
                }
            })
                .then(response => {
                    if (response.ok) {
                        // Book deleted successfully
                        alert(`Book "${bookToDelete}" has been deleted.`);
                        window.location.reload(); // Reload the page to reflect changes
                    } else {
                        // Error handling if deletion fails
                        alert('Error deleting book.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } else {
            // No book selected for deletion
            alert('Please select a book to delete.');
        }
    });
});

// Function to get CSRF token from cookie
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
