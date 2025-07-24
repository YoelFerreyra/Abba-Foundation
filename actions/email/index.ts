'use server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_SENDER_EMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export async function sendMail({
  email,
  sendTo,
  subject,
  text,
  html,
}: {
  email: string;
  sendTo?: string;
  subject: string;
  text: string;
  html?: string;
}) {
  try {
    await transporter.verify();
  } catch (error) {
    console.error('OAuth2 verification failed', error);
    return;
  }

  const info = await transporter.sendMail({
    from: `"${email}" <${process.env.GMAIL_SENDER_EMAIL}>`,
    to: sendTo || process.env.SITE_MAIL_RECIEVER,
    subject,
    text,
    html: html ?? '',
  });

  console.log('Message Sent', info.messageId);
  return info;
}
