import ProductPreview from '../components/ProductPreview.jsx';
import Features from '../components/Features.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import Pricing from '../components/Pricing.jsx';
import ContactForm from '../components/ContactForm.jsx';

function HomePage() {
  return (
    <>
      <section className="hero page-width" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">[ FOR INDEPENDENT STUDIOS ]</p>
          <h1 id="hero-title">More good work. <span>Fewer loose ends.</span></h1>
          <p className="hero-description">One calm place for the people you meet, the conversations you have, and the next step you mean to take.</p>
          <div className="hero-actions"><a className="button button-primary" href="/contact.html#request">Try Epafi <span aria-hidden="true">↗</span></a><a className="text-link" href="/process.html">See how it works <span aria-hidden="true">→</span></a></div>
          <p className="hero-note">Simple plans. No credit card required.</p>
        </div>
        <div className="hero-visual">
          <ProductPreview />
          <p className="preview-caption"><span className="preview-dot" aria-hidden="true" />Interactive sample workspace <span>· changes stay on this page</span></p>
        </div>
      </section>
      <Features />
      <HowItWorks />
      <Pricing />
      <ContactForm />
    </>
  );
}

export default HomePage;
