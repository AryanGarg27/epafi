import { BrandMark } from './Header.jsx';

function Footer({ onAdmin }) {
  return (
    <footer className="site-footer">
      <div className="footer-main page-width">
        <div className="footer-brand"><a className="wordmark" href="/index.html"><BrandMark /><span>epafi</span></a><p>A little more context.<br />A better next step.</p></div>
        <div className="footer-navigation">
          <nav className="footer-nav" aria-label="Footer navigation"><a href="/index.html#features">Features</a><a href="/process.html">How it works</a><a href="/pricing.html">Pricing</a><a href="/studio.html">Studio</a><a href="/contact.html#contact">Contact</a></nav>
          <button className="footer-admin" type="button" onClick={onAdmin}>Admin preview <span aria-hidden="true">↗</span></button>
        </div>
      </div>
      <div className="footer-bottom page-width"><span>© {new Date().getFullYear()} Epafi</span><span>Fictional product. Built as a front-end project.</span></div>
    </footer>
  );
}

export default Footer;
