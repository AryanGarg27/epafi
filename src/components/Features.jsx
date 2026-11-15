const features = [
  {
    number: '01', title: 'A home for every contact',
    description: 'Know who you’re speaking with, what brought you together, and the detail worth remembering.',
    icon: <><circle cx="12" cy="8" r="3.25" /><path d="M5.5 19c.4-3.1 2.5-4.7 6.5-4.7s6.1 1.6 6.5 4.7" /><path d="M18.1 7.3a3.2 3.2 0 0 1 0 5.8M20.6 16.1c1.1.6 1.7 1.5 1.9 2.9" /></>,
  },
  {
    number: '02', title: 'Keep the conversation intact',
    description: 'Bring the useful note and its history together, so every relationship is easy to return to.',
    icon: <><path d="M5 5.5h14v10H9l-4 3v-13Z" /><path d="M8 9h8M8 12h5" /><circle cx="18" cy="17" r="3" /><path d="m20.2 19.2 1.8 1.8" /></>,
  },
  {
    number: '03', title: 'One next step, made visible',
    description: 'Give a conversation a gentle follow-up and a date, so good intentions don’t disappear.',
    icon: <><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M8 3v4M16 3v4M8 11h8M8 15h4" /><path d="m16.5 16.5 1.5 1.5 3-3" /></>,
  },
];

const contacts = [
  ['MC', 'Maya Chen', 'Northline Studio', 'Intro sent', 'sage'],
  ['NR', 'Nikhil Rao', 'Cedar Commerce', 'In conversation', 'sand'],
  ['AC', 'Ana Costa', 'Fieldwork Media', 'Meeting booked', 'clay'],
];

function FeatureVisual({ index }) {
  if (index === 0) return <div className="feature-window">
    <div className="mock-toolbar"><span>PEOPLE</span><span className="mock-toolbar-action">＋ Add contact</span></div>
    <div className="mock-search-row"><span>Search your contacts</span><span>Filter <b>⌄</b></span></div>
    <div className="mock-table-head"><span>NAME</span><span>COMPANY</span><span>STAGE</span></div>
    {contacts.map(([initials, name, company, stage, tone]) => <div className="mock-contact-row" key={name}><span className={`person-avatar avatar-${tone}`}>{initials}</span><b>{name}</b><span>{company}</span><span className={`stage-label stage-${tone}`}>{stage}</span></div>)}
  </div>;

  if (index === 1) return <div className="feature-window context-window">
    <div className="mock-toolbar"><span>CONTACT DETAILS</span><span className="mock-toolbar-action">•••</span></div>
    <div className="context-person"><span className="person-avatar avatar-sage">M</span><div><b>Maya Chen</b><small>Northline Studio · Design lead</small></div><span className="context-status">INTRO SENT</span></div>
    <p className="context-label">A NOTE TO PICK UP</p>
    <div className="context-note">Met through Elena at the studio open house. Their team is planning a new identity this summer — send a few relevant examples before we speak.</div>
    <div className="context-history"><span className="context-history-mark">↗</span><span><b>Intro shared</b><small>Conversation note · 12 May</small></span><span className="context-history-time">2 days ago</span></div>
  </div>;

  return <div className="feature-window actions-window">
    <div className="mock-toolbar"><span>UP NEXT</span><span className="mock-toolbar-action">This week <b>⌄</b></span></div>
    <p className="actions-intro">A small list, ready when you are.</p>
    {contacts.map(([initials, name, company, , tone], index) => <div className="mock-action-row" key={name}><span className="mock-checkbox" /> <span className={`person-avatar avatar-${tone}`}>{initials.slice(0, 1)}</span><span className="mock-action-copy"><b>{index === 0 ? 'Send a few project examples' : index === 1 ? 'Share a short proposal' : 'Prepare talking points'}</b><small>{company} · {name}</small></span><span className="mock-action-date">{index === 1 ? 'TOMORROW' : 'TODAY'}</span></div>)}
  </div>;
}

function Features() {
  return (
    <section className="features-section" id="features" aria-labelledby="features-title">
      <div className="features-inner page-width">
        <div className="features-heading"><p className="eyebrow">[ 01 — THE WORKSPACE ]</p><h2 id="features-title">Everything you need<br />to keep the thread.</h2><p>People, context, and thoughtful follow-through — kept close, without the extra noise.</p></div>
        <div className="features-list">
          {features.map((feature, index) => <article className="feature-row" key={feature.number}>
            <div className="feature-copy"><div className="feature-meta"><span>[ {feature.number} ]</span><svg viewBox="0 0 24 24" aria-hidden="true">{feature.icon}</svg></div><h3>{feature.title}</h3><p>{feature.description}</p></div>
            <div className={`feature-visual feature-visual-${index + 1}`} aria-hidden="true"><FeatureVisual index={index} /></div>
          </article>)}
        </div>
      </div>
    </section>
  );
}

export default Features;
