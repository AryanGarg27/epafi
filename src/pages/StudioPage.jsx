import { BrandMark } from '../components/Header.jsx';

const principles = [
  ['Remember the person', 'A useful workspace begins with the relationship, not another list of tasks.'],
  ['Keep the next step small', 'A gentle reminder is easier to act on when its context is already close.'],
  ['Make space for the craft', 'A little structure should support the work, not take it over.'],
];

function StudioPage() {
  return (
    <>
      <section className="page-intro page-width" aria-labelledby="page-title"><p className="eyebrow">A note from the studio</p><h1 id="page-title">Independent work runs<br />on good relationships.</h1><p className="page-intro-description">Epafi is a fictional product idea for the thoughtful follow-through that helps those relationships grow.</p></section>
      <section className="studio-story page-width" aria-labelledby="studio-story-title">
        <div className="studio-story-aside"><span className="studio-mark" aria-hidden="true"><BrandMark /></span><span>THE THOUGHT BEHIND EPAFI</span></div>
        <div className="studio-story-copy"><h2 id="studio-story-title">A name for staying in touch.</h2><p>Epafi is written επαφή in Greek and means “contact” — the point where people meet, speak, and stay connected. We chose it for a product about the human thread behind independent work.</p><p>The idea is simple: keep the useful context nearby, make the next step easy to find, and leave more of the day for making good things.</p><a className="text-link" href="/workspace.html">Take a look around <span aria-hidden="true">→</span></a></div>
      </section>
      <section className="studio-principles">
        <div className="studio-principles-inner page-width"><div className="studio-principles-heading"><p className="eyebrow">A few things we believe</p><h2>Calm can still<br />be capable.</h2></div><div className="studio-principles-list">{principles.map(([title, description], index) => <article className="studio-principle" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div>
      </section>
      <section className="studio-end page-width"><p>One clear place to keep the conversation moving.</p><a className="button button-primary" href="/contact.html#request">Try the sample <span aria-hidden="true">↗</span></a></section>
    </>
  );
}

export default StudioPage;
