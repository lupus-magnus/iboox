import { BookRepository } from "../repository/books.repository.js";
import { throwBadRequestError } from "../config/errors.js";

export class PostBookService {
  static execute = async ({ book_title, author }) => {
    console.log("Received in PostBookService:", { book_title, author });
    if (!book_title || !author) {
      throwBadRequestError();
    }
    const newBook = await BookRepository.createBook({ book_title, author });
    return newBook;
  };
}
