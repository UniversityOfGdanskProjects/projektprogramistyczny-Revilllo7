'use client';
import '../styles/header.css';

const Header = () => {

  return (
    <header className="header" suppressHydrationWarning>
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <h1 className="motto">Ride the Future - Your Perfect Bike Awaits!</h1>
      <nav className="navigation">
        <ul>
          <li><a href="#about">About us</a></li>
          <li><a href="#features">Our bikes</a></li>
          <li><a href="#testimonials">Customer opinions</a></li>
          <li><a href="#contact-form">Contact us!</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;