'use client';
import { useState, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/testimonials.css';

const Testimonials = () => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);

  const testimonials = useMemo(() => [
    { id: 0, name: 'Szymon Lach', rating: '8/10', photo: '/images/rating1.png', comment: 'Yyyy, very typical modern design of bikes' },
    { id: 1, name: 'Zofia Kolatowska', rating: '8/10', photo: '/images/rating2.png', comment: 'Very demure site! Needs more Ace Atorney bike merch' },
    { id: 2, name: 'Oskar Choja', rating: '7/10', photo: '/images/rating3.jpeg', comment: 'I like the gradient of the bikes' },
    { id: 3, name: 'Bartosz Kąkol', rating: '10/10', photo: '/images/rating4.png', comment: 'Good experience.' },
    { id: 4, name: 'Bartosz Stromski', rating: '1/10', photo: '/images/rating5.png', comment: 'i hate bikes...' },
  ], []);

  const moreTestimonials = useMemo(() => [
    { id: 5, name: 'Wojtek Gdański', rating: '6/10', photo: '/images/rating6.png', comment: 'Average service.' },
    { id: 6, name: 'Michał Ryduchowski', rating: '7/10', photo: '/images/rating7.gif', comment: 'ok' },
    { id: 7, name: 'Szymon Ligenza', rating: '10/10', photo: '/images/rating8.png', comment: 'Very ni-ce bikes' },
    { id: 8, name: 'Mateusz Samsel', rating: '3/10', photo: '/images/rating9.png', comment: 'Outstanding!' },
    { id: 9, name: 'Guzio', rating: '9/10', photo: '/images/rating10.png', comment: 'Brakuje-przerzutek sterowanych gestem' },
    { id: 10, name: 'Bicycle Hater', rating: '9/10', photo: '/images/rating11.jpg', comment: "Wait, wrong click, how do I edit????" },
    { id: 11, name: 'Marta Rzeszótko', rating: '6/10', photo: '/images/rating12.jpeg', comment: 'Average service.' },
    { id: 12, name: 'Hugh McCock', rating: '7/10', photo: '/images/rating13.png', comment: "please come home, we're worried" },
    { id: 13, name: 'Nicola Aniki', rating: '4/10', photo: '/images/rating14.jpeg', comment: 'I hate you' },
    { id: 14, name: 'Hellyn Timis', rating: '3/10', photo: '/images/rating15.png', comment: 'Foarte bine!' },
    { id: 15, name: 'Aph', rating: '4/10', photo: '/images/rating16.jpg', comment: '👌' },
    { id: 16, name: 'Bicycle Hater', rating: '1/10', photo: '/images/rating11.jpg', comment: "Just added a new one" }
  ], []);

  const handleShowMore = useCallback(() => {
    setShowMore(true);
  }, []);
  
  const handleCloseModal = useCallback(() => {
    setShowMore(false);
  }, []);
  
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-wrapper">
        <h2 className="testimonials-heading">{t('testimonials.header')}</h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <img src={testimonial.photo} alt={testimonial.name} className="testimonial-image" />
                <div>
                  <p className="testimonial-name">{testimonial.name}</p>
                  <p className="testimonial-rating">{testimonial.rating}</p>
                </div>
              </div>
              <p className="testimonial-text">
                {testimonial.comment}
              </p>
            </div>
          ))}
        </div>
        <button className="read-more-button" onClick={handleShowMore}>
          {t('testimonials.more')}
        </button>
      </div>

      {showMore && (
        <div className="testi-modal-overlay" onClick={handleCloseModal}>
          <div className="testi-modal" onClick={(e) => e.stopPropagation()}>
            <h3>{t('More Testimonials')}</h3>
            <div className="testi-modal-content">
              {moreTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="testi-modal-testimonial">
                  <div className="testimodal-header">
                    <img src={testimonial.photo} alt={testimonial.name} className="testi-modal-image" />
                    <div>
                      <p className="testi-modal-name">{testimonial.name}</p>
                      <p className="testi-modal-rating">{testimonial.rating}</p>
                    </div>
                  </div>
                  <p className="testi-modal-text">
                    {testimonial.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;