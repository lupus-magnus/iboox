import nodemailer from "nodemailer";

const EMAIL = process.env.EMAIL_ACC;
const PWD = process.env.EMAIL_PWD;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ACC,
    pass: process.env.EMAIL_PWD,
  },
});

export const requestEmailPayload = {
  from: process.env.EMAIL_ACC,
  subject: "Pedido realizado com sucesso! ✅",
};
