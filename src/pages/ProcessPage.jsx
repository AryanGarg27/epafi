import HowItWorks from '../components/HowItWorks.jsx';

function ProcessPage() {
  return (
    <>
      <section className="page-intro page-width" aria-labelledby="page-title">
        <p className="eyebrow">How it works</p>
        <h1 id="page-title">A thoughtful follow-up<br />starts with a little context.</h1>
        <p className="page-intro-description">Epafi gives the spaces between conversations a simple shape — so you can be present when the time is right.</p>
      </section>
      <HowItWorks />
      <section className="process-close page-width"><span className="process-seal" aria-hidden="true"><i /><i /></span><div><p className="eyebrow">Keep the thread</p><h2>Small next steps.<br />More meaningful work.</h2></div><a className="button button-primary" href="/workspace.html">Explore the workspace <span aria-hidden="true">↗</span></a></section>
    </>
  );
}

export default ProcessPage;
