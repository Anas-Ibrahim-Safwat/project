document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        
        if (key==="clicked"){
            const task = localStorage.getItem(key);
        const data = JSON.parse(task);
            retrieve_to_edit(data);
        }
// console.log(value);
}

});