import { BookRepository } from "../repository/books.repository.js";

export class BookController {
  static list = async (req, res) => {
    const books = await BookRepository.list();
    console.log({ books });
    return res.status(200).json(books);
  };

  static getBook = async (req, res) => {
    const { id } = req.params;
    const book = await BookRepository.getBookById(id);

    if (book) {
      return res.status(200).json(book);
    } else {
      return res.status(404).json({ message: "Book was not found." });
    }
  };

  static postBook = async (req, res) => {
    const { book_title, author } = req.body;
    try {
      const newBook = await BookRepository.createBook({ book_title, author });
      return res.status(201).json(newBook);
    } catch {
      return res.status(400).json({ message: "Unable to create book." });
    }
  };
}
