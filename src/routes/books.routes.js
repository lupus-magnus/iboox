import { Router } from "express";
import { BookController } from "../controllers/books.controller.js";

const booksRoutes = Router();

booksRoutes.get("/", BookController.list);
booksRoutes.post("/", BookController.postBook);

booksRoutes.get("/:id", BookController.getBook);

export { booksRoutes };
