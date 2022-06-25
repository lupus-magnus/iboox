import { v4 as uuidv4 } from "uuid";

export class Book {
  constructor(title, author) {
    this.book_title = title;
    this.author = author;

    this.id = uuidv4();
    this.image = null;
  }
}
