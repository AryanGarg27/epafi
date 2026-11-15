import { useEffect, useRef, useState } from 'react';

function ContactForm() {
  const queryPlan = new URLSearchParams(window.location.search).get('plan');
  const [plan, setPlan] = useState(queryPlan === 'Studio' ? 'Studio' : 'Solo');
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const nameRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === '#request') nameRef.current?.focus({ preventScroll: true });
  }, []);

  const update = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setSuccess('');
  };

  const submit = (event) => {
    event.preventDefault();
    const emailInput = event.currentTarget.elements.email;
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Please enter your full name.';
    if (!values.email.trim()) nextErrors.email = 'Please enter your work email.';
    else if (emailInput.validity.typeMismatch) nextErrors.email = 'Enter an email address in a valid format.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      event.currentTarget.elements[Object.keys(nextErrors)[0]]?.focus();
      return;
    }
    setSuccess('Thanks, ' + values.name.trim().split(/\s+/)[0] + '. Your demo request is complete. This is a sample form, so no information was sent.');
  };

  const errorProps = (field) => ({
    'aria-invalid': Boolean(errors[field]),
    'aria-describedby': errors[field] ? field + '-error' : undefined,
  });

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-inner page-width">
        <div className="contact-copy">
          <p className="eyebrow">A closer look</p>
          <h2 id="contact-title">Make room for<br />good conversations.</h2>
          <p>Take a closer look at Epafi. Leave your details to try the sample demo request flow.</p>
          <p className="contact-address">Questions? <span>hello@epafi.example</span><small>Illustrative contact address, not a functioning support channel.</small></p>
        </div>
        <form className="demo-form" id="request" onSubmit={submit} noValidate>
          <div className="form-heading"><h3>Request a demo</h3><span>YOUR DETAILS</span></div>
          <div className="field-row">
            <div className="form-field"><label htmlFor="full-name">Full name <span>*</span></label><input ref={nameRef} id="full-name" name="name" autoComplete="name" required aria-required="true" value={values.name} onChange={update} {...errorProps('name')} />{errors.name && <span className="field-error" id="name-error">{errors.name}</span>}</div>
            <div className="form-field"><label htmlFor="work-email">Work email <span>*</span></label><input id="work-email" name="email" type="email" autoComplete="email" required aria-required="true" value={values.email} onChange={update} {...errorProps('email')} />{errors.email && <span className="field-error" id="email-error">{errors.email}</span>}</div>
          </div>
          <div className="form-field"><label htmlFor="plan-select">Plan to explore</label><select id="plan-select" name="plan" value={plan} onChange={(event) => setPlan(event.target.value)}><option>Solo</option><option>Studio</option></select></div>
          <div className="form-field"><label htmlFor="message">Anything you’d like us to know <span className="optional">Optional</span></label><textarea id="message" name="message" rows="3" value={values.message} onChange={update} /></div>
          <div className="form-bottom"><button className="button button-primary" type="submit">Request a demo <span aria-hidden="true">↗</span></button><p>Demo form only. Your details are not sent or stored.</p></div>
          {success && <p className="form-success" role="status" tabIndex="-1">{success}</p>}
          <div className="sr-only" aria-live="polite">{Object.values(errors).filter(Boolean).join(' ')}</div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
