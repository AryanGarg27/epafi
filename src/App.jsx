import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AdminDemo from './components/AdminDemo.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import ProcessPage from './pages/ProcessPage.jsx';
import PricingPage from './pages/PricingPage.jsx';
import StudioPage from './pages/StudioPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import { useEffect, useLayoutEffect, useState } from 'react';

const pages = {
  home: <HomePage />,
  workspace: <ProductPage />,
  process: <ProcessPage />,
  pricing: <PricingPage />,
  studio: <StudioPage />,
  contact: <ContactPage />,
};

function App() {
  const [adminOpen, setAdminOpen] = useState(false);
  const page = document.body.dataset.page || 'home';

  useLayoutEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const sections = [...document.querySelectorAll('main > section:not(.hero)')];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });

    sections.forEach((section) => {
      section.classList.add('reveal-section');
      observer.observe(section);
    });

    const revealFocusedSection = (event) => {
      const section = event.target.closest('main > section.reveal-section');
      if (!section) return;
      section.classList.add('is-visible');
      observer.unobserve(section);
    };
    document.addEventListener('focusin', revealFocusedSection);

    return () => {
      observer.disconnect();
      document.removeEventListener('focusin', revealFocusedSection);
      sections.forEach((section) => section.classList.remove('reveal-section', 'is-visible'));
    };
  }, [page]);

  useEffect(() => {
    if (!window.location.hash) return undefined;
    const targetId = decodeURIComponent(window.location.hash.slice(1));
    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(targetId);
      if (!target) return;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ block: 'start', behavior: reduceMotion ? 'auto' : 'smooth' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [page]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header page={page} onAdmin={() => setAdminOpen(true)} />
      <main id="main">{pages[page] || pages.home}</main>
      <Footer onAdmin={() => setAdminOpen(true)} />
      <AdminDemo open={adminOpen} onClose={() => setAdminOpen(false)} />
    </>
  );
}

export default App;
