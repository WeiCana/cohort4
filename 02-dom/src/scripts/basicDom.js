let div = document.getElementById("dom-container");
let ol = document.getElementById("ol");
let show = document.getElementById("show");
let add = document.getElementById("add");
let del = document.getElementById("del");

// Basic DOM
div.addEventListener("click", (e) => {
    console.log(e.target);
})

show.addEventListener("click", () => {
    ol.hidden = false;
})

add.addEventListener("click", () => {
    let li = document.createElement("li");

    let textNode = document.createTextNode("Item " + (ol.children.length + 1));
    li.append(textNode);
    ol.append(li);
})

del.addEventListener("click", () => {
    ol.lastElementChild.remove();
})