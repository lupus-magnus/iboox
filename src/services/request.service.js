import { EmailService } from "./email.service.js";
import { BookRepository } from "../repository/books.repository.js";
import { throwNotFoundError, throwBadRequestError } from "../config/errors.js";

export class RequestService {
  static execute = async ({ email, wishlist, name }) => {
    if (!email || !wishlist || !name) {
      throwBadRequestError();
    }
    try {
      const requests = await Promise.all(
        wishlist.map(async (id) => {
          const book = await BookRepository.getBookById(id);
          return book;
        })
      );

      EmailService.requestMail({ targetEmail: email, requests, name });
    } catch (err) {
      throwNotFoundError();
    }
  };
}
