'use client';
import { useRef, useLayoutEffect } from 'react';
import '../styles/gallery.css';

const Gallery = () => {
    const imagesRef = useRef([]);

    useLayoutEffect(() => {
        imagesRef.current.forEach((img) => {
            img.style.opacity = '1';
        });
    }, []);

    return (
        <div className="gallery">
            <h2 className="gallery-heading">Our Gallery</h2>
            {[...Array(11)].map((_, index) => (
                <img
                    key={index}
                    ref={(el) => (imagesRef.current[index] = el)}
                    src={`images/gallery${index}.png`}
                    alt={`gallery pic${index}`}
                    style={{ opacity: 0, transition: 'opacity 0.5s ease-in' }}
                />
            ))}
        </div>
    );
};

export default Gallery;