//Holds library content
const myLibrary = [];
let libraryDisplay = [];
let bookNum = 0;
const bookshelf = document.querySelector(".bookshelf");


//New Book Button functionality
const dialog = document.querySelector("dialog");
const addBook = document.querySelector(".addButton");
const submitButton = document.querySelector(".submit");
let authorInfo = document.querySelector("#author");
let titleInfo = document.querySelector("#title");
let pagesInfo = document.querySelector("#pages");

addBook.addEventListener("click", () => {
    dialog.showModal();
});

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary(authorInfo.value,titleInfo.value,pagesInfo.value);
    libraryDisplay[(bookNum-1)] = document.createElement("div");
    libraryDisplay[(bookNum-1)].setAttribute("class","book");
    libraryDisplay[(bookNum-1)].setAttribute("id",myLibrary[(bookNum-1)].id);
    let text = document.createTextNode(myLibrary[(bookNum-1)].title + " - " + myLibrary[(bookNum-1)].author + " (pg count: " + myLibrary[(bookNum-1)].pages + ")")
    libraryDisplay[(bookNum-1)].appendChild(text);

    let button = document.createElement('button');
    button.setAttribute("class","removeButton");
    button.addEventListener("click", function(e) {
        console.log("Remove item!" + myLibrary[(bookNum-1)].id);
    });
    button.appendChild(document.createTextNode("remove"));
    libraryDisplay[(bookNum-1)].appendChild(button);
    bookshelf.appendChild(libraryDisplay[(bookNum-1)]);
    dialog.close();
});

function Book(author, title, pages,read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.id = self.crypto.randomUUID();
}

function addBookToLibrary(author, title, pages) {
    myLibrary[bookNum] = new Book(author,title,pages,"unread");
    bookNum++;
}

function displayBooks() {
    libraryDisplay = [];
    for(let i = 0; i < myLibrary.length; i++) {
        libraryDisplay[i] = document.createElement("div");
        libraryDisplay[i].setAttribute("class","book");
        libraryDisplay[i].setAttribute("id",myLibrary[i].id);
        let text = document.createTextNode(myLibrary[i].title + " - " + myLibrary[i].author + " (pg count: " + myLibrary[i].pages + ")")
        libraryDisplay[i].appendChild(text);

        let button = document.createElement('button');
        button.setAttribute("class","removeButton");
        button.addEventListener("click", function(e) {
            console.log("Remove item!" + myLibrary[i].id);
        });
        button.appendChild(document.createTextNode("remove"));
        libraryDisplay[i].appendChild(button);
        bookshelf.appendChild(libraryDisplay[i]);
    }
}

addBookToLibrary("George", "Fuck Ass", "100");
addBookToLibrary("George", "Fuck Shit", "100");
displayBooks();