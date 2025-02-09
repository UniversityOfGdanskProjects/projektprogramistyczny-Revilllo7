'use client';
import "../styles/social.css";
import { useTranslation } from "react-i18next";

const Social = ({ url, title }) => {
    const { t } = useTranslation();

    const shareOptions = [
        {
            name: 'Facebook',
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            icon: '📘',
        },
        {
            name: 'Twitter',
            url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
            icon: '🐦',
        },
        {
            name: 'LinkedIn',
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            icon: '🔗',
        },
        {
            name: 'WhatsApp',
            url: `https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + url)}`,
            icon: '💬',
        },
    ];

    return (
        <div className="social-container">
            <h3>{t('social.header')}</h3>
            <div>
            {shareOptions.map((platform) => (
                <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <span className="social-icon">{platform.icon}</span>
                    {(platform.name)}
                </a>
            ))}
            </div>
        </div>
    );
};

export default Social;
