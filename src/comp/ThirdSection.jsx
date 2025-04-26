import React from 'react';
import { FaStar, FaClock, FaBolt, FaShieldAlt } from 'react-icons/fa';
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import "../styles/ThirdSection.css";

const featureCards = [
  { icon: <FaStar size={30} />, title: 'Consistently High Quality', description: 'We maintain the highest standards for our services.' },
  { icon: <FaClock size={30} />, title: '24/7 Availability', description: 'Our team is available around the clock to support you.' },
  { icon: <FaBolt size={30} />, title: 'Lightning Fast', description: 'We pride ourselves on rapid execution and delivery.' },
  { icon: <FaShieldAlt size={30} />, title: 'Secure Information', description: 'Your data is safe and protected with ISO standards.' },
];

const timelineSteps = [
  { time: 10, text: 'Receive Confirmation Email' },
  { time: 20, text: 'Experts Allocated for Assignment' },
  { time: 30, text: 'Work Starts' },
];

const ThirdSection = () => (
  <section className="third-section">
    <h2 className="third-section-title">What makes us so special?</h2>
    <div className="third-section-content">
      
      <div className="timeline-container">
        <h3 className="timeline-heading">Work Starts Within 30 Minutes</h3>
        <h3 className="timeline-heading">Available Round the Clock</h3>
        <div className="timeline">
          {timelineSteps.map((step, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-dot"></div>
              <div className="timeline-time">
                <h2>{step.time}</h2>
                <span>minutes</span>
              </div>
              <div className="timeline-text">{step.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="features-container">
        <div className="features-grid">
          {featureCards.map((card, idx) => (
            <div className="feature-card" key={idx}>
              <div className="feature-card-inner">
                <div className="feature-card-front">
                  <div className="card-header">
                    {card.icon}
                    <HiMiniArrowTopRightOnSquare className="external-link-icon" />
                  </div>
                  <h3 className="card-title">{card.title}</h3>
                </div>
                <div className="feature-card-back">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default ThirdSection;
