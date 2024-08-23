import { useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null); // To store the status of the submission

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields before sending
    if (!name || !email || !message) {
      setStatus({ success: false, message: 'Please fill in all fields.' });
      return;
    }

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_0j6tocn';
    const templateId = 'template_46ogvkf';
    const publicKey = 'fEZm9WFJC3iTFPfvz';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_firstname: name,
      from_email: email,
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
        setStatus({ success: true, message: 'Email sent successfully!' });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setStatus({ success: false, message: 'Failed to send email. Please try again later.' });
      });
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img
                  className={`animate__animated ${isVisible ? "zoom-in" : "zoom-out"}`}
                  src={contactImg}
                  alt="Contact Us"
                />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  {/* Display the Alert component if status is set */}
                  {status && (
                    <Alert
                      variant={status.success ? "success" : "danger"}
                      onClose={() => setStatus(null)}
                      dismissible
                    >
                      {status.message}
                    </Alert>
                  )}
                  <form className="contact-card" onSubmit={handleSubmit}>
                    <h2>Get In Touch</h2>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          placeholder="Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          placeholder="Message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <button type="submit" disabled={!name || !email || !message}>Send Email</button>
                      </Col>
                    </Row>
                  </form>
                  <br />
                  <div className="contact-card1">
                    <h5><i class="fa-solid fa-phone"></i>Phone: 070-4110950</h5>
                    <h5><i class="fa-solid fa-envelope"></i>Email: surathc004@gmail.com</h5>
                  </div>
                </div>}

            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
