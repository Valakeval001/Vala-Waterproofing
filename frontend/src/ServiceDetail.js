import { useParams } from "react-router-dom";
import servicesData from "./servicesData";
import { useState } from "react";
import "./style.css";

function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);
  const [index, setIndex] = useState(0);

  if (!service) return <h2>Service Not Found</h2>;

  return (
    <div className="page">

      {/* TOP BANNER */}
      <div className="services-banner">
        <h1>SERVICES</h1>
      </div>

      <div className="service-detail">

        {/* LEFT CONTENT */}
        <div className="service-text">
          <h2>{service.title}</h2>

          <div className="tabs">
            <span className="active">ROOFING – INSTALLATION</span>
            <span>SERVICES INCLUDE</span>
          </div>

          <p>{service.description}</p>

          <ul>
            {service.includes.map((item, i) => (
              <li key={i}>✔ {item}</li>
            ))}
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="service-image">
          <img src={service.images[index]} alt={service.title} />

          <div className="slider-btns">
            <button onClick={() => setIndex((index + service.images.length - 1) % service.images.length)}>
              prev
            </button>
            <button onClick={() => setIndex((index + 1) % service.images.length)}>
              next
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default ServiceDetail;
