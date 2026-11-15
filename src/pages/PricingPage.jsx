import Pricing from '../components/Pricing.jsx';

function PricingPage() {
  return (
    <>
      <section className="page-intro page-width" aria-labelledby="page-title"><p className="eyebrow">Plans that keep it simple</p><h1 id="page-title">Start with what you need.<br />Leave room for more.</h1><p className="page-intro-description">Choose a comfortable place to begin. The figures below are illustrative concept pricing, with no payment flow attached.</p></section>
      <Pricing />
    </>
  );
}

export default PricingPage;
