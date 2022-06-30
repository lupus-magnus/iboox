import chalk from "chalk";
import { BookRepository } from "../repository/books.repository.js";
import { transporter, requestEmailPayload } from "../config/emailing.js";

export class EmailService {
  static requestMail = async ({ targetEmail, wishlist, name }) => {
    // Get objects for each wishlist
    const requests = await Promise.all(
      wishlist.map(async (id) => {
        const book = await BookRepository.getBookById(id);
        return book;
      })
    );

    transporter
      .sendMail({
        to: targetEmail,
        ...requestEmailPayload,
        template: "request",
        context: {
          name,
          requests,
        },
      })
      .then((info) =>
        console.log(
          `\n\nEmail has been requested.\n${chalk.green(
            "Info:"
          )}\n${JSON.stringify(info)}`
        )
      );
  };
}
