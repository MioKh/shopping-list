// empty for now i'll add the functunalities after i get some rest

// idk the comments is for the stuff i learned throughout making this project

// dom manipulation
const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearButton = document.getElementById("clear");
// more dom manipulation and using functions to add items dynamically
function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  //validation
  if (newItem === "") {
    alert("add an item");
    return;
  }

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));
  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);

  itemList.appendChild(li);

  itemInput.value = "";
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    e.target.parentElement.parentElement.remove();
  }
}

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

itemForm.addEventListener("submit", addItem);
//event delegation
itemList.addEventListener("click", removeItem);
clearButton.addEventListener("click", clearItems);
