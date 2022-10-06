"use script";
//our global variables
const bookContainer = document.querySelector(".bookContainer");
const displayFormBtn = document.querySelector(".add-btn");
const formModal = document.querySelector(".modalContainer");
const submit = document.querySelector(".submit");
const inputField = document.querySelectorAll(".input-field");
const closeForm = document.querySelector(".closeForm");

//displaying form
displayFormBtn.addEventListener("click", () => {
  for (const eachInputField of inputField) {
    eachInputField.style.border = "none";
    eachInputField.value = "";
  }
  formModal.style.display = "flex";
});

//closing the form
closeForm.addEventListener("click", () => {
  formModal.style.display = "none";
  for (const eachInputField of inputField) {
    eachInputField.style.border = "none";
    eachInputField.value = "";
  }
});

//getting form info
submit.addEventListener("click", getFormInfo);
function getFormInfo() {
  const titleInputed = document.querySelector(".title").value;
  const authorInputed = document.querySelector(".author").value;
  const pagesInputed = document.querySelector(".pages").value;
  //   const readValueInputed = document.querySelector(".readCheck").value;
  const yes = document.querySelector(".yesReadCheck");
  const no = document.querySelector(".noReadCheck");
  let read = yes.checked;
  let notRead = no.checked;

  //validate form
  if (titleInputed === "" || authorInputed === "" || pagesInputed === "") {
    for (const eachInputField of inputField) {
      eachInputField.style.border = "1.5px solid red";
    }
    //disabling submit button
    preventDefault();
    // submit.disable = true;
  } else {
    for (const eachInputField of inputField) {
      eachInputField.style.border = "1.5px solid Blue";
      eachInputField.value = "";
    }
    console.log(titleInputed, authorInputed, pagesInputed);

    //removing the form after clicking submit
    formModal.style.display = "none";
  }

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
  //create abook instance
  const newBook = new Book(titleInputed, authorInputed, pagesInputed);
  //function to push the created books into array
  function addBookToLibrary(book) {
    myLibrary.push(book);
  }
  addBookToLibrary(newBook);

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

      //this is where checking is going to happen
      console.log(read);
      console.log(notRead);
      if (read === true) {
        const eachBookReadbtn = document.createElement("button");
        eachBookReadbtn.classList.add("read-btn");
        eachBookReadbtn.classList.add("read");
        eachBookReadbtn.textContent = `READ`;

        // adding function to readBtn
        eachBookReadbtn.addEventListener("click", () => {
          if (eachBookReadbtn.textContent === "READ") {
            eachBookReadbtn.style.backgroundColor = "red";
            eachBookReadbtn.textContent = "NOT READ";
          } else {
            eachBookReadbtn.style.backgroundColor = "rgb(66, 196, 66)";
            eachBookReadbtn.textContent = "READ";
          }
        });
        eachBookContainer.appendChild(eachBookReadbtn);
      }
      if (notRead === true) {
        const eachBookReadbtn = document.createElement("button");
        eachBookReadbtn.classList.add("read-btn");
        eachBookReadbtn.classList.add("not-read");
        eachBookReadbtn.textContent = `NOT READ`;
        eachBookReadbtn.addEventListener("click", () => {
          if (eachBookReadbtn.textContent === "READ") {
            eachBookReadbtn.style.backgroundColor = "red";
            eachBookReadbtn.textContent = "NOT READ";
          } else {
            eachBookReadbtn.style.backgroundColor = "rgb(66, 196, 66)";
            eachBookReadbtn.textContent = "READ";
          }
        });
        eachBookContainer.appendChild(eachBookReadbtn);
      }
      if (read === false && notRead === false) {
        const eachBookReadbtn = document.createElement("button");
        eachBookReadbtn.classList.add("read-btn");
        eachBookReadbtn.classList.add("not-read");
        eachBookReadbtn.textContent = `NOT READ`;
        eachBookReadbtn.addEventListener("click", () => {
          if (eachBookReadbtn.textContent === "READ") {
            eachBookReadbtn.style.backgroundColor = "red";
            eachBookReadbtn.textContent = "NOT READ";
          } else {
            eachBookReadbtn.style.backgroundColor = "rgb(66, 196, 66)";
            eachBookReadbtn.textContent = "READ";
          }
        });
        eachBookContainer.appendChild(eachBookReadbtn);
        eachBookContainer.appendChild(eachBookReadbtn);
      }
      if (read === true && notRead === true) {
        alert(`you can only choose one idiot`);
        preventDefault();
      }

      bookContainer.appendChild(eachBookContainer);
    }
  }
  loopingMyLibrary();
}
