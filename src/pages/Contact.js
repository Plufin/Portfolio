import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out to me via email or the contact form below.
      </p>

      <div>
        <h3>Email:</h3>
        <p>your.email@example.com</p>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;