import chalk from "chalk";
import { BookRepository } from "../repository/books.repository.js";
import { transporter, requestEmailPayload } from "../config/emailing.js";

export class EmailService {
  static requestMail = async ({ targetEmail, requests, name }) => {
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
