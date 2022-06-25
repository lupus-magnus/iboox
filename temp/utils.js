import fs from "fs";

export const getFileAsObject = (path) => {
  try {
    const data = fs.readFileSync(path, "utf8");
    const formattedData = JSON.parse(data);
    return formattedData;
  } catch (e) {
    console.error("Erro");
    throw e;
  }
};

export const writeJsonFile = (targetPath, data) => {
  fs.writeFile(targetPath, JSON.stringify(data), "utf-8", function (err) {
    if (err) {
      console.error(errMessage);
      throw err;
    }
  });
};
