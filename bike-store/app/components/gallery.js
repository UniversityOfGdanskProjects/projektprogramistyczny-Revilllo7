'use client';
import { useRef, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/gallery.css';

const Gallery = () => {
    const { t } = useTranslation();
    const imagesRef = useRef([]);

    useLayoutEffect(() => {
        imagesRef.current.forEach((img) => {
            img.style.opacity = '1';
        });
    }, []);

    return (
        <div className="gallery">
            <h2 className="gallery-heading">{t('gallery.header')}</h2>
            {[...Array(11)].map((_, index) => (
                <img
                    key={index}
                    ref={(el) => (imagesRef.current[index] = el)}
                    src={`images/gallery${index}.png`}
                    alt={`gallery.${index}`}
                    style={{ opacity: 0, transition: 'opacity 0.5s ease-in' }}
                />
            ))}
        </div>
    );
};

export default Gallery;