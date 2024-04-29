class Book {
  constructor(
    public title: string,
    public author: string,
    public genre: string,
    public available: boolean = true
  ) {}
}

class Library {
  name: string;
  books: Book[];

  constructor(name: string) {
    this.name = name;
    this.books = [];
  }

  // Method to add a book to the library
  addBook(title: string, author: string, genre: string) {
    const newBook = new Book(title, author, genre);
    this.books.push(newBook);
  }
  // Method to remove a book by title
  removeBookByTitle(title: string) {
    this.books = this.books.filter(
      (book) => book.title.toLowerCase() !== title.toLowerCase()
    );
  }

  // Method to search for books by title
  searchByTitle(title: string): Book[] {
    return this.books.filter(
      (book) => book.title.toLowerCase().indexOf(title.toLowerCase()) !== -1
    );
  }

  // Method to search for books by author
  searchByAuthor(author: string): Book[] {
    return this.books.filter(
      (book) => book.author.toLowerCase().indexOf(author.toLowerCase()) !== -1
    );
  }

  // Method to search for books by genre
  searchByGenre(genre: string): Book[] {
    return this.books.filter(
      (book) => book.genre.toLowerCase().indexOf(genre.toLowerCase()) !== -1
    );
  }

  // Method to display a list of all available books
  displayAvailableBooks() {
    console.log(`Available books in ${this.name}:`);
    this.books.forEach((book) => {
      if (book.available) {
        console.log(`${book.title} by ${book.author}`);
      }
    });
  }

  // Method to borrow a book
  borrowBook(title: string) {
    let bookFound = false;
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].title.toLowerCase() === title.toLowerCase()) {
        if (this.books[i].available) {
          this.books[i].available = false;
          console.log(`${title} has been borrowed successfully.`);
        } else {
          console.log(`${title} is currently not available.`);
        }
        bookFound = true;
        break;
      }
    }
    if (!bookFound) {
      console.log(`${title} does not exist in the library.`);
    }
  }
  // Method to return a book
  returnBook(title: string) {
    let bookFound = false;
    for (const book of this.books) {
      if (book.title.toLowerCase() === title.toLowerCase()) {
        if (!book.available) {
          book.available = true;
          console.log(`${title} has been returned successfully.`);
        } else {
          console.log(`${title} has already been returned.`);
        }
        bookFound = true;
        break;
      }
    }
    if (!bookFound) {
      console.log(`${title} does not exist in the library.`);
    }
  }
}

class User {
  name: string;
  borrowed_books: Book[];

  constructor(name: string) {
    this.name = name;
    this.borrowed_books = [];
  }

  // Method to borrow a book
  borrowBook(book: Book) {
    if (this.borrowed_books.length < this.getMaxBorrowLimit()) {
      this.borrowed_books.push(book);
      console.log(
        `${this.name} has borrowed the book "${book.title}" successfully.`
      );
    } else {
      console.log(`${this.name} has reached the maximum borrow limit.`);
    }
  }

  // Method to view borrowed books
  viewBorrowedBooks() {
    console.log(`${this.name}'s borrowed books:`);
    if (this.borrowed_books.length === 0) {
      console.log("No books borrowed.");
    } else {
      this.borrowed_books.forEach((book) => {
        console.log(`${book.title} by ${book.author}`);
      });
    }
  }

  // Method to get the maximum borrow limit (override in subclasses if needed)
  getMaxBorrowLimit(): number {
    return Infinity; // Default: No limit
  }
}

class Admin extends User {
  // Admins have no limit on borrowing books
  getMaxBorrowLimit(): number {
    return Infinity;
  }
}

class Student extends User {
  // Students can borrow up to 5 books
  getMaxBorrowLimit(): number {
    return 5;
  }
}

// Example usage:
const admin = new Admin("Admin1");
const student = new Student("Student1");

const book1 = new Book("Book 1", "Author 1", "Genre 1");
const book2 = new Book("Book 2", "Author 2", "Genre 2");
const book3 = new Book("Book 3", "Author 3", "Genre 3");
const book4 = new Book("Book 4", "Author 4", "Genre 4");
const book5 = new Book("Book 5", "Author 5", "Genre 5");
const book6 = new Book("Book 6", "Author 6", "Genre 6");

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
