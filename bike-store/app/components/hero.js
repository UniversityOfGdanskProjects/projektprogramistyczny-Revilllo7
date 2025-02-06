'use client';
import '../styles/hero.css';
import { useState } from 'react';

const Hero = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('/api/newsletter', { // FIXED: Corrected API path
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            setMessage(data.message || 'Something went wrong');
        } catch (error) {
            setMessage('Błąd podczas zapisywania. Spróbuj ponownie.');
        }
    };

    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <h1 className="hero-heading">Get yours now!</h1>
                <p className="hero-subheading">Sign up to our newsletter to know when our newest bikes are available</p>
                <form className="newsletter-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="newsletter-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className="newsletter-button">
                        Sign up!
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
