import { Router } from "express";
import { BookController } from "../controllers/books.controller.js";
import { RequestController } from "../controllers/requests.controller.js";

const requestsRoutes = Router();

requestsRoutes.post("/", RequestController.post);

export { requestsRoutes };
