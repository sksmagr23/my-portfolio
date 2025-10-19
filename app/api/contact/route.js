import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'sakshamag34@gmail.com',
      replyTo: email,
      subject: `🚀 New Message from Your Portfolio: ${subject}`,
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Portfolio Contact Message</title>
          <style>
              body {
                  margin: 0;
                  padding: 0;
                  background-color: #f4f4f4;
              }
              table {
                  border-spacing: 0;
              }
              td {
                  padding: 0;
              }
              img {
                  border: 0;
              }
          </style>
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #050a1b; color: #ffffff; margin: 0; padding: 0;">
          <center style="width: 100%; table-layout: fixed; background-color: #050a1b; padding-top: 10px; padding-bottom: 10px;">
              <div style="max-width: 700px; margin: 0 auto; background-color: #0a1128; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);">
                  
                  <table align="center" style="width: 100%; border-collapse: collapse;">
                      <tr>
                          <td style="padding: 10px 0; text-align: center;">
                              <img src="/sym.png" alt="Portfolio Banner" style="max-width: 80%; height: auto; border-radius: 8px;">
                          </td>
                      </tr>
                  </table>
      
                  <table align="center" style="width: 100%; border-collapse: collapse; padding: 15px;">
                      <tr>
                          <td style="padding: 10px 0; border-top: 1px solid #1c2e6e;">
                              <p style="font-size: 16px; color: #cdd6f4; line-height: 1.5; margin: 0;">
                                  You've received a new message from the contact form on your portfolio website.
                              </p>
                          </td>
                      </tr>
                      <tr>
                          <td style="background-color: #111a36; padding: 10px; border-radius: 8px;">
                              <p style="margin: 0 0 10px 0; font-size: 16px; color: #a6b0cf;">
                                  <strong>From:</strong> 
                                  <span style="color: #89b4fa;">${name}</span>
                              </p>
                              <p style="margin: 0 0 10px 0; font-size: 16px; color: #a6b0cf;">
                                  <strong>Email:</strong> 
                                  <a href="mailto:${email}" style="color: #89b4fa; text-decoration: none;">${email}</a>
                              </p>
                              <p style="margin: 0; font-size: 16px; color: #a6b0cf;">
                                  <strong>Subject:</strong> 
                                  <span style="color: #89b4fa;">${subject}</span>
                              </p>
                          </td>
                      </tr>
                      <tr>
                          <td style="padding: 15px 0;">
                              <h2 style="font-size: 18px; color: #57a8ff; margin: 0 0 10px 0; border-bottom: 2px solid #64ffb9a8; padding-bottom: 5px;">Message Content</h2>
                              <div style="font-size: 14px; color: #cdd6f4; line-height: 1.6; padding: 10px; background-color: #0e1b711f; border-left: 3px solid #1c4aff; border-radius: 4px;">
                                  ${message.replace(/\n/g, '<br>')}
                              </div>
                          </td>
                      </tr>
                  </table>
      
                  <table align="center" style="width: 100%; border-collapse: collapse;">
                      <tr>
                          <td style="padding: 10px; text-align: center; font-size: 12px; color: #7f8ca3; border-top: 1px solid #1c2e6e;">
                              <p style="margin: 0;">Sent from your Next.js Portfolio App</p>
                              <p style="margin: 5px 0 0 0;">Generated on: ${new Date().toUTCString()}</p>
                          </td>
                      </tr>
                  </table>
      
              </div>
          </center>
      </body>
      </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}