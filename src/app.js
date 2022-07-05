import "dotenv/config";
import express from "express";
import chalk from "chalk";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

import swaggerUi from "swagger-ui-express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const swaggerConfig = require("./config/swagger/swagger.json");

import db from "./config/database.js";

db.on("error", console.log.bind(console, "Erro de conexão"));

db.once("open", () => {
  console.log(
    `\n✅ The ${chalk.blue("database connection")} was successfully stablished!`
  );
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { booksRoutes } from "./routes/books.routes.js";
import { requestsRoutes } from "./routes/requests.routes.js";

const port = 8001;

const app = express();

app.use(express.static(__dirname + "/views/home"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home/index.html"));
});

app.use(express.json());
app.use("/books", booksRoutes);
app.use("/requests", requestsRoutes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig));

app.listen(port, () => {
  console.log(
    `\n\n🚀 Server is ${chalk.green("running")} at ${chalk.inverse(
      `http://localhost:${port}/\n\n`
    )}🐺 Good hacking!`
  );
});
