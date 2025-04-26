import PhoneInput from 'react-phone-input-2';
import { useState } from 'react';
import "../styles/contactModal.css";
import img from "../assets/images/contact_img.png";
import 'react-phone-input-2/lib/style.css';

function ContactModal({ isOpen, onClose }) {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [subscribe, setSubscribe] = useState(false);
  const [selectedService, setSelectedService] = useState('Language Services');
  const [loading, setLoading] = useState(false);

  const services = [
    "Language Services",
    "Graphics & Design",
    "Technology Solutions",
    "Marketing & Advertising",
    "Consulting Services",
    "IT & Software Development"
  ];

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert('Invalid email address');
      return;
    }
    if (phone.length < 8) {
      alert('Invalid phone number');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://test.ezworks.ai/form-api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          country_code: "US",
          phone_no: phone,
          email,
          service: [selectedService],
          message,
          promotion: subscribe
        })
      });

      const data = await response.json();
      console.log('Success:', data);
      alert('Form submitted successfully!');
      onClose();
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit form.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Left Section */}
        <div className="modal-left">
          <h2>Send us a brief</h2>
          <p>Our team will get in touch with you within 10 minutes!</p>
          <div className="modal-image">
            <img src={img} alt="Contact" />
          </div>
        </div>

        {/* Right Section */}
        <div className="modal-right">
          <button className="modal-close-button" onClick={onClose}>×</button>
          <form className="modal-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <PhoneInput
              country="us"
              value={phone}
              onChange={setPhone}
              inputStyle={{ width: '100%' }}
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              required
            >
              {services.map((service, idx) => (
                <option key={idx} value={service}>{service}</option>
              ))}
            </select>

            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit" className="modal-submit-button" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
