import { useEffect, useState } from 'react';

const links = [
  ['Features', '/index.html#features'],
  ['Workspace', '/workspace.html'],
  ['How it works', '/process.html'],
  ['Pricing', '/pricing.html'],
];

function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>;
}

function Header({ page, onAdmin }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="site-header">
      <div className="header-inner page-width">
        <a className="wordmark" href="/index.html" aria-label="Epafi home"><BrandMark /><span>epafi</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => <a key={label} href={href} aria-current={(label === 'Pricing' && page === 'pricing') || (label === 'Workspace' && page === 'workspace') || (label === 'How it works' && page === 'process') ? 'page' : undefined}>{label}</a>)}
          <a href="/studio.html">Studio</a>
        </nav>
        <div className="header-actions">
          <button className="admin-link" onClick={onAdmin}>Admin preview</button>
          <a className="button button-primary button-small" href="/contact.html#request">Try Epafi <span aria-hidden="true">↗</span></a>
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>
        {menuOpen && <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
          {links.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a href="/studio.html" onClick={closeMenu}>Studio</a>
          <button className="mobile-admin" type="button" onClick={() => { closeMenu(); onAdmin(); }}>Admin preview</button>
          <a className="button button-primary mobile-try" href="/contact.html#request" onClick={closeMenu}>Try Epafi <span aria-hidden="true">↗</span></a>
        </nav>}
      </div>
    </header>
  );
}

export { BrandMark };
export default Header;
