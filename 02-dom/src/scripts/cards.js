// working with cards
let addCard = document.getElementById("add-card");
let cards = document.getElementById("cards");

function createCard() {
    let div = document.createElement("div");
    div.id = "card";
    let h3 = document.createElement("h3");
    let h3textNode = document.createTextNode("Card " + (cards.children.length + 1));
    h3.append(h3textNode);

    let beforeAfterDiv = document.createElement("div");
    let addBeforeBtn = document.createElement("button");
    let addBeforeBtnNode = document.createTextNode("Add Before");
    addBeforeBtn.append(addBeforeBtnNode);
    let addAfterBtn = document.createElement("button");
    let addAfterBtnNode = document.createTextNode("Add After");
    addAfterBtn.append(addAfterBtnNode);
    beforeAfterDiv.append(addBeforeBtn);
    beforeAfterDiv.append(addAfterBtn);

    let delDiv = document.createElement("div");
    let deleteBtn = document.createElement("button");
    let deleteBtnNode = document.createTextNode("Delete");
    deleteBtn.append(deleteBtnNode);
    delDiv.append(deleteBtn);

    div.append(h3);
    div.append(beforeAfterDiv);
    div.append(delDiv);

    cards.append(div);

    deleteBtn.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.remove();
    })

    addBeforeBtn.addEventListener("click", (e) => {
        createCard();
        // console.log(e.target);
        // console.log(cards);       
        cards.insertBefore(cards.lastChild, e.target.parentElement.parentElement);
    })

    addAfterBtn.addEventListener("click", (e) => {
        createCard();
        cards.insertBefore(cards.lastChild, e.target.parentElement.parentElement.nextSibling);
    })
}

addCard.addEventListener("click", createCard);









