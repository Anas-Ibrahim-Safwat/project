
// for select category options in add new book page  and select to edit page
function categories () {
    let categories = ["Adventure", "Romance", "Self Help", "Fantasia", "Horror", "Historical Fiction"];
    let element = document.getElementById("bc");
    for (let i = 0; i < categories.length; i++) {
        let option_ele = document.createElement("option");
        option_ele.value = categories[i];
        option_ele.textContent = categories[i];
        element.appendChild(option_ele);
    }
}

function upload_image() {
    const input_file = document.getElementById("input-file");
    const img_view = document.getElementById("img-view");

    let img_link = URL.createObjectURL(input_file.files[0]);
    img_view.style.backgroundImage = `url(${img_link})`;
    img_view.textContent = ""
    img_view.style.border = "0";

}
addEventListener('DOMContentLoaded', function () {
    const file = document.getElementById("input-file");
    file.addEventListener('change', () => {
        const fr = new FileReader();
        fr.readAsDataURL(file.files[0]);
        fr.addEventListener('load', () => {
            file.src = fr.result;
        })
    })
});
