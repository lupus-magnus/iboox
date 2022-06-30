import "dotenv/config";
import path from "path";
import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";

const EMAIL = process.env.EMAIL_ACC;
const PWD = process.env.EMAIL_PWD;
console.log({ EMAIL, PWD });

(async function () {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PWD,
    },
  });

  const handlebarOptions = {
    viewEngine: {
      partialsDir: path.resolve("./src/views/"),
      defaultLayout: false,
    },
    viewPath: path.resolve("./src/views/"),
  };

  transporter.use("compile", hbs(handlebarOptions));

  const mockedWishlist = [
    {
      id: "e3d77255-9109-4d23-8c1c-febdaf51fa05",
      book_title: "Dracula",
      image: "http://i.imgur.com/1zczIsH.jpg",
      author: "Bram Stoker",
    },
    {
      id: "7cdf0705-b667-4bcc-904e-8a3ba0187207",
      book_title: "The Da Vinci Code",
      image: "http://i.imgur.com/IUopb8k.jpg",
      author: "Dan Brown",
    },
    {
      book_title: "Jurassic Park",
      image:
        "https://lh3.googleusercontent.com/-G-eCeJSghbw/VSEh1Yrz2vI/AAAAAAAABI0/Z6-vbKIhNEU/h120/51tn4xOHDqL.jpg",
      author: "Michael Crichton",
      id: "a90d7e12-5614-457b-a0a1-045ef638c738",
    },
  ];

  transporter.sendMail({
    to: EMAIL,
    from: EMAIL,
    subject: "Pedido realizado com sucesso! ✅",
    template: "request",
    context: {
      name: "Matt",
      requests: mockedWishlist,
    },
  });
})();
