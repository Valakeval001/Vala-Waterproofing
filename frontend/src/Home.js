import "./style.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== HERO IMAGES ===== */
import home1 from "./images/home 1.jpg";
import home2 from "./images/home 2.jpg";
import home3 from "./images/home 3.jpg";
import home4 from "./images/home 4.jpg";

function Home() {
  const navigate = useNavigate();

  const images = [home1, home2, home3, home4];
  const [index, setIndex] = useState(0);

  /* AUTO CHANGE IMAGE */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page">

      {/* ===== HERO SECTION ===== */}
      <section
        className="hero"
        style={{
          position: "relative",
          height: "75vh",        // ✅ page size controlled
          minHeight: "420px",
          overflow: "hidden",
          background: "#0b1c3f" // ✅ side background visible
        }}
      >
        {/* IMAGE (FULLY VISIBLE, NO CROP) */}
        <img
          src={images[index]}
          alt="Waterproofing Work"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",   // ✅ FULL IMAGE
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            transition: "opacity 0.8s ease-in-out"
          }}
        />

        {/* DARK OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(11,28,63,0.65)",
            zIndex: 1
          }}
        />

        {/* CONTENT */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
            padding: "0 20px"
          }}
        >
          <h1 style={{ fontSize: "42px", marginBottom: "15px" }}>
            Professional Waterproofing Services
          </h1>

          <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "30px" }}>
            Terrace • Roof • Bathroom • Leakage Repair <br />
            Mumbai’s Trusted Waterproofing Experts
          </p>

          <button
            onClick={() => navigate("/contact")}
            style={{
              padding: "16px 40px",
              borderRadius: "40px",
              border: "none",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
              background: "linear-gradient(135deg,#ffb703,#ff8800)",
              color: "#000",
              boxShadow: "0 15px 35px rgba(0,0,0,0.35)",
              transition: "0.3s"
            }}
          >
            Get Free Inspection
          </button>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="services">
        <h2>Our Services</h2>

        <div className="grid">
          <div className="card">Bitumen / APP Membrane Waterproofing</div>
          <div className="card">Terrace Waterproofing</div>
          <div className="card">Roof Leakage Treatment</div>
          <div className="card">Basement Waterproofing</div>
          <div className="card">Heat Proofing / Thermal Coating</div>
          <div className="card">Industrial Shed Waterproofing</div>
          <div className="card">GI / PPGI Metal Roofing Sheet</div>
          <div className="card">Roof Tiles (Clay / Mangalore Tiles)</div>
        </div>

        <p className="trust-text">
          ✔ Worked at Wankhede Stadium <br />
          ✔ Projects in Goregaon & Amazon Godowns <br />
          ✔ Monsoon leakage specialists <br />
          ✔ Guaranteed waterproofing solutions
        </p>
      </section>

    </div>
  );
}

export default Home;