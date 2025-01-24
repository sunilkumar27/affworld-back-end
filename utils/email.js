// utils/email.js (for password reset functionality)
const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  // Define email options
  const mailOptions = {
    from: 'Your App <noreply@yourapp.com>',
    to: options.email,
    subject: options.subject,
    text: options.text,
    html: options.html
  };

  // Send email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;