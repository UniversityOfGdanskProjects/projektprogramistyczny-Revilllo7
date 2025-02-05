'use client';
import Link from 'next/link';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>Contact us at: contact@bikestore.com</p>
        <p>Phone: +123 456 789</p>
      </div>
      <div className="social">
        <a href="https://facebook.com" target="_blank" aria-label='Go to our Facebook page!'>
          <img src="/images/facebook.png" alt="Facebook" />
        </a>
        <a href="https://instagram.com" target="_blank" aria-label='Visit our Instagram!'>
          <img src="/images/instagram.png" alt="Instagram"/>
        </a>
        <a href="https://twitter.com" target="_blank" aria-label='Follow us on X!'>
          <img src="/images/x.png" alt="Twitter" />
        </a>
        <a href="https://linktr.ee/miodex" id="special" target="_blank" aria-label='More of us on Linktree!'>
          <img src="/images/linktree.png" alt="Linktree" />
        </a>
      </div>
      <div className="legal">
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-use">Terms of Use</Link>
      </div>
    </footer>
  );
};

export default Footer;