import { useEffect, useRef, useState } from 'react';
import { BrandMark } from './Header.jsx';
import ProductPreview from './ProductPreview.jsx';

const DEMO_EMAIL = 'admin@epafi.example';
const DEMO_PASSWORD = 'epafi-demo';

function AdminDemo({ open, onClose }) {
  const dialogRef = useRef(null);
  const [signedIn, setSignedIn] = useState(false);
  const [email, setEmail] = useState(DEMO_EMAIL);
  const [password, setPassword] = useState(DEMO_PASSWORD);
  const [error, setError] = useState('');

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const close = () => {
    setSignedIn(false);
    setError('');
    onClose();
  };

  const signIn = (event) => {
    event.preventDefault();
    if (email.trim().toLowerCase() === DEMO_EMAIL && password === DEMO_PASSWORD) {
      setSignedIn(true);
      setError('');
    } else setError('Those sample details do not match. Use the credentials shown above.');
  };

  return (
    <dialog className={`admin-dialog${signedIn ? ' admin-dialog-wide' : ''}`} ref={dialogRef} onCancel={(event) => { event.preventDefault(); close(); }} onClick={(event) => { if (event.target === dialogRef.current) close(); }} aria-labelledby="admin-dialog-title">
      <div className="admin-dialog-head"><a className="wordmark" href="/index.html"><BrandMark /><span>epafi</span></a><button type="button" className="dialog-close" onClick={close} aria-label="Close admin preview">×</button></div>
      {!signedIn ? <div className="admin-login">
        <p className="eyebrow">Front-end walkthrough</p><h2 id="admin-dialog-title">Admin preview</h2><p className="admin-lede">Use the sample details to open a small fictional workspace. This is not a real account.</p>
        <div className="credential-box"><span>SAMPLE CREDENTIALS</span><p><b>Email</b><code>{DEMO_EMAIL}</code></p><p><b>Password</b><code>{DEMO_PASSWORD}</code></p></div>
        <form onSubmit={signIn} className="admin-form">
          <div className="form-field"><label htmlFor="admin-email">Email</label><input id="admin-email" type="email" autoComplete="username" value={email} onChange={(event) => setEmail(event.target.value)} /></div>
          <div className="form-field"><label htmlFor="admin-password">Password</label><input id="admin-password" type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} /></div>
          {error && <p className="field-error" role="alert">{error}</p>}
          <button className="button button-primary admin-submit" type="submit">Enter sample workspace <span aria-hidden="true">↗</span></button>
        </form>
        <p className="admin-limit-note">Demo only. The sample sign-in is checked in this page; no credentials are sent or stored.</p>
      </div> : <div className="admin-workspace">
        <div className="admin-welcome"><div><p className="eyebrow">Sample admin workspace</p><h2 id="admin-dialog-title">A clear place to follow up.</h2></div><button className="admin-signout" type="button" onClick={() => { setSignedIn(false); setError(''); }}>Sign out</button></div>
        <ProductPreview compact />
        <p className="admin-limit-note">Sample workspace only. Changes reset when you close this preview.</p>
      </div>}
    </dialog>
  );
}

export default AdminDemo;
