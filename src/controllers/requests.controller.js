import { Request } from "../model/Request.js";
import { EmailService } from "../services/email.service.js";

export class RequestController {
  static post = (req, res) => {
    const { email, wishlist, name } = req.body;
    try {
      if (!email || !wishlist) {
        return res.status(400).json({
          message: "Bad request.",
        });
      }
      const request = new Request(email, wishlist);
      EmailService.requestMail({ targetEmail: request.email, wishlist, name });

      return res.status(201).json({
        message: `You request was successfully received.`,
        request,
      });
    } catch {
      return res.status(500).json({
        message: "Could not proccess the request.",
      });
    }
  };
}
