"use script";
const bookContainer = document.querySelector(".bookContainer");
const displayFormBtn = document.querySelector(".add-btn");
const formModal = document.querySelector(".modalContainer");
const submit = document.querySelector(".submit");
const inputField = document.querySelectorAll(".input-field");

//array to store the book
let myLibrary = [];
console.log(myLibrary);

//the book constructor
function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
  this.info = function () {
    return ` The ${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead} `;
  };
}

//using event listener to add a function to getBookInfo
displayFormBtn.addEventListener("click", displayForm);
function displayForm() {
  formModal.classList.remove("hidden");
}

//using event listener to add function to submit button
submit.addEventListener("click", getFormInfo);
function getFormInfo() {
  const titleInputed = document.querySelector(".title").value;
  const authorInputed = document.querySelector(".author").value;
  const pagesInputed = document.querySelector(".pages").value;
  const readValueInputed = document.querySelector(".readCheck").value;

  //book instance
  const newBook = new Book(
    titleInputed,
    authorInputed,
    pagesInputed,
    readValueInputed
  );
  //validate form
  if (
    titleInputed === "" ||
    authorInputed === "" ||
    pagesInputed === "" ||
    readValueInputed === ""
  ) {
    for (const eachInputField of inputField) {
      eachInputField.style.border = "1.5px solid red";
    }
    preventDefault();
  } else {
    for (const eachInputField of inputField) {
      eachInputField.style.border = "1.5px solid Blue";
    }
    console.log(titleInputed, authorInputed, pagesInputed, readValueInputed);
  }

  //function to push the created books into array
  function addBookToLibrary(book) {
    myLibrary.push(book);
  }
  addBookToLibrary(newBook);

  //removing the form after clicking submit
  formModal.classList.add("hidden");
}

//function to loop through the library and display it on the screen
function loopingMyLibrary() {
  //getting each book the array
  for (const eachBook of myLibrary) {
    console.log(eachBook);
    //conatiner for each book
    const eachBookContainer = document.createElement("div");

    eachBookContainer.classList.add("book");
    console.log(eachBookContainer);

    const eachBookTitle = document.createElement("p");
    const eachBookauthor = document.createElement("p");
    const eachBookPages = document.createElement("p");

    eachBookTitle.textContent = ` TITLE: ${eachBook.title}`;
    eachBookContainer.appendChild(eachBookTitle);

    eachBookauthor.textContent = `AUTHOR: ${eachBook.author}`;
    eachBookContainer.appendChild(eachBookauthor);

    eachBookPages.textContent = `PAGES:${eachBook.pages}`;
    eachBookContainer.appendChild(eachBookPages);

    bookContainer.appendChild(eachBookContainer);
  }
}
loopingMyLibrary();
