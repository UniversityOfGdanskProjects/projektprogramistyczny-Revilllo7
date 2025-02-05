'use client';

import Link from 'next/link';

export default function TermsOfUse() {
    return (
        <div className='TermsOfUse'>
            <div className="policy-container">
                <h1>Terms of Use</h1>
                <p>Welcome to our bike store! By using this website, you agree to our terms.</p>
                <p>All purchases are subject to our policies and regulations.</p>
                <p>For questions, contact <a href="mailto:contact@bikestore.com">contact@bikestore.com</a>.</p>
                <Link href="/">Back to Home</Link>
            </div>
        </div>
    );
}
