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

    await fetch("http://127.0.0.1:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    alert("Thank you! We will contact you soon.");
    setForm({ name: "", email: "", phone: "", place: "", message: "" });
  };

  return (
    <div className="page contact-wrapper">
      {/* LEFT FORM */}
      <div className="contact-form-card">
        <h2>GET IN TOUCH WITH US</h2>

        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" required onChange={handleChange} />
          <input name="email" placeholder="E-mail" required onChange={handleChange} />
          <input name="phone" placeholder="Mobile Number" required onChange={handleChange} />
          <input name="place" placeholder="Place" onChange={handleChange} />
          <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>

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
          <p>📍  Cotton Green, Mumbai – 400003,
Zakaria Bunder Rd.</p>
          <p>📞 +91 9737075606</p>
          <p>✉️ keval50582@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
