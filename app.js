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
    const li = document.createElement("li");
    li.textContent = text;
    inputText.value = "";
    listItem.appendChild(li);
    const deleteBtn = createButton();
    li.appendChild(deleteBtn);
    hiddenBtn();
  } else {
    err.style.color = "#B31312";
    err.style.fontSize = "18px";
    err.style.paddingBottom = "5px";
    // err.style.textAlign  = 'center'
    err.textContent = "Please enter some text";
    setTimeout((e) => {
      err.textContent = "";
    }, 2000);
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
