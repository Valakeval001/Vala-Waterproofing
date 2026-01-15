import "./style.css";
import { useEffect, useState } from "react";

/* ===== AUTO BANNER IMAGES ===== */
import banner1 from "./images/main about image.jpg";
import banner2 from "./images/main about image 2.jpg";
import banner3 from "./images/main about image 3.jpg";
import banner4 from "./images/main about image 4.jpg";

/* ===== WORK GALLERY IMAGES ===== */
import img1 from "./images/about 1.jpeg";
import img2 from "./images/about 2.jpeg";
import img3 from "./images/about 3.jpeg";
import img4 from "./images/about 4.jpeg";
import img5 from "./images/about 5.jpeg";
import img6 from "./images/about 6.jpeg";
import img7 from "./images/about 7.jpeg";
import img8 from "./images/about 8.jpeg";
import img9 from "./images/about 9.jpeg";
import img10 from "./images/about 10.jpeg";
import img11 from "./images/about 11.jpeg";
import img12 from "./images/about 12.jpeg";
import img13 from "./images/about 13.jpg";

function About() {
  /* ===== HERO AUTO SLIDER ===== */
  const banners = [banner1, banner2, banner3, banner4];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((p) => (p + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page">

      {/* ===== ABOUT HERO ===== */}
      <div className="about-hero">
        <img
          src={banners[index]}
          alt="Vala Waterproofing Work"
          className="about-hero-img"
        />
        <h1>ABOUT VALA WATERPROOFING</h1>
      </div>

      {/* ===== ABOUT CONTENT ===== */}
      <div className="about-section">
        <h2>Trusted Waterproofing Experts in Mumbai</h2>

        <p>
          <strong>VALA Waterproofing</strong> is a Mumbai-based professional
          waterproofing contractor providing long-lasting waterproofing and
          roofing solutions for residential, commercial, and industrial
          projects.
        </p>

        <p>
          We specialize in identifying the root cause of leakage and applying
          the correct waterproofing system using high-quality membranes,
          chemical coatings, and modern waterproofing technologies.
        </p>

        <p>
          Our experienced team is known for reliable workmanship, timely
          execution, and solutions designed for Indian weather and monsoon
          conditions.
        </p>

        <ul className="about-points">
          <li>✔ Terrace & Roof Waterproofing</li>
          <li>✔ Bathroom & Toilet Waterproofing</li>
          <li>✔ Leakage Detection & Repair</li>
          <li>✔ APP Membrane & Chemical Systems</li>
          <li>✔ Basement Waterproofing</li>
          <li>✔ Heat Proofing / Thermal Coating</li>
          <li>✔ Industrial Shed Waterproofing</li>
          <li>✔ Monsoon Leakage Specialists</li>
        </ul>
      </div>

      {/* ===== WORK GALLERY ===== */}
      <div className="work-gallery">
        <h2>Our Waterproofing Work</h2>

        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={img1} alt="Terrace Waterproofing" />
            <span>Terrace Waterproofing</span>
            <p> Roof Tiles (Clay / Mangalore Tiles) Installation </p>
          </div>

          <div className="gallery-item">
            <img src={img2} alt="Roof Leakage Repair" />
            <span>Roof Leakage Repair</span>
             <p>Roof Tiles (Clay / Mangalore Tiles) Installation </p>
          </div>

          <div className="gallery-item">
            <img src={img3} alt="APP Membrane Waterproofing" />
            <span>APP Membrane Waterproofing</span>
             <p> Bitumen / APP Membrane Waterproofing </p>
          </div>

          <div className="gallery-item">
            <img src={img4} alt="Bathroom Waterproofing" />
            <span>Bathroom Waterproofing</span>
            <p> Roof Tiles (Clay / Mangalore Tiles) Installation</p>
          </div>

          <div className="gallery-item">
            <img src={img5} alt="Basement Waterproofing" />
            <span>Basement Waterproofing</span>
             <p> Roof Tiles (Clay / Mangalore Tiles) Installation </p>
          </div>

          <div className="gallery-item">
            <img src={img6} alt="Heat Proofing Coating" />
            <span>Heat Proofing Coating</span>
            <p> Before Roof tiles Fitting membrane roll coating</p>
          </div>

          <div className="gallery-item">
            <img src={img7} alt="Industrial Shed Waterproofing" />
            <span>Industrial Shed Waterproofing</span>
            <p> GI / PPGI Metal Roofing Sheet (Profile Sheet) </p>
          </div>

          <div className="gallery-item">
            <img src={img8} alt="GI Sheet Roof Work" />
            <span>GI Sheet Roof Work</span>
            <p> Basement Waterproofing  </p>
          </div>


          <div className="gallery-item">
            <img src={img10} alt="Chemical Waterproofing" />
            <span>Chemical Waterproofing</span>
            <p> Bitumen / APP Membrane Waterproofing</p>
          </div>

          <div className="gallery-item">
            <img src={img11} alt="Monsoon Leakage Repair" />
            <span>Monsoon Leakage Repair</span>
            <p>Cement Roof Sheets Coated With  Bitumen / APP Membrane Waterproofing</p>
          </div>

          <div className="gallery-item">
            <img src={img12} alt="Commercial Waterproofing" />
            <span>Commercial Waterproofing</span>
            <p>After  Bitumen / APP Membrane Waterproofing Silver Coating</p>
          </div>

          <div className="gallery-item">
            <img src={img13} alt="Commercial Waterproofing" />
            <span>Commercial Waterproofing</span>
            <p>GI/PPGI Metal Roofing Sheet (Profile Sheet)</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;