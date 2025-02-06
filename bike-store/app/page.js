'use client';
import { lazy, Suspense } from 'react';
import Header from './components/header.js';
import Preference from './components/preferences.js';
import Hero from './components/hero.js';
import Social from './components/social.js';
const About = lazy(() => import('./components/about.js'));
const Features = lazy(() => import('./components/features.js'));
const Testimonials = lazy(() => import('./components/testimonials.js'));
const Gallery = lazy(() => import('./components/gallery.js'));
const ContactForm = lazy(() => import('./components/form.js'));
const Footer = lazy(() => import('./components/footer.js'));

function Loading({ message }) {
  return <p>{message}</p>;
}

export default function Home() {
  return (
    <div>
      <Header />
      <Preference />
      <Hero />
      <Suspense fallback={<Loading message="About is loading..." />}>
        <About />
      </Suspense>
      <Suspense fallback={<Loading message="Features are loading..." />}>
        <Features />
      </Suspense>
      <Suspense fallback={<Loading message="Testimonials initiating..." />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<Loading message="Gallery is biking home..." />}>
        <Gallery />
      </Suspense>
      <Suspense fallback={<Loading message="Form is racing to you..." />}>
        <ContactForm />
      </Suspense>
      <Suspense fallback={<Loading message="Social is sharing..." />}>
        <Social />
      </Suspense>
      <Suspense fallback={<Loading message="Footer got on the pedal..." />}>
        <Footer />
      </Suspense>
    </div>
  );
}