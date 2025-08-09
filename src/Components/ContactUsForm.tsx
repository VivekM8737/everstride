import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id",     // From EmailJS dashboard
        "your_template_id",    // From EmailJS dashboard
        formData,
        "your_public_key"      // From EmailJS dashboard
      )
      .then(
        () => alert("Message sent successfully!"),
        (err) => alert("Failed to send message: " + err.text)
      );
  };

  return (
    <section className=" py-12 px-6 md:px-16">
      <div className="max-w-3xl mx-auto bg-blue-200 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-6 text-center">
          Contact Us
        </h2>
        <form className="space-y-6" onSubmit={sendEmail}>
          <input name="name" placeholder="Name" onChange={handleChange} className="w-full border px-4 py-2 rounded" />
          <input name="email" placeholder="Email" onChange={handleChange} className="w-full border px-4 py-2 rounded" />
          <input name="phone" placeholder="Phone" onChange={handleChange} className="w-full border px-4 py-2 rounded" />
          <textarea name="message" placeholder="Message" onChange={handleChange} className="w-full border px-4 py-2 rounded" />
          <button type="submit" className="bg-blue-900 text-white px-6 py-2 rounded-lg">Send Message</button>
        </form>
      </div>
    </section>
  );
}
