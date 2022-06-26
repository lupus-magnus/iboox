// import { v4 as uuidv4 } from "uuid";
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: { type: String },
  book_title: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, default: null },
});

export const Books = mongoose.model("books", bookSchema);

export class Book {
  constructor(title, author) {
    this.book_title = title;
    this.author = author;
    this.image = null;
  }
}
