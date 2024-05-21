document.addEventListener('DOMContentLoaded', function(){
    const searchInput = document.getElementById('searchInput');
    const searchList = document.getElementById('searchList');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.trim().toLowerCase();
        searchList.innerHTML = ''; 
        
        const filteredBooks = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith("book_")) {
                const task = localStorage.getItem(key);
                const book = JSON.parse(task);
                if (bookMatchSearch(book, searchTerm)) {
                    filteredBooks.push(book);
                }
            }
        }
        filteredBooks.forEach(book => {
            const listItem = document.createElement('li');
            listItem.textContent = book.n;
            listItem.addEventListener("click" , function()
            {
                localStorage.setItem("clicked", JSON.stringify(book.id));
                window.open(`bookpage.html`);
            }
        );
            searchList.appendChild(listItem);
        });
        
       
        if (searchTerm === '') {
            searchList.style.display = 'none'; 
        } else if (filteredBooks.length > 0) {
            searchList.style.display = 'block';
        } else {
            searchList.style.display = 'none';
        }
    });

    
    function bookMatchSearch(book, searchTerm) {
        return (
            book.id.toLowerCase().includes(searchTerm) ||
            book.n.toLowerCase().includes(searchTerm) ||
            book.a.toLowerCase().includes(searchTerm) ||
            book.c.toLowerCase().includes(searchTerm) ||
            book.d.toLowerCase().includes(searchTerm)
        );
    }
});
// localStorage.clear;