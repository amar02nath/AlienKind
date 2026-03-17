import AlienLogo from '../AlienLogo/AlienLogo'
import { useCart } from '../../context/CartContext'
import { usePage } from '../../context/PageContext'
import './Navbar.css'

const fmt = n => '₹' + n.toLocaleString('en-IN')

export default function Navbar() {
  const { totalQty, subtotal } = useCart()
  const { setPage } = usePage()

  return (
    <header className="navbar" role="banner">
      <a className="navbar__logo" href="#" onClick={e => { e.preventDefault(); setPage('menu') }} aria-label="Alienkind — home">
        <AlienLogo />
        <div className="navbar__logo-text">
          <span className="navbar__logo-name">ALIENKIND</span>
          <span className="navbar__logo-tagline">Fuel for the cosmos</span>
        </div>
      </a>

      <nav className="navbar__nav" aria-label="Primary navigation">
        <ul className="navbar__nav-list" role="list">
          {['Menu','About','Sectors','Track Order'].map(label => (
            <li key={label}>
              <a href="#" className={`navbar__nav-link${label==='Menu'?' navbar__nav-link--active':''}`}
                onClick={e => { e.preventDefault(); if(label==='Menu') setPage('menu') }}
                aria-current={label==='Menu'?'page':undefined}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <button className="navbar__cart" onClick={() => setPage('cart')}
        aria-label={`Open cart — ${totalQty} items, ${fmt(subtotal)}`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        CART
        <span className="navbar__cart-badge" aria-live="polite" aria-atomic="true">{totalQty}</span>
        {subtotal > 0 && <span className="navbar__cart-amount">{fmt(subtotal)}</span>}
      </button>
    </header>
  )
}
