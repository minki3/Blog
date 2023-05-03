import nodemailer from "nodemailer";

export interface EmailType {
  from: string;
  subject: string;
  message: string;
}

const transper = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.AUTH_USER, // generated ethereal user
    pass: process.env.AUTH_PASS, // generated ethereal password
  },
});

export async function sendEmail({ from, subject, message }: EmailType) {
  const mailData = {
    to: process.env.AUTH_USER,
    subject: `[blog] ${subject}`,
    from,
    html: `<h1>${subject}</h1>
    <div>${message}</div>
    <br/>
    <p>보낸사람 : ${from}</p>
    `,
  };
  return transper.sendMail(mailData);
}
