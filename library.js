"use script";
const bookContainer = document.querySelector(".bookContainer");

let myLibrary = [];
console.log(myLibrary);

function Book(title, author, pages, haveRead) {
  //the constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
  this.info = function () {
    return ` The ${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead} `;
  };
}
const Spitter = new Book("spitter", "bhadmus", 200, "yes");
const crammer = new Book("crammer", "kelvin", 560, "yes");
const fisher = new Book("fisher", "smith", 88, "yes");

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}

addBookToLibrary(Spitter);
addBookToLibrary(crammer);
addBookToLibrary(fisher);

function loopingMyLibrary() {
  for (const eachBook of myLibrary) {
    console.log(eachBook);

    const eachBookContainer = document.createElement("div");

    eachBookContainer.classList.add("book");
    console.log(eachBookContainer);

    const eachBookTitle = document.createElement("p");
    const eachBookaurthor = document.createElement("p");
    const eachBookPages = document.createElement("p");

    eachBookTitle.textContent = ` TITLE: ${eachBook.title}`;
    eachBookContainer.appendChild(eachBookTitle);

    eachBookaurthor.textContent = `AURTHOR: ${eachBook.author}`;
    eachBookContainer.appendChild(eachBookaurthor);

    eachBookPages.textContent = `PAGES:${eachBook.pages}`;
    eachBookContainer.appendChild(eachBookPages);

    bookContainer.appendChild(eachBookContainer);
  }
}
loopingMyLibrary();
