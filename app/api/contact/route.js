import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { error: 'Email service is not configured in environment variables' },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeSubject = escapeHtml(subject.trim());
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br>');

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'sakshamag34@gmail.com',
      replyTo: email.trim(),
      subject: `Portfolio Inquiry: ${subject.trim()}`,
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <body style="font-family: Inter, Arial, sans-serif; background-color: #1E1F25; color: #E6EDF3; margin: 0; padding: 24px;">
        <div style="max-width: 640px; margin: 0 auto; background-color: #24262E; border: 1px solid #3B4353; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #18191E; padding: 14px 20px; border-bottom: 1px solid #3B4353; font-family: monospace; font-size: 13px; color: #58B4EE;">
            portfolio/contact.tsx — New Message
          </div>
          <div style="padding: 20px;">
            <p style="margin: 0 0 8px; color: #94A3B8; font-size: 14px;"><strong style="color: #E6EDF3;">From:</strong> ${safeName}</p>
            <p style="margin: 0 0 8px; color: #94A3B8; font-size: 14px;"><strong style="color: #E6EDF3;">Email:</strong> <a href="mailto:${safeEmail}" style="color: #58B4EE;">${safeEmail}</a></p>
            <p style="margin: 0 0 16px; color: #94A3B8; font-size: 14px;"><strong style="color: #E6EDF3;">Subject:</strong> ${safeSubject}</p>
            <div style="background-color: #1E1F25; border-left: 3px solid #58B4EE; padding: 14px; border-radius: 4px; color: #CBD5E1; font-size: 14px; line-height: 1.6;">
              ${safeMessage}
            </div>
            <p style="margin: 18px 0 0; font-size: 11px; color: #64748B; font-family: monospace;">
              Sent on ${new Date().toUTCString()}
            </p>
          </div>
        </div>
      </body>
      </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
