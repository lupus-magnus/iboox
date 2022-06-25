import { v4 as uuidV4 } from "uuid";

// type Payload = {
//     email: String;
//     wishlist: string[] // Lista dos ids dos livros
// }

export class Request {
  constructor(email, wishlist) {
    this.email = email;
    this.wishlist = wishlist;

    this.id = uuidV4();
    this.created_at = Date.now();
  }
}
