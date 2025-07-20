import React, { useEffect, useRef } from 'react';
import '../assets/styles/Contact.scss';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';

function Contact() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    if (subtitleRef.current) {
      observer.observe(subtitleRef.current);
    }
    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: "Address",
      info: "Pune, Maharashtra, India",
      link: "https://goo.gl/maps/YourAddress"
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      title: "Phone",
      info: " 7385880641",
      link: "tel:7385880641"
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: "Email",
      info: "vshriram2926work@gmail.com",
      link: "mailto:vshriram2926work@gmail.com"
    },
    {
      icon: <DownloadIcon sx={{ fontSize: 40 }} />,
      title: "Resume",
      info: "Download CV",
      link: "/CV.pdf"
    }
  ];

  return (
    <div id="contact">
      <div className="section-title-container">
        <h2 ref={titleRef} className="section-title">Contact Me</h2>
        <div className="large-background-text">Contact Me</div>
        <p ref={subtitleRef} className="subtitle">Below are the details to reach out to me!</p>
      </div>
      <div className="items-container">
        <div ref={cardsRef} className="contact-info-grid fade-in">
          {contactInfo.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noreferrer" 
              className="contact-card glass"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="icon-wrapper">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.info}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;