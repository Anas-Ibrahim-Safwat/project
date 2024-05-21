
document.addEventListener('DOMContentLoaded', function () {
    let select = document.getElementById('delete');
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("book_")) {
            const task = localStorage.getItem(key);
            const data = JSON.parse(task);
            const opt = document.createElement("option");
            opt.value = data.id;
            opt.textContent = data.id + '-' + data.n;
            select.appendChild(opt);
        }
    }

    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
        const selectElement = document.querySelector('#delete');
        const bookToDelete = selectElement.value;
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith("book_")) {
                const task = localStorage.getItem(key);
                const data = JSON.parse(task);
                if(data.id===bookToDelete)
                { localStorage.removeItem(key);
                    alert(`Book with ID: "${bookToDelete}"is deleted.`);
                }
            }
        }

    });
});
