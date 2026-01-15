import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ================= CONTACT US ================= */}
        <div className="footer-column">
          <h3>CONTACT US</h3>

          <p>
            <strong>Address:</strong><br />
            Cotton Green, Mumbai – 400003,<br />
            Zakaria Bunder Rd.
          </p>

          <p>
            <strong>Contact No:</strong><br />
            <a href="tel:+919737075606">+91 9737075606</a><br />
            <a href="tel:+917984262775">+91 7984262775</a>
          </p>

          <p>
            <strong>Email ID:</strong><br />
            <a href="mailto:keval50582@gmail.com">
              keval50582@gmail.com
            </a>
          </p>
        </div>

        {/* ================= OUR SERVICES ================= */}
        <div className="footer-column">
          <h3>OUR SERVICES</h3>
          <ul className="footer-list">
            <li>✅ Bitumen / APP Membrane Waterproofing</li>
            <li>✅ Terrace Waterproofing</li>
            <li>✅ Roof Leakage Treatment</li>
            <li>✅ Basement Waterproofing</li>
            <li>✅ Heat Proofing / Thermal Coating</li>
            <li>✅ Industrial Shed Waterproofing</li>
            <li>✅ GI / PPGI Metal Roofing Sheet</li>
            <li>✅ Roof Tiles Installation</li>
          </ul>
        </div>

        {/* ================= SOCIAL ================= */}
        <div className="footer-column">
          <h3>CONNECT WITH US</h3>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌐 Facebook
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              📸 Instagram
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ▶️ YouTube
            </a>

            <a
              href="https://www.linkedin.com/in/keval-a10341260/"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 LinkedIn
            </a>

            <a
              href="https://wa.me/919737075606"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>

      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} <strong>Vala Waterproofing</strong>. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
