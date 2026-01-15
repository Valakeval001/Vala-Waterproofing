import "./style.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// import appMembraneImg from "./images/APP-Membrane-Waterproofing.jpg";
import service1Img1 from "./images/app 1.jpg";
import service1Img2 from "./images/app 2.jpeg";
import service1Img3 from "./images/app 3.jpg";

// import Tarace from "./images/tarace working.jpg";
import basementImg1 from "./images/basamant image 1.jpg";
import basementImg2 from "./images/basamant image 2.jpg";

import service2Img1 from "./images/roof 1.jpg";
import service2Img2 from "./images/roof 2.jpeg";
import service2Img3 from "./images/roof 3.jpeg";


import heatImg1 from "./images/heat reduce 1.jpg";
import heatImg2 from "./images/heat reduce 2.jpg";

import service5Img1 from "./images/industrial image 1.jpg";
import service5Img2 from "./images/industrial image 2.jpg";
import service5Img3 from "./images/industrial image 3.jpg";

import service6Img1 from "./images/metal 1.jpg";
import service6Img2 from "./images/metal 2.jpg";
import service6Img3 from "./images/metal 3.jpg";



function Services() {
    /* ===== SERVICE 1 ===== */
  const service1Images = [service1Img1, service1Img2, service1Img3];
  const [service1Index, setService1Index] = useState(0);
  const nextService1 = () => setService1Index((p) => (p + 1) % service1Images.length);
  const prevService1 = () => setService1Index((p) => (p - 1 + service1Images.length) % service1Images.length);

  /* ===== SERVICE 2 ===== */
  const service2Images = [service2Img1, service2Img2, service2Img3];
  const [service2Index, setService2Index] = useState(0);
  const nextService2 = () => setService2Index((p) => (p + 1) % service2Images.length);
  const prevService2 = () => setService2Index((p) => (p - 1 + service2Images.length) % service2Images.length);

  /* ===== SERVICE 3 ===== */
  const basementImages = [basementImg1, basementImg2];
  const [basementIndex, setBasementIndex] = useState(0);
  const nextBasement = () => setBasementIndex((p) => (p + 1) % basementImages.length);
  const prevBasement = () => setBasementIndex((p) => (p - 1 + basementImages.length) % basementImages.length);

  /* ===== SERVICE 4 ===== */
  const heatImages = [heatImg1, heatImg2];
  const [heatIndex, setHeatIndex] = useState(0);
  const nextHeat = () => setHeatIndex((p) => (p + 1) % heatImages.length);
  const prevHeat = () => setHeatIndex((p) => (p - 1 + heatImages.length) % heatImages.length);

  /* ===== SERVICE 5 ===== */
  const service5Images = [service5Img1, service5Img2, service5Img3];
  const [service5Index, setService5Index] = useState(0);
  const nextService5 = () => setService5Index((p) => (p + 1) % service5Images.length);
  const prevService5 = () => setService5Index((p) => (p - 1 + service5Images.length) % service5Images.length);

  /* ===== SERVICE 6 ===== */
  const service6Images = [service6Img1, service6Img2, service6Img3];
  const [service6Index, setService6Index] = useState(0);
  const nextService6 = () => setService6Index((p) => (p + 1) % service6Images.length);
  const prevService6 = () => setService6Index((p) => (p - 1 + service6Images.length) % service6Images.length);

  
  /* ===== AUTO SLIDE ===== */
  useEffect(() => {
    const timer = setInterval(() => {
      nextService1();
      nextService2();
      nextBasement();
      nextHeat();
      nextService5();
      nextService6();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  /* ===== SCROLL ANIMATION ===== */
  useEffect(() => {
    const elements = document.querySelectorAll(".animate");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        }),
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
  }, []);

  /* ===== SEO TITLE ===== */
  useEffect(() => {
    document.title = "Waterproofing & Roofing Services | Professional Solutions";
  }, []);

  return (
    <div className="page">

      {/* ================= BANNER ================= */}
      <div className="services-banner">
        <h1>SERVICES</h1>
      </div>

      {/* ================= INTRO ================= */}
      <div className="services-intro">
        <h2>OUR WATERPROOFING & ROOFING SERVICES</h2>
        <p>
          Professional waterproofing solutions with proven working methods,
          quality materials and experienced execution.
        </p>
      </div>

      {/* ================= SERVICE 1 (METHOD 3 – 3 IMAGES) ================= */}
        <div className="zigzag-row animate">

        {/* LEFT – IMAGE SLIDER */}
        <div className="zigzag-img">
            <div className="image-slider">
            <img
                src={service1Images[service1Index]}
                alt="APP Membrane Waterproofing Work"
            />

            <div className="slider-controls">
                <button onClick={prevService1}>‹</button>
                <button onClick={nextService1}>›</button>
            </div>
            </div>
        </div>

        {/* RIGHT – CONTENT (UNCHANGED) */}
        <div className="zigzag-content">
            <h3>APP MEMBRANE WATERPROOFING</h3>
            <p>
           APP membrane waterproofing services involve the application of Atactic Polypropylene membranes, 
            which are specialized waterproofing materials made from bitumen. 
            These membranes are designed to protect various surfaces from water infiltration and are commonly used on concrete roofs, terraces, basements, and retaining walls. 
            The application process typically involves surface preparation, heat fusion bonding, and ensuring proper sealing to prevent water ingress. 
            The membranes are known for their durability, flexibility, and resistance to environmental factors, making them a reliable choice for waterproofing solutions.
            </p>

           <h4>WORKING METHOD</h4>
          <ul className="method-icons">
            <li>🧹 Surface cleaning & preparation</li>
            <li>🧪 Primer application</li>
            <li>🔥 Torch-applied APP membrane</li>
            <li>🧱 Joint sealing & testing</li>
            <li>🛡️ Warranty on selected work</li>
          </ul>

            <Link to="/contact" className="service-btn">
            Enquiry for this Service
            </Link>
        </div>

        </div>


      {/* ================= SERVICE 2 (METHOD 3 – 3 IMAGES) ================= */}
<div className="zigzag-row reverse animate">

  {/* LEFT – IMAGE SLIDER */}
  <div className="zigzag-img">
    <div className="image-slider">
      <img
        src={service2Images[service2Index]}
        alt="Roof Tiles (Clay / Mangalore Tiles) Installatio"
      />

      <div className="slider-controls">
        <button onClick={prevService2}>‹</button>
        <button onClick={nextService2}>›</button>
      </div>
    </div>
  </div>

    {/* RIGHT – CONTENT (UNCHANGED) */}
    <div className="zigzag-content">
        <h3>Roof Tiles (Clay / Mangalore Tiles) Installatio</h3>
        <p>
       Clay and Mangalore roof tiles are traditional roofing solutions used for residential, villas, bungalows, and heritage buildings. 
       These tiles provide excellent heat insulation, natural ventilation, and rain protection. Installed on sloped roofs, they offer durability, aesthetic appeal, and long-lasting performance in Indian weather conditions.
        </p>

        <h4>WORKING METHOD</h4>
            <ul className="method-icons">
                <li>📐 Roof slope measurement & layout planning</li>
                <li>🧱 Installation of wooden / metal support framework</li>
                <li>🧹 Surface cleaning & alignment preparation</li>
                <li>🧩 Placement of clay / Mangalore tiles in pattern</li>
                <li>🔩 Fixing tiles with hooks, nails or fasteners</li>
                <li>🌧️ Ridge capping & water drainage alignment</li>
                <li>✅ Final inspection for stability & leakage</li>
            </ul>

        <Link to="/contact" className="service-btn">
        Enquiry for this Service
        </Link>
    </div>

    </div>


      {/* ================= SERVICE 3 (METHOD 3 – BASEMENT) ================= */}
      <div className="zigzag-row animate">
        <div className="zigzag-img">
          <div className="image-slider">
            <img
              src={basementImages[basementIndex]}
              alt="BASEMENT WATERPROOFING"
            />
            <div className="slider-controls">
              <button onClick={prevBasement}>‹</button>
              <button onClick={nextBasement}>›</button>
            </div>
          </div>
        </div>

        <div className="zigzag-content">
          <h3>BASEMENT WATERPROOFING</h3>
          <p>
          Basement waterproofing protects underground areas from dampness, leakage, and structural damage caused by soil moisture and groundwater. 
          It works by sealing cracks, applying waterproof membranes or coatings, and managing water through proper drainage systems. 
          This treatment is applied in residential basements, commercial buildings, parking areas, lift pits, and foundations to keep spaces dry, healthy, and structurally safe over the long term.
          </p>
        <h4>WORKING METHOD</h4>
            <ul className="method-icons">
                <li>🧐 Site inspection & moisture source identification</li>
                <li>🧹 Surface cleaning & crack preparation</li>
                <li>🧱 Crack sealing using chemical / cementitious compounds</li>
                <li>🛡️ Waterproofing membrane or coating application</li>
                <li>💧 Drainage support & water pressure control</li>
                <li>✅ Final leakage testing & protection</li>
            </ul>

          <Link to="/contact" className="service-btn">
            Enquiry for this Service
          </Link>
        </div>
      </div>

      {/* ================= SERVICE 4 (METHOD 3 – HEAT PROOFING) ================= */}
      <div className="zigzag-row reverse animate">
        <div className="zigzag-img">
          <div className="image-slider">
            <img
              src={heatImages[heatIndex]}
              alt="Heat Proofing / Thermal Coating"
            />
            <div className="slider-controls">
              <button onClick={prevHeat}>‹</button>
              <button onClick={nextHeat}>›</button>
            </div>
          </div>
        </div>

        <div className="zigzag-content">
          <h3>Heat Proofing / Thermal Coating</h3>
          <p>
            Heat proofing reduces roof heat and indoor temperature using advanced thermal coatings. 
            We apply trusted products such as Asian Paints Damp Proof, Sika chemicals, and other premium systems to reflect sunlight, 
            prevent heat-related cracks, improve comfort, extend roof life, and reduce electricity and cooling costs.
          </p>

         <h4>WORKING METHOD</h4>
            <ul className="method-icons">
                <li>🧹 Surface cleaning & dust removal</li>
                <li>🧱 Crack filling using polymer / cementitious compounds</li>
                <li>🧪 Primer application (Asian Paints / Sika compatible)</li>
                <li>🎨 Heat reflective thermal coating application</li>
                <li>🛡️ Multiple coat layering for durability</li>
                <li>✅ Final curing & temperature performance check</li>
            </ul>

          <Link to="/contact" className="service-btn">
            Enquiry for this Service
          </Link>
        </div>
      </div>

      {/* ================= SERVICE 5 (METHOD 3 – 3 IMAGES) ================= */}
        <div className="zigzag-row animate">

        {/* LEFT – IMAGE SLIDER */}
        <div className="zigzag-img">
            <div className="image-slider">
            <img
                src={service5Images[service5Index]}
                alt="Service 5 Waterproofing Work"
            />

            <div className="slider-controls">
                <button onClick={prevService5}>‹</button>
                <button onClick={nextService5}>›</button>
            </div>
            </div>
        </div>

        {/* RIGHT – CONTENT (UNCHANGED) */}
        <div className="zigzag-content">
            <h3>Industrial shed waterproofing</h3>
            <p>
            Industrial shed waterproofing prevents roof leakage, rust, and heat damage in metal and GI sheet roofs. 
            Applied on factory sheds, warehouses, and industrial buildings, it seals joints and fasteners, protects against heavy rain and sunlight, extends roof life, and improves indoor working conditions with low maintenance.
            </p>

            <h4>WORKING METHOD</h4>
                <ul className="method-icons">
                    <li>🔍 Roof inspection & leakage identification</li>
                    <li>🧹 Surface cleaning, rust removal & dust control</li>
                    <li>🧱 Crack, joint & fastener sealing</li>
                    <li>🧪 Primer application for strong bonding</li>
                    <li>🎨 Waterproofing / heat reflective coating application</li>
                    <li>🛡️ Multiple coat layering for durability</li>
                    <li>✅ Final leakage testing & quality check</li>
                </ul>

            <Link to="/contact" className="service-btn">
            Enquiry for this Service
            </Link>
        </div>

        </div>

      {/* ================= SERVICE 6 (METHOD 3 – 3 IMAGES) ================= */}
        <div className="zigzag-row reverse animate">

        {/* LEFT – IMAGE SLIDER */}
        <div className="zigzag-img">
            <div className="image-slider">
            <img
                src={service6Images[service6Index]}
                alt="Service 6 Waterproofing Work"
            />

            <div className="slider-controls">
                <button onClick={prevService6}>‹</button>
                <button onClick={nextService6}>›</button>
            </div>
            </div>
        </div>

        {/* RIGHT – CONTENT (UNCHANGED) */}
        <div className="zigzag-content">
            <h3> GI / PPGI Metal Roofing Sheet (Profile Sheet)</h3>
            <p>
            GI and PPGI metal roofing sheets are durable profile sheets used for industrial, commercial, and residential roofing. 
            Made from galvanized or color-coated steel, they provide excellent protection against rain, corrosion, and harsh weather. 
            These sheets are fixed over a structural framework using fasteners and sealants, ensuring strong water drainage and long service life.
             Commonly applied on factories, warehouses, sheds, parking areas, and commercial buildings, GI/PPGI roofing offers a cost-effective, low-maintenance, and long-lasting roofing solution.
            </p>

            <h4>WORKING METHOD</h4>
            <ul className="method-icons">
                <li>📐 Measurement & layout marking of roof area</li>
                <li>🧱 Installation of supporting structure / framework</li>
                <li>🔩 Fixing GI / PPGI profile sheets with fasteners</li>
                <li>🛡️ Sealing of joints, overlaps & screw points</li>
                <li>🌧️ Ensuring proper slope for water drainage</li>
                <li>✅ Final inspection for leakage & stability</li>
            </ul>

            <Link to="/contact" className="service-btn">
            Enquiry for this Service
            </Link>
        </div>

        </div>


      {/* ================= WARRANTY ================= */}
      <div className="warranty-box">
        ✅ Work Warranty Available on Selected Services
      </div>

    </div>
  );
}

export default Services;
