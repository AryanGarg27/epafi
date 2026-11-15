import ProductPreview from '../components/ProductPreview.jsx';

function ProductPage() {
  return (
    <>
      <section className="page-intro page-width" aria-labelledby="page-title">
        <p className="eyebrow">The workspace</p>
        <h1 id="page-title">A little more context.<br />A much clearer next step.</h1>
        <p className="page-intro-description">Epafi keeps your relationships easy to return to — with a place for the notes, the history, and the follow-up you meant to send.</p>
      </section>
      <section className="workspace-tour-section">
        <div className="workspace-tour-inner page-width">
          <div className="workspace-tour-copy"><p className="eyebrow">A sample workspace</p><h2>See the conversation<br />before you write.</h2><p>Move between contacts and follow-ups to explore a small, fictional studio workspace. Mark a next step complete, then undo it — the sample resets when you leave.</p><ul><li>Names and notes that make a connection familiar</li><li>One clear next action for each conversation</li><li>A simple view of what is moving through your pipeline</li></ul><a className="text-link" href="/process.html">See the three-step rhythm <span aria-hidden="true">→</span></a></div>
          <div className="workspace-tour-preview"><ProductPreview /><p className="preview-caption"><span className="preview-dot" aria-hidden="true" />Sample data only · no details are saved</p></div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;
