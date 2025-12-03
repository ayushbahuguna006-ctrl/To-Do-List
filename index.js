let btn = document.querySelector("#add");
let list = document.querySelector("#list");
let input = document.querySelector("input");
let count = 1;

btn.addEventListener("click", () => {
    let value = input.value;
    if (value === ""){
        return;}
    else{
    let item = document.createElement("p");
    item.textContent = `${count}: ${value} `;

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delBtn");  

    delBtn.addEventListener("click", () => {
         list.removeChild(item);
    });

    item.appendChild(delBtn);
    list.appendChild(item);

    input.value = "";
    count++;}
});


