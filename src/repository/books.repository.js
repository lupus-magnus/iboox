import { getFileAsObject, writeJsonFile } from "../../temp/utils.js";

import { Book } from "../model/Book.js";

// type BookRepository = {
//   list: () => Book[]
//   getBookById: (id) => Book
//   createBook: ({author: string, title: string}) => Book
// }

const dataPath = "src/config/fixtures/books.json";

export class BookRepository {
  static list = () => {
    const books = getFileAsObject(dataPath);
    const booksSummary = books.map(({ book_title, id }) => ({
      book_title,
      id,
    }));

    return booksSummary;
  };

  static getBookById = (id) => {
    const books = getFileAsObject(dataPath);
    const book = books.find((book) => book.id == id);
    return book;
  };

  static createBook = (newBook) => {
    const { author, title } = newBook;
    const db = getFileAsObject(dataPath);

    try {
      const book = new Book(title, author);
      db.push(book);
      writeJsonFile(dataPath, db);
      return book;
    } catch {
      throw new Error("Unable to create book");
    }
  };
}
