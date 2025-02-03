'use client';
import '../styles/features.css';
import { useMemo } from 'react';

const featureItems = [
  { id: 0, img: '/images/feature1.jpg', title: 'Carbon fibre enhanched frame', description: 'Ensures light-weight while bringing NASA-grade durability' },
  { id: 1, img: '/images/feature2.jpg', title: 'Nitrogen filled pressurised air mix', description: 'Helps slow down the air leak when tube breaks' },
  { id: 2, img: '/images/feature3.jpg', title: 'WiFi/Bluetooth connected shocks', description: "Uses WiFi or Bluetooth to adjust the shock absorbers based on your phone's gps" },
  { id: 3, img: '/images/feature4.jpg', title: 'Anti-Car drive over system', description: 'Loud speakers blast Mayan death whistle sounds at upcoming cars to get them to slow down' },
  { id: 4, img: '/images/feature5.jpg', title: 'Sharp spokes', description: "Ensures user's safety by being able to cut items, protecting from sticks or small animals" },
  { id: 5, img: '/images/feature6.jpg', title: 'Buttocks cooling system', description: 'Specially engineered holes in the saddle to optimise air flow for cooling effects' },
  { id: 6, img: '/images/feature7.jpg', title: 'Scream powered breaking system', description: 'When detecting human screams above 100dB, breaks activate, halting the bike completely at 130dB' },
  { id: 7, img: '/images/feature8.jpg', title: 'Phone charging dynamo', description: 'Special system converting kinetic energy to electricity to charge your phone' },
];

const Features = () => {
  const features = useMemo(() => featureItems, []);

  return (
    <section id="features" className="features-section">
      <h2 className="features-heading">What our bikes feature</h2>
      <div className="features-container">
        {features.map((feature) => (
          <div key={feature.id} className="feature">
            <img src={feature.img} alt="Feature image" className="feature-icon" />
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;