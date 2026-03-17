import AlienLogo from '../AlienLogo/AlienLogo'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__brand">
          <AlienLogo width={36} height={28} />
          <span className="footer__name">ALIENKIND</span>
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} Alienkind. All rights reserved across all known galaxies.
        </p>
        <nav className="footer__links" aria-label="Footer navigation">
          {['Privacy', 'Terms', 'Contact'].map((label, i, arr) => (
            <span key={label} className="footer__link-group">
              <a href={`#${label.toLowerCase()}`} className="footer__link">{label}</a>
              {i < arr.length - 1 && <span className="footer__sep" aria-hidden="true">·</span>}
            </span>
          ))}
        </nav>
      </div>
    </footer>
  )
}
