import { BookRepository } from "../repository/books.repository.js";
import { PostBookService } from "../services/postBook.service.js";

export class BookController {
  static list = async (_, res) => {
    const books = await BookRepository.list();
    return res.status(200).json(books);
  };

  static getBook = async (req, res) => {
    const { id } = req.params;
    try {
      const book = await BookRepository.getBookById(id);
      return res.status(200).json(book);
    } catch {
      return res.status(404).json({ message: "Book was not found." });
    }
  };

  static postBook = async (req, res) => {
    const { book_title, author } = req.body;
    try {
      const newBook = await PostBookService.execute({ book_title, author });
      return res.status(201).json(newBook);
    } catch (err) {
      return err.code === "bad.request"
        ? res.status(400).json({ message: "Unable to create book." })
        : res.status(500).json({
            message:
              "Operation could not be performed. Please, try again later.",
          });
    }
  };
}
