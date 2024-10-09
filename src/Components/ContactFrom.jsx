import { useState } from 'react';

const ContactForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Here, you'll send the email data to the backend
    const response = await fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      alert('Email sent successfully');
    } else {
      alert('Failed to send email');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:flex-row">
      <input
        className="rounded-md px-4 py-3 placeholder:text-gray-400"
        type="email"
        placeholder="Enter e-mail address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
        type="submit"
        className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white"
      >
        Contact
      </button>
    </form>
  );
};

export default ContactForm;
