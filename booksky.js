var add = document.querySelector(".add-btn");
var inputContainer = document.querySelector(".input-container");

function addPopup() {
  inputContainer.style.display = "flex";
}

function cancelBook() {
  inputContainer.style.display = "none";

  document.querySelector(".input-title").value = "";
  document.querySelector(".input-author").value = "";
  document.querySelector(".input-description").value = "";
}

function addBook() {
  var inputTitle = document.querySelector(".input-title").value;
  var inputAuthor = document.querySelector(".input-author").value;
  var inputDescription = document.querySelector(".input-description").value;
  var container = document.querySelector(".container");

  var subContainer = document.createElement("div");
  subContainer.setAttribute("class", "sub-container");
  
  var textTitle = document.createElement("h1");
  textTitle.setAttribute("class", "text-title");
  
  var textAuthor = document.createElement("h2");
  textAuthor.setAttribute("class", "text-author");
  
  var textDescription = document.createElement("p");
  textDescription.setAttribute("class", "text-description");

  var trash = document.createElement("button");
  trash.setAttribute("class", "del-btn");
  trash.textContent = "Trash";

  textTitle.textContent = inputTitle;
  textAuthor.textContent = inputAuthor;
  textDescription.textContent = inputDescription;

  subContainer.appendChild(textTitle);
  subContainer.appendChild(textAuthor);
  subContainer.appendChild(textDescription);
  subContainer.appendChild(trash);

  container.appendChild(subContainer);

  inputContainer.style.display = "none";

  document.querySelector(".input-title").value = "";
  document.querySelector(".input-author").value = "";
  document.querySelector(".input-description").value = "";

  trash.addEventListener("click", () => {
    trash.parentElement.remove();
  });
}


