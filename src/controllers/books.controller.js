import { BookRepository } from "../repository/books.repository.js";

export class BookController {
  static list = (req, res) => {
    const books = BookRepository.list();
    return res.status(200).json(books);
  };

  static getBook = (req, res) => {
    const { id } = req.params;
    const book = BookRepository.getBookById(id);

    if (book) {
      return res.status(200).json(book);
    } else {
      return res.status(404).json({ message: "Book was not found." });
    }
  };

  static postBook = (req, res) => {
    const { title, author } = req.body;
    try {
      const newBook = BookRepository.createBook({ title, author });
      return res.status(201).json(newBook);
    } catch {
      return res.status(500).json({ message: "Unable to create book." });
    }
  };
}
