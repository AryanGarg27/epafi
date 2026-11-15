const steps = [
  ['01', 'Add a contact', 'Bring in a new lead and note where you met, what they need, or what matters to them.'],
  ['02', 'Keep the thread', 'Write down the useful part of the conversation so you can pick it up with care.'],
  ['03', 'Choose the next move', 'Set a small follow-up and a date. Epafi keeps it visible until you are ready.'],
];

function HowItWorks() {
  return (
    <section className="how-section page-width" id="how-it-works" aria-labelledby="how-title">
      <div className="how-copy"><p className="eyebrow">A simple rhythm</p><h2 id="how-title">A calmer way to<br />keep in touch.</h2><p>Epafi gives the spaces between conversations a little structure, from first hello to the next thoughtful note.</p><a className="text-link" href="/workspace.html">See the workspace <span aria-hidden="true">→</span></a></div>
      <ol className="steps-list">
        {steps.map(([number, title, description]) => <li className="step-item" key={number}><span className="step-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><span className="step-arrow" aria-hidden="true">↗</span></li>)}
      </ol>
    </section>
  );
}

export default HowItWorks;
