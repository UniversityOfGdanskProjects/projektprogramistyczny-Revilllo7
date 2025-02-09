'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import '../styles/footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="contact-info">
        <p>{t('footer.contact')}: contact@bikestore.com</p>
        <p>{t('footer.phone')}: +123 456 789</p>
      </div>
      <div className="social">
        <a href="https://facebook.com" target="_blank" aria-label={t('footer.aria.facebook')}>
          <img src="/images/facebook.png" alt="Facebook" />
        </a>
        <a href="https://instagram.com" target="_blank" aria-label={t('footer.aria.instagram!')}>
          <img src="/images/instagram.png" alt="Instagram"/>
        </a>
        <a href="https://twitter.com" target="_blank" aria-label={t('footer.aria.x')}>
          <img src="/images/x.png" alt="Twitter" />
        </a>
        <a href="https://linktr.ee/miodex" id="special" target="_blank" aria-label={t('footer.aria.linktree')}>
          <img src="/images/linktree.png" alt="Linktree" />
        </a>
      </div>
      <div className="legal">
        <Link href="/privacy-policy">{t('footer.policy')}</Link>
        <Link href="/terms-of-use">{t('footer.terms')}</Link>
      </div>
    </footer>
  );
};

export default Footer;