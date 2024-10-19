const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Define schema for form data
const formSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  comment: String,
});

const Form = mongoose.model("Form", formSchema);

// Set up Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Handle form submission
app.post("/api/form", async (req, res) => {
  const { name, phone, email, comment } = req.body;

  // Save form data to MongoDB
  const formData = new Form({ name, phone, email, comment });
  await formData.save();

  // Send email
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New Form Submission",
    text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nComment: ${comment}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: "Email sending failed" });
    } else {
      return res
        .status(200)
        .json({ message: "Form submitted and email sent!" });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
