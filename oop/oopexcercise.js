var Book = /** @class */ (function () {
    function Book(title, author, genre, available) {
        if (available === void 0) { available = true; }
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.available = available;
    }
    return Book;
}());
var Library = /** @class */ (function () {
    function Library(name, books) {
        if (books === void 0) { books = []; }
        this.name = name;
        this.books = books;
    }
    // Method to add a new book to the library
    Library.prototype.addBook = function (title, author, genre) {
        var newBook = new Book(title, author, genre);
        this.books.push(newBook);
    };
    // Method to display all books in the library
    Library.prototype.displayBooks = function () {
        console.log("Books available in ".concat(this.name, ":"));
        this.books.forEach(function (book) {
            console.log("".concat(book.title, " by ").concat(book.author));
        });
    };
    // Method to borrow a book
    Library.prototype.borrowBook = function (title) {
        var bookFound = false;
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].title === title && this.books[i].available) {
                this.books[i].available = false;
                console.log("".concat(title, " has been borrowed successfully."));
                bookFound = true;
                break;
            }
        }
        if (!bookFound) {
            console.log("".concat(title, " is either not available or does not exist in the library."));
        }
    };
    // Method to return a borrowed book
    Library.prototype.returnBook = function (title) {
        var bookFound = false;
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].title === title && !this.books[i].available) {
                this.books[i].available = true;
                console.log("".concat(title, " has been returned successfully."));
                bookFound = true;
                break;
            }
        }
        if (!bookFound) {
            console.log("".concat(title, " was not borrowed or does not exist in the library."));
        }
    };
    return Library;
}());
// Example usage:
var myLibrary = new Library("My Library");
myLibrary.addBook("The Great Gatsby", "F. Scott Fitzgerald", "Classic");
myLibrary.addBook("To Kill a Mockingbird", "Harper Lee", "Fiction");
myLibrary.displayBooks();
myLibrary.borrowBook("The Great Gatsby");
myLibrary.borrowBook("To Kill a Mockingbird");
myLibrary.displayBooks();
myLibrary.returnBook("The Great Gatsby");
myLibrary.displayBooks();
