import { v4 as uuidv4 } from "uuid";

import {
  getFileAsObject,
  writeJsonFile,
} from "../src/repository/books.repository.js";

(function fixIds() {
  const path = "src/config/fixtures";
  const books = getFileAsObject(`${path}/books.json`);
  const fixedList = books.map((book) => ({ ...book, id: uuidv4() }));
  writeJsonFile(`${path}/fixed.json`, fixedList);
})();
