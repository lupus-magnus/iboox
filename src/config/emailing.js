import nodemailer from "nodemailer";
import path from "path";
import hbs from "nodemailer-express-handlebars";

const EMAIL = process.env.EMAIL_ACC;
const PWD = process.env.EMAIL_PWD;

export const transporter = nodemailer.createTransport({
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

export const requestEmailPayload = {
  from: EMAIL,
  subject: "Pedido realizado com sucesso! ✅",
};
