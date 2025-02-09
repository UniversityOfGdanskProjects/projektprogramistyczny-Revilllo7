'use client';
import '../styles/termsofuse.css';
import Link from 'next/link';
import Footer from '../components/footer'
import Header from '../components/header'
import ContactForm from '../components/form'
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n.js";
import { t } from 'i18next';

export default function TermsOfUse() {
    return (
        <I18nextProvider i18n={i18n}>
            <Header />
            <div className='TermsOfUse'>
                <div className="policy-container">
                    <h1>{t('terms.header')}</h1>
                    <p>{t('terms.terms')}</p>
                    <p>{t('terms.purchases')}</p>
                    <p>{t('terms.questions')}<a href="mailto:contact@bikestore.com">contact@bikestore.com</a>.</p>
                    <Link href="/">{t('terms.back')}</Link>
                </div>
            </div>
            <ContactForm />
            <Footer />
        </I18nextProvider>
    );
}
