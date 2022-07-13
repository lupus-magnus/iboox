import mongoose from "mongoose";
import "dotenv/config";
import chalk from "chalk";

import { getFileAsObject } from "./utils.js";
import { Books } from "../src/model/Book.js";

const USER = process.env.ATLAS_USER;
const PWD = process.env.ATLAS_PWD;

mongoose.connect(
  `mongodb+srv://${USER}:${PWD}@ibooxcluster.7wo1y.mongodb.net/iboox`
);

let db = mongoose.connection;

db.once("open", () => {
  console.log(
    `\n✅ Our script has successfully made a ${chalk.blue(
      "database connection"
    )}.`
  );
});

(function populateDatabase() {
  const fixturePath = "src/config/fixtures/books.json";
  const initialData = getFileAsObject(fixturePath);
  const payloads = initialData.map(({ book_title, image, author }) => ({
    book_title,
    image,
    author,
  }));
  console.log({ initialData });
  console.log({ formattedData: payloads });

  Promise.all(
    payloads.forEach(async (item) => {
      const book = new Books(item);
      await book.save((err) => {
        if (err) {
          console.log({ err });
          throw new Error("Unable to create book");
        } else {
          console.log("📚 Registered book successfully:", book.book_title);
        }
      });
    })
  ).then(() =>
    console.log(`\n✅ Fixture was ${chalk.green("successfully uploaded")}`)
  );
})();
