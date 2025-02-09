'use client';
import '../styles/header.css';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header" suppressHydrationWarning>
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <h1 className="motto">{t('header.motto')}</h1>
      <nav className="navigation">
        <ul>
          <li><a href="#about">{t('header.about')}</a></li>
          <li><a href="#features">{t('header.features')}</a></li>
          <li><a href="#testimonials">{t('header.testimonials')}</a></li>
          <li><a href="#contact-form">{t('header.contact')}</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;