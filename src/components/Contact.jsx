import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setform] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, email, message } = form;

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: name,
          email: email,
          message: message,
          reply_to: email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setform({ name: "", email: "", message: "" });
          toast.success("Thank you for your message", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        (error) => {
          console.error("Failed to send message:", error);
          toast.error("Something went wrong", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setLoading(false);
        }
      );
  };

  return (
    <main>
      <div className="contact-container">
        <div className="contact-left">
          <h2>Get In Touch</h2>
          <p>Feel free to reach out to me!</p>
        </div>
        <div className="contact-right">
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              onChange={handleChange}
              type="text"
              name="name"
              value={form.name}
              placeholder="Your Name"
              required
            />
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={form.email}
              placeholder="Your Email"
              required
            />
            <textarea
              onChange={handleChange}
              name="message"
              value={form.message}
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
