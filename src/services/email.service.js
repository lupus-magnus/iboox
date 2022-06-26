import chalk from "chalk";
import { transporter, requestEmailPayload } from "../config/emailing.js";

export class EmailService {
  static requestMail = ({ targetEmail, wishlist }) => {
    const text = wishlist.join(", ");

    transporter
      .sendMail({
        to: targetEmail,
        ...requestEmailPayload,
        text: `Olá, obrigado por efetuar seu pedido conosco!\nEm breve daremos mais informações. Os itens requisitados foram:\n${text}`,
      })
      .then((info) =>
        console.log(
          `Email has been requested. ${chalk.green("Info:")}\n${JSON.stringify(
            info
          )}`
        )
      );
  };
}
