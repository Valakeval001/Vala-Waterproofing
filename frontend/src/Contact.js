import { useState } from "react";
import "./style.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    place: "",
    message: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://vala-waterproofing.onrender.com/contact", // ✅ LIVE BACKEND
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      alert("Thank you! We will contact you soon.");

      setForm({
        name: "",
        email: "",
        phone: "",
        place: "",
        message: ""
      });
    } catch (error) {
      alert("Something went wrong. Please try again later.");
      console.error(error);
    }
  };

  return (
    <div className="page contact-wrapper">
      {/* LEFT FORM */}
      <div className="contact-form-card">
        <h2>GET IN TOUCH WITH US</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            required
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="E-mail"
            type="email"
            value={form.email}
            required
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Mobile Number"
            value={form.phone}
            required
            onChange={handleChange}
          />

          <input
            name="place"
            placeholder="Place"
            value={form.place}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

      {/* RIGHT SIDE */}
      <div className="contact-right">
        <div className="office-tabs">
          <button className="active">CORPORATE OFFICE</button>
          <button>REGIONAL OFFICE</button>
        </div>

        <iframe
          title="office-map"
          src="https://www.google.com/maps?q=Mumbai&output=embed"
          className="map"
          loading="lazy"
        ></iframe>

        <div className="contact-info">
          <p>📍 Cotton Green, Mumbai – 400003, Zakaria Bunder Rd.</p>
          <p>📞 +91 9737075606</p>
          <p>✉️ keval50582@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
