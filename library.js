"use script";
const bookContainer = document.querySelector(".bookContainer");
const displayFormBtn = document.querySelector(".add-btn");
const formModal = document.querySelector(".modalContainer");
const submit = document.querySelector(".submit");

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

//function to display form
function displayForm() {
  formModal.classList.remove("hidden");
}

//using event listener to add function to submit button
submit.addEventListener("click", getFormInfo);

//function to get form info
function getFormInfo() {
  //fetching the form info
  const titleInputed = document.querySelector(".title").value;
  const authorInputed = document.querySelector(".author").value;
  const pagesInputed = document.querySelector(".pages").value;
  const readValueInputed = document.querySelector(".readCheck").value;

  console.log(titleInputed, authorInputed, pagesInputed, readValueInputed);

  //removing the form after clicking submit
  //   formModal.classList.add("hidden");
}

const Spitter = new Book("spitter", "bhadmus", 200, "yes");
const crammer = new Book("crammer", "kelvin", 560, "yes");
const fisher = new Book("fisher", "smith", 88, "yes");

//function to push the created books into array
function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}

addBookToLibrary(Spitter);
addBookToLibrary(crammer);
addBookToLibrary(fisher);

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
