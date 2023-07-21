/** Variaveis */
const inputList = document.querySelector("#item");
const inicialText = document.querySelector("#inicial-text");
const form = document.querySelector("form");
const body = document.querySelector("body");
const boxCheck = document.querySelector(".box-check");

let list = document.querySelector("#list");
let itemList = document.querySelector(".item-list");

let allItens = [];

/** Funções */
function loadApp() {
  let myLocalStorage = getLocalStorage();

  if (myLocalStorage == null) {
    setInitialText(true);
  } else {
    allItens = myLocalStorage;
    showList();
  }
}

function getLocalStorage() {
  let storageList = JSON.parse(localStorage.getItem("allItens"));
  return storageList;
}

function updateLocalStorage() {
  let updatedStorageList = localStorage.setItem(
    "allItens",
    JSON.stringify(allItens)
  );
  return updatedStorageList;
}

function addItem() {
  const atualItem = {
    task: inputList.value.toUpperCase(),
    checked: false,
  };

  const exists = allItens.some((item) => item.task === atualItem.task);

  if (exists) {
    alert(`${atualItem.task} já existe na lista!`);
  } else if (atualItem.task.length > 0) {
    setInitialText(false);
    allItens.push(atualItem);
    console.log(atualItem);
    updateLocalStorage();
    showList();
  }
  inputList.focus();
  inputList.value = "";
}

function setInitialText(initialText) {
  if (initialText) {
    inicialText.innerHTML = "Sua lista aparecerá aqui";
  } else {
    inicialText.innerHTML = "";
  }
}

function showList() {
  list.innerHTML = "";

  for (let i = 0; i < allItens.length; i++) {
    list.innerHTML += `
        <li class="item-list" onClick="setCheckBox(${i})">
            <span class="box-check" ${
              allItens[i].checked === true
                ? 'data-checked="checked"'
                : 'data-checked="not-checked"'
            }>
                ${
                  allItens[i].checked === true
                    ? '<span class="material-symbols-outlined" > done </span>'
                    : '<span class="box"></span>'
                }
            </span>
            <span class="${allItens[i].checked === true ? "done" : ""}">${
      allItens[i].task
    }</span>
            <button onclick="removeItem(${i})" class="remove-btn">X</button>
        </li>  `;
  }
}

function setCheckBox(index) {
  if (allItens[index].checked === true) {
    allItens[index].checked = false;
  } else {
    allItens[index].checked = true;
  }
  updateLocalStorage();
  showList();
}

function removeItem(index) {
  allItens.splice(index, 1);
  updateLocalStorage();
  if (allItens.length > 0) {
    showList();
  } else {
    clearAll();
  }
}

function clearAll() {
  localStorage.clear();
  allItens = [];
  setInitialText(true);
  inputList.value = "";
  showList();
}

/**EventListener */
body.addEventListener("load", loadApp);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addItem();
});
