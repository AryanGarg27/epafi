import { useState } from 'react';

const samplePeople = [
  { initials: 'MC', name: 'Maya Chen', company: 'Northline Studio', stage: 'Intro sent', tone: 'sage', next: 'Send project examples', due: 'Today' },
  { initials: 'NR', name: 'Nikhil Rao', company: 'Cedar Commerce', stage: 'In conversation', tone: 'sand', next: 'Share a short proposal', due: 'Tomorrow' },
  { initials: 'AC', name: 'Ana Costa', company: 'Fieldwork Media', stage: 'Meeting booked', tone: 'clay', next: 'Prepare talking points', due: 'Today' },
];

const views = ['Overview', 'Contacts', 'Follow-ups'];

function ProductPreview({ compact = false }) {
  const [view, setView] = useState('Follow-ups');
  const [completed, setCompleted] = useState([]);
  const remaining = samplePeople.filter((person) => !completed.includes(person.name)).length;

  const toggleComplete = (name) => setCompleted((current) => current.includes(name)
    ? current.filter((item) => item !== name)
    : [...current, name]);

  return (
    <div className={`product-preview${compact ? ' product-preview-compact' : ''}`}>
      <div className="preview-topbar">
        <div className="preview-brand"><span className="preview-brand-mark" aria-hidden="true"><i /><i /></span><span>epafi</span><small>WORKSPACE</small></div>
        <div className="preview-topbar-end"><span className="preview-date">THURSDAY, 14 MAY</span><span className="preview-avatar" aria-label="Alex, sample account">A</span></div>
      </div>
      <div className="preview-layout">
        <aside className="preview-sidebar" aria-label="Sample workspace sections">
          <p className="preview-workspace-name"><span className="workspace-swatch">S</span><span>STUDIO NORTH<small>Personal workspace</small></span><span className="workspace-chevron" aria-hidden="true">⌄</span></p>
          <div className="preview-sidebar-label">WORKSPACE</div>
          <nav className="preview-tabs" aria-label="Preview navigation">
            {views.map((item, index) => <button key={item} className={view === item ? 'preview-tab is-selected' : 'preview-tab'} aria-pressed={view === item} onClick={() => setView(item)}>
              <span className="preview-tab-icon" aria-hidden="true">{index === 0 ? '◫' : index === 1 ? '○' : '↗'}</span>{item}{item === 'Follow-ups' && <span className="preview-tab-count">{remaining}</span>}
            </button>)}
          </nav>
          <div className="preview-side-note"><span className="preview-online-dot" />Sample workspace<br /><small>Changes stay on this page</small></div>
        </aside>
        <section className="preview-main" aria-label="Interactive sample workspace">
          <div className="preview-main-heading">
            <div><p className="preview-eyebrow">YOUR STUDIO</p><h2>{view === 'Overview' ? 'A little room to follow through.' : view === 'Contacts' ? 'People in your orbit.' : 'A good next step.'}</h2><p>{view === 'Overview' ? 'Keep the useful details close.' : view === 'Contacts' ? 'Every conversation, in one considered place.' : 'Three conversations ready for a thoughtful follow-up.'}</p></div>
            <span className="preview-period">THIS WEEK <span aria-hidden="true">⌄</span></span>
          </div>
          {view === 'Overview' && <div className="preview-overview">
            <div className="preview-overview-note"><span className="preview-note-mark" aria-hidden="true">↗</span><div><b>{remaining} open follow-up{remaining === 1 ? '' : 's'}</b><p>A small list is easier to come back to.</p></div></div>
            <div className="preview-mini-list"><div className="preview-list-heading"><span>UP NEXT</span><button onClick={() => setView('Follow-ups')}>See follow-ups <span aria-hidden="true">→</span></button></div>{samplePeople.slice(0, 2).map((person) => <div className="preview-mini-row" key={person.name}><span className={`person-avatar avatar-${person.tone}`}>{person.initials.slice(0, 1)}</span><span><b>{person.company}</b><small>{person.next}</small></span><span>{completed.includes(person.name) ? 'Done' : person.due}</span></div>)}</div>
          </div>}
          {view === 'Contacts' && <div className="preview-table-wrap"><div className="preview-table-head"><span>CONTACT</span><span>STAGE</span><span>LAST NOTE</span></div>{samplePeople.map((person) => <div className="preview-contact-row" key={person.name}><span className={`person-avatar avatar-${person.tone}`}>{person.initials.slice(0, 1)}</span><span className="preview-contact-name"><b>{person.name}</b><small>{person.company}</small></span><span className={`stage-label stage-${person.tone}`}>{person.stage}</span><span className="preview-contact-note">{person.next}</span></div>)}</div>}
          {view === 'Follow-ups' && <div className="preview-followups">
            <div className="preview-list-heading"><span>{remaining} OPEN · SAMPLE FOLLOW-UPS</span><span className="preview-sort">OLDEST FIRST <span aria-hidden="true">⌄</span></span></div>
            {samplePeople.map((person) => {
              const isDone = completed.includes(person.name);
              return <article className={`followup-row${isDone ? ' is-done' : ''}`} key={person.name}>
                <span className={`person-avatar avatar-${person.tone}`}>{person.initials.slice(0, 1)}</span>
                <div className="followup-person"><b>{person.company}</b><small>{person.name} <span aria-hidden="true">·</span> {person.stage}</small></div>
                <div className="followup-action"><span>{person.next}</span><small>{person.due}</small></div>
                <button className="followup-complete" type="button" aria-label={`${isDone ? 'Undo completion for' : 'Mark follow-up complete for'} ${person.company}`} onClick={() => toggleComplete(person.name)}>{isDone ? 'Undo' : 'Mark done'}</button>
              </article>;
            })}
            <p className="preview-live" role="status" aria-live="polite">{completed.length ? `${completed.length} sample follow-up${completed.length === 1 ? '' : 's'} complete. You can undo any change.` : 'A quiet list, ready when you are.'}</p>
          </div>}
          <div className="preview-bottom-note"><span aria-hidden="true">✳</span> Good follow-ups leave room for good work.</div>
        </section>
      </div>
    </div>
  );
}

export default ProductPreview;
