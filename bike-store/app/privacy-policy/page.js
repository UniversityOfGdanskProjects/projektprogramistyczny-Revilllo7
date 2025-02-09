'use client';
import '../styles/privacypolicy.css';
import Link from 'next/link';
import Footer from '../components/footer'
import Header from '../components/header'
import ContactForm from '../components/form'
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n.js";
import { t } from 'i18next';

export default function PrivacyPolicy() {
    return (
        <I18nextProvider i18n={i18n}>
            <Header />
            <div className='PrivacyPolicy'>
                <div className="policy-container">
                    <h1>{t('privacy.header')}</h1>
                    <p>{t('privacy.policy')}</p>
                    <p>{t('privacy.data')}</p>
                    <p>{t('privacy.details')} <a href="mailto:contact@bikestore.com">contact@bikestore.com</a>.</p>
                    <Link href="/" className="back-link">{t('privacy.back')}</Link>
                </div>
            </div>
            <ContactForm />
            <Footer />
        </I18nextProvider>
    );
}
