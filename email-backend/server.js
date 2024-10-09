const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();  // To load environment variables from .env file

const app = express();
app.use(express.json());  // Parse JSON bodies

// API endpoint for sending email
app.post('/send-email', async (req, res) => {
  const { email } = req.body;

  // Create a transporter object for Gmail
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,  // Your email
      pass: process.env.EMAIL_PASS,  // Your email password or app password
    },
  });

  // Email details
  let mailOptions = {
    from: process.env.EMAIL_USER,  // Your email
    to: process.env.EMAIL_USER,    // Send to your own email
    subject: 'New Contact Form Submission',
    text: `You have a new contact request from: ${email}`,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send email');
  }
});

// Start the server
const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
