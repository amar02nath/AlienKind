import { usePage } from '../../context/PageContext'
import './CartEmptyState.css'

export default function CartEmptyState() {
  const { setPage } = usePage()
  return (
    <div className="cart-empty" role="status">
      <span className="cart-empty__icon" aria-hidden="true">🛸</span>
      <h2 className="cart-empty__title">CARGO BAY IS EMPTY</h2>
      <p className="cart-empty__sub">
        You haven't added any items yet.<br />
        Head back to the menu and pick your sustenance.
      </p>
      <button className="cart-empty__btn" onClick={() => setPage('menu')}>
        ← EXPLORE THE MENU
      </button>
    </div>
  )
}
