import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

export const sendEmail = async (email: string, link: string) => {
  const c = new ConfigService();
  console.log("sending",c.get('SERECT_KEY_NODEMAILER'))
  let transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'trinh10101010@gmail.com',
      pass: 'IQxG3HjhmXJdsRPK'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<b>Hello world?</b> <a href="${link}">Confirm Email</a>`,
  });

}
