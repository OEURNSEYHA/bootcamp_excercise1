var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    function Library(name) {
        this.name = name;
        this.books = [];
    }
    // Method to add a book to the library
    Library.prototype.addBook = function (title, author, genre) {
        var newBook = new Book(title, author, genre);
        this.books.push(newBook);
    };
    // Method to remove a book by title
    Library.prototype.removeBookByTitle = function (title) {
        this.books = this.books.filter(function (book) { return book.title.toLowerCase() !== title.toLowerCase(); });
    };
    // Method to search for books by title
    Library.prototype.searchByTitle = function (title) {
        return this.books.filter(function (book) { return book.title.toLowerCase().indexOf(title.toLowerCase()) !== -1; });
    };
    // Method to search for books by author
    Library.prototype.searchByAuthor = function (author) {
        return this.books.filter(function (book) { return book.author.toLowerCase().indexOf(author.toLowerCase()) !== -1; });
    };
    // Method to search for books by genre
    Library.prototype.searchByGenre = function (genre) {
        return this.books.filter(function (book) { return book.genre.toLowerCase().indexOf(genre.toLowerCase()) !== -1; });
    };
    // Method to display a list of all available books
    Library.prototype.displayAvailableBooks = function () {
        console.log("Available books in ".concat(this.name, ":"));
        this.books.forEach(function (book) {
            if (book.available) {
                console.log("".concat(book.title, " by ").concat(book.author));
            }
        });
    };
    // Method to borrow a book
    Library.prototype.borrowBook = function (title) {
        var bookFound = false;
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].title.toLowerCase() === title.toLowerCase()) {
                if (this.books[i].available) {
                    this.books[i].available = false;
                    console.log("".concat(title, " has been borrowed successfully."));
                }
                else {
                    console.log("".concat(title, " is currently not available."));
                }
                bookFound = true;
                break;
            }
        }
        if (!bookFound) {
            console.log("".concat(title, " does not exist in the library."));
        }
    };
    // Method to return a book
    Library.prototype.returnBook = function (title) {
        var bookFound = false;
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            if (book.title.toLowerCase() === title.toLowerCase()) {
                if (!book.available) {
                    book.available = true;
                    console.log("".concat(title, " has been returned successfully."));
                }
                else {
                    console.log("".concat(title, " has already been returned."));
                }
                bookFound = true;
                break;
            }
        }
        if (!bookFound) {
            console.log("".concat(title, " does not exist in the library."));
        }
    };
    return Library;
}());
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.borrowed_books = [];
    }
    // Method to borrow a book
    User.prototype.borrowBook = function (book) {
        if (this.borrowed_books.length < this.getMaxBorrowLimit()) {
            this.borrowed_books.push(book);
            console.log("".concat(this.name, " has borrowed the book \"").concat(book.title, "\" successfully."));
        }
        else {
            console.log("".concat(this.name, " has reached the maximum borrow limit."));
        }
    };
    // Method to view borrowed books
    User.prototype.viewBorrowedBooks = function () {
        console.log("".concat(this.name, "'s borrowed books:"));
        if (this.borrowed_books.length === 0) {
            console.log("No books borrowed.");
        }
        else {
            this.borrowed_books.forEach(function (book) {
                console.log("".concat(book.title, " by ").concat(book.author));
            });
        }
    };
    // Method to get the maximum borrow limit (override in subclasses if needed)
    User.prototype.getMaxBorrowLimit = function () {
        return Infinity; // Default: No limit
    };
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Admins have no limit on borrowing books
    Admin.prototype.getMaxBorrowLimit = function () {
        return Infinity;
    };
    return Admin;
}(User));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Students can borrow up to 5 books
    Student.prototype.getMaxBorrowLimit = function () {
        return 5;
    };
    return Student;
}(User));
// Example usage:
var admin = new Admin("Admin1");
var student = new Student("Student1");
var book1 = new Book("Book 1", "Author 1", "Genre 1");
var book2 = new Book("Book 2", "Author 2", "Genre 2");
var book3 = new Book("Book 3", "Author 3", "Genre 3");
var book4 = new Book("Book 4", "Author 4", "Genre 4");
var book5 = new Book("Book 5", "Author 5", "Genre 5");
var book6 = new Book("Book 6", "Author 6", "Genre 6");
admin.borrowBook(book1);
admin.borrowBook(book2);
admin.borrowBook(book3);
admin.borrowBook(book4);
admin.borrowBook(book5);
admin.borrowBook(book6); // Admin can borrow unlimited books
student.borrowBook(book1);
student.borrowBook(book2);
student.borrowBook(book3);
student.borrowBook(book4);
student.borrowBook(book5);
student.borrowBook(book6); // Student reaches maximum borrow limit
admin.viewBorrowedBooks();
student.viewBorrowedBooks();
// // Example usage:
// const myLibrary = new Library("My Library");
// myLibrary.addBook("The Great Gatsby", "F. Scott Fitzgerald", "Classic");
// myLibrary.addBook("To Kill a Mockingbird", "Harper Lee", "Fiction");
// myLibrary.addBook("1984", "George Orwell", "Dystopian");
// // Display all available books
// myLibrary.displayAvailableBooks();
// // Search for books by title
// console.log("\nSearching books by title:");
// console.log(myLibrary.searchByTitle("grt"));
// // Search for books by author
// console.log("\nSearching books by author:");
// console.log(myLibrary.searchByAuthor("george orwell"));
// // Search for books by genre
// console.log("\nSearching books by genre:");
// console.log(myLibrary.searchByGenre("fiction"));
// // Remove a book by title
// myLibrary.removeBookByTitle("The Great Gatsby");
// console.log("\nAfter removing 'The Great Gatsby':");
// myLibrary.displayAvailableBooks();
// // Borrow book
// myLibrary.borrowBook("To Kill a Mockingbird");
// // return book
// myLibrary.returnBook("To Kill a Mockingbird");
