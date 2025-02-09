'use client';
import '../styles/hero.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            setMessage(data.message || t('hero.email.wrong'));
        } catch (error) {
            setMessage(t('hero.email.error'));
        }
    };

    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <h1 className="hero-heading">{t('hero.header')}</h1>
                <p className="hero-subheading">{t('hero.newsletter')}</p>
                <form className="newsletter-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder={t('hero.email.enter')}
                        className="newsletter-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className="newsletter-button">
                        {t('hero.button')}
                    </button>
                </form>
                {message && <p className="message">{message}</p>}
            </div>
            <div className="hero-image">
                <img src="/images/hero.jpg" alt="Hero" />
            </div>
        </section>
    );
};

export default Hero;
