import { Request } from "../model/Request.js";
import { EmailService } from "../services/email.service.js";
import { RequestService } from "../services/request.service.js";

export class RequestController {
  static post = async (req, res) => {
    const { email, wishlist, name } = req.body;

    try {
      await RequestService.execute({ email, wishlist, name });

      return res.status(201).json({
        message: `Your request was successfully received.`,
        client: name,
        request: wishlist,
      });
    } catch (err) {
      if (err.code === "bad.request") {
        return res.status(400).json({
          message: "Bad request.",
        });
      } else if (err.code === "not.found") {
        return res.status(404).json({
          message: "One or more of the requested books are out of stock.",
        });
      }
    }
  };
}
