// localStorage.clear()
function savebook() {
    let book= {
        id: document.getElementById("bid").value,
        n:document.getElementById("bn").value,
        a:document.getElementById("ba").value,
        c:document.getElementById("bc").value,
        d:document.getElementById("bd").value,
        av:"Available"
    };
    // console.log(taskList)
    if(localStorage.length>0) {
        var flag = 1;
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const task = localStorage.getItem(key);
            const data = JSON.parse(task);
            // console.log(data)
            if (key.startsWith("book_")) {
                if (data.id === book.id) {
                    alert('Duplicated ID Book Cannot be Added');
                    flag--;
                    return;
                }
                if(book.id===""||book.a===""||book.n===""||book.c.length===0)
                {
                    alert('Cannot Add Empty Space');
                    flag--;
                    return;

                }

            }
        }
        if(flag===1){
            localStorage.setItem("book_" + Date.now(), JSON.stringify(book));
            alert('Book Added Successfullyy');
        }

    }
    else if(book.id===""||book.a===""||book.n===""||book.c.value ===undefined)
    {
        alert('Cannot Add Empty Space');
    }
    else{
        localStorage.setItem("book_" + Date.now(), JSON.stringify(book));
        alert('Book Added Successfullyy');
    }
}


// retrieve data in available book admin side
document.addEventListener('DOMContentLoaded', function() {
    let taskList = document.getElementById('_book')
    // console.log(taskList)
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        // console.log(data)

        if (key.startsWith("book_")) {
            const task = localStorage.getItem(key);
            const data = JSON.parse(task);
            const trr = document.createElement("tr");

            let tdd = document.createElement("td");
            let prp = data.id;
            tdd.textContent = prp;
            // console.log(prp);
            trr.appendChild(tdd);

            tdd = document.createElement("td");
            prp = data.n;
            tdd.textContent = prp;
            // console.log(prp);
            trr.appendChild(tdd);

            tdd = document.createElement("td");
            prp = data.a;
            tdd.textContent = prp;
            trr.appendChild(tdd);

            tdd = document.createElement("td");
            prp = data.c;
            tdd.textContent = prp;
            trr.appendChild(tdd);

            tdd = document.createElement("td");
            prp = data.d;
            tdd.textContent = prp;
            trr.appendChild(tdd);

            tdd = document.createElement("td");
            prp = data.av;
            tdd.textContent = prp;
            trr.appendChild(tdd);

            taskList.appendChild(trr);
        }
    }
});


// for select category options in add new book page  and select to edit page
document.addEventListener('DOMContentLoaded', function() {
    let categories = ["Adventure", "Romance", "Self Help", "Fantasia", "Horror", "Historical Fiction"];
    let element = document.getElementById("bc");
    for (let i = 0; i < categories.length; i++) {
        let option_ele = document.createElement("option");
        option_ele.value = categories[i];
        option_ele.textContent = categories[i];
        element.appendChild(option_ele);
    }
});

// for select availability options select to edit page
document.addEventListener('DOMContentLoaded', function() {
    let categories = ["Available", "Borrowed"];
    let element = document.getElementById("bav");
    for (let i = 0; i < categories.length; i++) {
        let option_ele = document.createElement("option");
        option_ele.value = categories[i];
        option_ele.textContent = categories[i];
        element.appendChild(option_ele);
    }
});


// for select to edit page in admin side

document.addEventListener('DOMContentLoaded', function() {
    let select = document.getElementById('selecting');
    // console.log(taskList)
    for (let i = 0; i < localStorage.length; i++)
    {
        const key = localStorage.key(i);
        // console.log(data)
        if (key.startsWith("book_"))
        {
            const task = localStorage.getItem(key);
            const data=JSON.parse(task);
            const opt = document.createElement("option");
            opt.value=data.id;
            opt.textContent=data.id+'-'+data.n;
            select.appendChild(opt);
        }
    }
});

function go_to_edit(){

    let select = document.getElementById('selecting');
    let v_select=select.value;
    console.log(v_select)
    if(v_select!=="") {
        let hide = document.getElementById("should_hide");
        let show = document.getElementById("should_show");
        hide.style.display = "none";
        show.style.display = "block"
        retrieve_to_edit(v_select);
    }
    else
        alert('Cannot Add Empty Space');
}


function retrieve_to_edit(id_value){

    console.log(id_value)
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        // console.log(data)

        if (key.startsWith("book_")) {
            const task = localStorage.getItem(key);
            const data = JSON.parse(task);
            if(data.id===id_value)
            {
                let id =document.getElementById("bid");
                id.value=data.id;

                let n=document.getElementById("bn");
                n.value=data.n;

                let a=document.getElementById("ba");
                a.value=data.a;


                let c=document.getElementById("bc");
                c.value=data.c;

                let d=document.getElementById("bd");
                d.textContent=data.d;

                let v=document.getElementById("bav");
                v.value=data.av;

            }
        }
    }
}
function save_edit()
{let book= {
    id: document.getElementById("bid").value,
    n:document.getElementById("bn").value,
    a:document.getElementById("ba").value,
    c:document.getElementById("bc").value,
    d:document.getElementById("bd").value,
    av:document.getElementById("bav").value
};

    if(book.id===""||book.a===""||book.n===""||book.c ==="")
    {
        alert('Cannot Add Empty Space');

    }
    else {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const task = localStorage.getItem(key);
            const data = JSON.parse(task);
            // console.log(data)
            if (key.startsWith("book_")) {
                if (data.id === book.id)
                    localStorage.removeItem(key);
            }
        }
        localStorage.setItem("book_" + Date.now(), JSON.stringify(book));
        alert('Book Edited Successfully');
    }
}

