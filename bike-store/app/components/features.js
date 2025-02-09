'use client';
import '../styles/features.css';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const featureItems = [
  { id: 0, img: '/images/feature1.jpg', title: 'features.1.feature', description: 'features.1.description' },
  { id: 1, img: '/images/feature2.jpg', title: 'features.2.feature', description: 'features.2.description' },
  { id: 2, img: '/images/feature3.jpg', title: 'features.3.feature', description: "features.3.description" },
  { id: 3, img: '/images/feature4.jpg', title: 'features.4.feature', description: 'features.4.description' },
  { id: 4, img: '/images/feature5.jpg', title: 'features.5.feature', description: "features.5.description" },
  { id: 5, img: '/images/feature6.jpg', title: 'features.6.feature', description: 'features.6.description' },
  { id: 6, img: '/images/feature7.jpg', title: 'features.7.feature', description: 'features.7.description' },
  { id: 7, img: '/images/feature8.jpg', title: 'features.8.feature', description: 'features.8.description' },
];

export default function Features() {
  const { t } = useTranslation();
  const features = useMemo(() => featureItems, []);

  return (
    <section id="features" className="features-section">
      <h2 className="features-heading">{t('features.header')}</h2>
      <div className="features-container">
        {features.map((feature) => (
          <div key={feature.id} className="feature">
            <img src={feature.img} alt="Feature image" className="feature-icon" />
            <h3 className="feature-title">{t(feature.title)}</h3>
            <p className="feature-description">{t(feature.description)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}