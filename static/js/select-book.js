// retrieve every book as a button, name and image
document.addEventListener('DOMContentLoaded', function() {
    let taskList = document.getElementById('books-container')
    for (let i = 0; i < localStorage.length; i++)
    {
        const key = localStorage.key(i);

        if (key.startsWith("book_")) {
            const task = localStorage.getItem(key);
            const data = JSON.parse(task);

            let bt = document.createElement("button");
            bt.textContent="Book Details";
            bt.id = data.id;

            let bn=document.createElement("p");
            bn.innerHTML=data.n;

            let i=document.createElement("img");
            i.src=data.img;
            let main=document.createElement("div");
            main.className="book";

            main.appendChild(i);
            main.appendChild(bn);
            main.appendChild(bt);

            taskList.appendChild(main);   

        }
    }
});

// any button clicked the details appears 
document.addEventListener('DOMContentLoaded', function() {
    let detailButtons = document.querySelectorAll("button");

    detailButtons.forEach((button)=> {
        button.addEventListener("click", function() {
            localStorage.setItem("clicked" , JSON.stringify(button.id));
            window.open(`bookpage.html`);
        });

    });
});


