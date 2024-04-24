class Book {
  constructor(
    public title: string,
    public author: string,
    public genre: string,
    public available: boolean = true
  ) {}
}

class Library {
  constructor(public name: string, public books: Book[] = []) {}

  // Method to add a new book to the library
  addBook(title: string, author: string, genre: string) {
    const newBook = new Book(title, author, genre);
    this.books.push(newBook);
  }

  // Method to display all books in the library
  displayBooks() {
    console.log(`Books available in ${this.name}:`);
    this.books.forEach((book) => {
      console.log(`${book.title} by ${book.author}`);
    });
  }

  // Method to borrow a book
  borrowBook(title: string) {
    let bookFound = false;
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].title === title && this.books[i].available) {
        this.books[i].available = false;
        console.log(`${title} has been borrowed successfully.`);
        bookFound = true;
        break;
      }
    }
    if (!bookFound) {
      console.log(
        `${title} is either not available or does not exist in the library.`
      );
    }
  }

  // Method to return a borrowed book
  returnBook(title: string) {
    let bookFound = false;
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].title === title && !this.books[i].available) {
        this.books[i].available = true;
        console.log(`${title} has been returned successfully.`);
        bookFound = true;
        break;
      }
    }
    if (!bookFound) {
      console.log(
        `${title} was not borrowed or does not exist in the library.`
      );
    }
  }
}

// Example usage:
const myLibrary = new Library("My Library");
myLibrary.addBook("The Great Gatsby", "F. Scott Fitzgerald", "Classic");
myLibrary.addBook("To Kill a Mockingbird", "Harper Lee", "Fiction");

myLibrary.displayBooks();

myLibrary.borrowBook("The Great Gatsby");
myLibrary.borrowBook("To Kill a Mockingbird");

myLibrary.displayBooks();

myLibrary.returnBook("The Great Gatsby");

myLibrary.displayBooks();
