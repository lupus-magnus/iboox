import { getFileAsObject, writeJsonFile } from "../../temp/utils.js";

import { Book, Books } from "../model/Book.js";

// type BookRepository = {
//   list: () => Book[]
//   getBookById: (id) => Book
//   createBook: ({author: string, title: string}) => Book
// }

const dataPath = "src/config/fixtures/books.json";

export class BookRepository {
  static list = async () => {
    return new Promise(async (resolve) => {
      const results = await Books.find({}, (err, queryResults) => {
        if (err) console.log(err);
        resolve(queryResults);
      });
    });
  };

  static getBookById = async (id) => {
    return new Promise(async (resolve) => {
      const result = await Books.findById(id);
      resolve(result);
    });
  };

  static createBook = async (newBook) => {
    const { author, book_title } = newBook;
    const book = new Books({ author, book_title });

    return new Promise(async (resolve) => {
      await book.save((err) => {
        if (err) {
          console.log({ err });
          throw new Error("Unable to create book");
        } else {
          resolve(book);
        }
      });
    });
  };
}
