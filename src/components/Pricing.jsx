import { useState } from 'react';

const plans = [
  {
    name: 'Solo', description: 'For independent designers finding a steadier rhythm.',
    monthly: 699, yearly: 599, annualTotal: 7188,
    features: ['Up to 100 contacts', 'Unlimited follow-up notes', 'A personal pipeline', 'One seat'],
  },
  {
    name: 'Studio', description: 'For a small team sharing more conversations.',
    monthly: 1999, yearly: 1699, annualTotal: 20388,
    features: ['Unlimited contacts', 'Everything in Solo', 'Up to 5 team members', 'Shared studio pipeline'],
  },
];

const formatPrice = (amount) => '₹' + amount.toLocaleString('en-IN');

function Pricing() {
  const [billing, setBilling] = useState('monthly');

  return (
    <section className="pricing-section" id="pricing" aria-labelledby="pricing-title">
      <div className="pricing-inner page-width">
        <div className="section-heading pricing-heading">
          <div><p className="eyebrow">Room to grow</p><h2 id="pricing-title">Simple pricing.<br />A little room to grow.</h2></div>
          <p>Start with the conversations you have. Choose more space when your studio needs it.</p>
        </div>
        <div className="billing-row"><span>Choose a billing rhythm</span><div className="billing-toggle" role="group" aria-label="Billing period">
          <button type="button" aria-pressed={billing === 'monthly'} onClick={() => setBilling('monthly')}>Monthly</button>
          <button type="button" aria-pressed={billing === 'yearly'} onClick={() => setBilling('yearly')}>Yearly <span>Lower rate</span></button>
        </div></div>
        <div className="plans-grid">
          {plans.map((plan) => {
            const yearly = billing === 'yearly';
            return <article className={`plan-card${plan.name === 'Studio' ? ' plan-card-studio' : ''}`} key={plan.name}>
              <div className="plan-topline"><span>{plan.name}</span><span>{plan.name === 'Solo' ? 'JUST YOU' : 'WORKING TOGETHER'}</span></div>
              <h3>{plan.description}</h3>
              <div className="plan-price"><strong>{formatPrice(yearly ? plan.yearly : plan.monthly)}</strong><span>/ month</span></div>
              <p className="plan-billing-note">{yearly ? formatPrice(plan.annualTotal) + ' billed yearly' : 'Billed monthly'}</p>
              <div className="plan-rule" />
              <p className="plan-features-label">INCLUDED</p>
              <ul>{plan.features.map((feature) => <li key={feature}><span className="check-mark" aria-hidden="true">✓</span>{feature}</li>)}</ul>
              <a className={plan.name === 'Studio' ? 'button button-primary plan-button' : 'button button-outline plan-button'} href={'/contact.html?plan=' + encodeURIComponent(plan.name) + '#request'}>Choose {plan.name} <span aria-hidden="true">↗</span></a>
            </article>;
          })}
        </div>
        <p className="pricing-demo-note">Demo pricing for this concept project. No payments are collected.</p>
      </div>
    </section>
  );
}

export default Pricing;
