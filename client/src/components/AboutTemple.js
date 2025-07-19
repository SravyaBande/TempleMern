import React from 'react';
import './AboutTemple.css'; 

const AboutTemple = () => {
  return (
    <section className="about-temple">
      <h2 className="section-title">About Temple</h2>
      <div className="about-content">
        <div className="image-column">
        <img src="/aboutpic.jpg" alt="Sree Peetam Temple" className="about-image" />
        <img src="/aboutpic2.jpg" alt="Temple Rituals" className="about-image-small" />
        </div>
        <div className="about-text">
          <p>
            Sree Peetam, situated in Kakinada, Andhra Pradesh, is a prominent spiritual center established by Sri Swami Paripoornananda Saraswati. Dedicated to the promotion of Sanatana Dharma, Sree Peetam has become a hub for devotion, spiritual knowledge, and cultural revival.
          </p>
          <p>
            Under the divine leadership of Swamiji, the temple conducts numerous spiritual activities including free **Kumkum Poojas** that empower devotees, especially women, to connect with the divine feminine energy.
          </p>
          <p>
            One of the most significant contributions of Sree Peetam is the initiation of the **Maha Sakti Yagam** in 2023 — a grand spiritual event performed with intense Vedic rituals to invoke universal peace, harmony, and empowerment through Devi worship. Thousands of devotees participate each year, experiencing deep spiritual transformation.
          </p>
          <p>
            With continuous guidance from Swamiji, Sree Peetam continues to inspire individuals towards dharma, service, and inner awakening.
          </p>
        
         <p>
            Empowering Devotion Through Dharma and Divine Energy" is not just a motto—it is the soul of Sree Peetam. Under the divine guidance of Sri Swami Paripoornananda Saraswati, Sree Peetam stands as a spiritual lighthouse, uplifting lives through the eternal principles of Sanatana Dharma. Every prayer, pooja, and ritual is crafted to awaken the divine feminine within, fostering inner strength, peace, and purpose.
         </p>

         <p>
            Through transformative events like the Maha Sakti Yagam and free Kumkum Poojas, devotees are not only blessed—they are empowered to live a life of dharma, service, and spiritual awareness. Sree Peetam continues to be a sacred space where tradition meets transformation, guiding countless souls on their path to devotion and self-realization.
         </p>

        </div>
      </div>
    </section>
  );
};

export default AboutTemple;
