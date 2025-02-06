'use client';
import '../styles/privacypolicy.css';
import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <div className='PrivacyPolicy'>
            <div className="policy-container">
                <h1>Privacy Policy</h1>
                <p>This is the Privacy Policy for our bike store.</p>
                <p>We collect user data responsibly and do not share it with third parties.</p>
                <p>For more details, contact us at <a href="mailto:contact@bikestore.com">contact@bikestore.com</a>.</p>
                <Link href="/" className="back-link">Back to Home</Link>
            </div>
        </div>
    );
}
