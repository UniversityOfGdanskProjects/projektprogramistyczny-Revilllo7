'use client';
import { lazy, Suspense } from 'react';
import Header from './components/header.js';
import Prefrences from './components/prefrences.js';
import Hero from './components/hero.js';
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
      <Hero />
      <Suspense fallback={<Loading message="About is loading..." />}>
        <About />
      </Suspense>
      {/* <Suspense fallback={<Loading message="Features are loading..." />}>
        <Features />
      </Suspense> */}
      {/* <Suspense fallback={<Loading message="Testimonials initiating..." />}>
        <Testimonials />
      </Suspense> */}
      {/* <Suspense fallback={<Loading message="Gallery is biking home..." />}>
        <Gallery />
      </Suspense> */}
      {/* <Suspense fallback={<Loading message="Form is racing to you..." />}>
        <ContactForm />
      </Suspense> */}
      <Suspense fallback={<Loading message="Footer got on the pedal..." />}>
        <Footer />
      </Suspense>
    </div>
  );
}