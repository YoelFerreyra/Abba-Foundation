'use server';
import { renderTemplate } from '@/templates/events';
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
  templateHtml,
  templateData
}: {
  email: string;
  sendTo?: string;
  subject: string;
  text: string;
  html?: string;
  templateHtml?: (data: any) => string;
  templateData?: Record<string, any>;
}) { 
  try {
    await transporter.verify();

    const htmlContent = templateHtml
    ? renderTemplate(templateHtml, templateData || {})
    : html ?? '';

  const info = await transporter.sendMail({
    from: `"${email}" <${process.env.GMAIL_SENDER_EMAIL}>`,
    to: sendTo || process.env.SITE_MAIL_RECIEVER,
    subject,
    text,
    html: htmlContent,
  });

  console.log('Message Sent', info.messageId);
  return info;
  } catch (error) {
    console.error('OAuth2 verification failed', error);
    return;
  }
}
