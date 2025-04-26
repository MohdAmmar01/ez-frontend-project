import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/FirstSection.css';
import ContactModal from "./ContactModal";

function FirstSection() {
  const [showModal, setShowModal] = useState(false);

  const capabilities = [
    { id: 1, title: "Service Process", services: ["Legal Resources", "Translation Devices", "Social Media"] },
    { id: 2, title: "Presentation Design", services: ["Flipping & Formatting", "Slide Design", "Report Design", "Animated Presentation", "Interactive Presentation"] },
    { id: 3, title: "Graphics", services: ["Graphic Design", "HTML Design", "UI/UX Design"] },
    { id: 4, title: "Marketing", services: ["SEO", "Social Campaigns", "Email Marketing"] },
    { id: 5, title: "Business Strategy", services: ["Consulting", "Operations", "Finance Planning"] },
    { id: 6, title: "Technology Solutions", services: ["Web Apps", "Mobile Apps", "AI Services"] },
    { id: 7, title: "Support Services", services: ["Customer Care", "Tech Support", "Knowledge Base"] },
  ];

  return (
    <section className="first-section">
      {/* Hero */}
      <div className="hero-content">
        <h2 className="hero-title">70+ Offerings that allow you to Focus on your core tasks</h2>
        <div className="hero-service-lines">
          <span className="service-line-light">BACK-OFFICE & ADMINISTRATIVE</span>
          <span className="service-line-bold">GRAPHICS & VIDEO</span>
          <span className="service-line-light">LANGUAGE & COMMUNICATION</span>
        </div>
        <p className="hero-description">
          Lorem ipsum dolor sit amet. In accusantium quia aut recusandae eligendi est repudiandae molestiae
        </p>
      </div>

      {/* Services Carousel */}
      <div className="services-carousel">
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView={2.8}
          loop
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1.5,
            slideShadows: false,
          }}
        >
          {capabilities.map((cap) => (
            <SwiperSlide key={cap.id}>
              <div className="service-card">
                <h3 className="card-title">{cap.title}</h3>
                <div className="card-services">
                  {cap.services.map((service, index) => (
                    <div key={index} className="service-item">
                      <div className="icon-placeholder"></div>
                      <p>{service}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Contact CTA Section */}
      <div className="contact-cta">
        <h2 className="contact-heading">Send us your requirements, and get a response</h2>
        <h2 className="contact-heading">within 10 minutes</h2>
        <p className="contact-description">That's how we keep ourselves Faster than the Fastest</p>
        <button className="contact-button" onClick={() => setShowModal(true)}>GET IN TOUCH</button>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}

export default FirstSection;
