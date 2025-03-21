//Holds library content
const myLibrary = [];
const libraryDisplay = [];
let bookNum = 0;

//
const bookshelf = document.querySelector(".bookshelf");

function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    const id = crypto.randomUUID();
}

function addBookToLibrary(author, title, pages) {
    myLibrary[bookNum] = new Book(author,title,pages);
    bookNum++;
}

function displayBooks() {
    for(let i = 0; i < myLibrary.length; i++) {
        //display individual book
        libraryDisplay[i] = document.createElement("div");
        libraryDisplay[i].setAttribute("class","book");
        let text = document.createTextNode(myLibrary[i].title + " - " + myLibrary[i].author + " (pg count: " + myLibrary[i].pages + ")")
        libraryDisplay[i].appendChild(text);
        bookshelf.appendChild(libraryDisplay[i]);
    }
}

addBookToLibrary("George", "Fuck Ass", "100", bookNum);
addBookToLibrary("George", "Fuck Shit", "100", bookNum);
displayBooks();