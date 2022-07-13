import chalk from "chalk";
import { BookRepository } from "../repository/books.repository.js";
import { transporter, requestEmailPayload } from "../config/emailing.js";

export class EmailService {
  static requestMail = async ({ targetEmail, requests, name }) => {
    const placeholderBookCover =
      "https://user-images.githubusercontent.com/71194923/178624543-95ccb5b2-8bdc-4e85-b053-1fe771da435e.png";
    // `${process.env.BASE_URL}/assets/default_cover.png`;

    const treatedRequests = requests.map((item) => ({
      ...item,
      image: item.image ?? placeholderBookCover,
    }));

    transporter
      .sendMail({
        to: targetEmail,
        ...requestEmailPayload,
        template: "request",
        context: {
          name,
          requests: treatedRequests,
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
