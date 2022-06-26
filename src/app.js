import "dotenv/config";
import express from "express";
import chalk from "chalk";

import db from "./config/database.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log(
    `\n✅ The ${chalk.blue("database connection")} was successfully stablished!`
  );
});

import { booksRoutes } from "./routes/books.routes.js";
import { requestsRoutes } from "./routes/requests.routes.js";

const port = 8001;

const app = express();

app.get("/", (req, res) => {
  res.send(
    "Welcome to Iboox!\nHere you will find other book lovers just like you.\nShare your passion."
  );
});

app.use(express.json());
app.use("/books", booksRoutes);
app.use("/request", requestsRoutes);

app.listen(port, () => {
  console.log(
    `\n\n🚀 Server is ${chalk.green("running")} at ${chalk.inverse(
      `http://localhost:${port}/\n\n`
    )}🐺 Good hacking!`
  );
});
