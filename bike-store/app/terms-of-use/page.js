'use client';
import '../styles/termsofuse.css';
import Link from 'next/link';
import Footer from '../components/footer'
import Header from '../components/header'
import ContactForm from '../components/form'
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n.js";

export default function TermsOfUse() {
    return (
        <I18nextProvider i18n={i18n}>
            <Header />
            <div className='TermsOfUse'>
                <div className="policy-container">
                    <h1>Terms of Use</h1>
                    <p>Welcome to our bike store! By using this website, you agree to our terms.</p>
                    <p>All purchases are subject to our policies and regulations.</p>
                    <p>For questions, contact <a href="mailto:contact@bikestore.com">contact@bikestore.com</a>.</p>
                    <Link href="/">Back to Home</Link>
                </div>
            </div>
            <ContactForm />
            <Footer />
        </I18nextProvider>
    );
}
