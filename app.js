const inputText = document.querySelector("#inputText");
const btn = document.querySelector(".btn");
const listItem = document.querySelector(".list-item");
const search = document.querySelector("#searchItem");
const err = document.querySelector(".err");
const clearAll = document.querySelector("#clearAll");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const text = inputText.value.trim();
  if (text !== "") {
    if(!duplicateText(text)){
      const li = document.createElement("li");
      li.textContent = text;
      inputText.value = "";
      listItem.appendChild(li);
      const deleteBtn = createButton();
      li.appendChild(deleteBtn);
      hiddenBtn();
    } else{
      error("You already have this item in your list")
     inputText.value='';
    }
  } else {
   error("Enter some value");
  }
});
function createButton() {
  const button = document.createElement("button");
  button.className = "list-item li remove-item";
  const icon = createIcon();
  button.appendChild(icon);

  button.addEventListener("click", () => {
    if (confirm("Are you sure??")) {
      button.parentElement.remove();
      hiddenBtn();
    }
  });
  return button;
}

function createIcon() {
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";
  return icon;
}

search.addEventListener("keyup", (e) => {
  let text = e.target.value.toLowerCase();
  let items = listItem.getElementsByTagName("li");

  Array.from(items).forEach((item) => {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});

function hiddenBtn() {
  if (listItem.innerHTML.trim() === "") {
    clearAll.style.display = "none";
    search.style.display = 'none';
  } else {
    clearAll.style.display = "block";
    search.style.display = 'block';
  }
}

clearAll.addEventListener("click", () => {
  if (confirm("Are you sure ? You want to clear all the Data?")) {
    listItem.innerHTML = "";
    hiddenBtn();
  }
});

hiddenBtn();

function duplicateText(text){
 let items = listItem.getElementsByTagName('li');
 items = Array.from(items);
 for(let item of items){
  if(item.firstChild.textContent.toLowerCase() === text.toLowerCase()){
    return true;
 }
}return false;
}

function error(message){
  err.className = 'errorr'
  err.textContent = message;
  setTimeout((e) => {
    err.textContent = "";
  }, 2000);
}