document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
        const selectElement = document.querySelector('#delete');
        const bookToDelete = selectElement.value;

        alert(`Book "${bookToDelete}" will be deleted.`);


    });
});
