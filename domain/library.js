import Book from './book.js';

class Library {

  #name;
  #inventory = [];
  #totalWords;

  constructor(name) {
    this.setName(name);
  }

  setName(name) {
    if (typeof (name) !== 'string') {
      throw new Error();
    }
    name = name.trim();
    if (name.length === 0) {
      throw new Error();
    }
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  addBook(title, author, pages) {
    const newBook = new Book(title, author, pages);
    this.#inventory.push(newBook);
  }

  getInventory() {
    return this.#inventory;
  }

  totalBooks() {
    return this.#inventory.length;
  }

  totalWords() {
    this.#totalWords = 0;
    for (let book of this.#inventory) {
      console.log(book);
      this.#totalWords += book.getWords();
    }
    return this.#totalWords;
  }
}

export default Library;
