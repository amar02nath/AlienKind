import { usePage } from '../../context/PageContext'
import { useCart } from '../../context/CartContext'
import CartItems from '../../components/CartItems/CartItems'
import CouponBox from '../../components/CouponBox/CouponBox'
import BillSummary from '../../components/BillSummary/BillSummary'
import CheckoutCard from '../../components/CheckoutCard/CheckoutCard'
import CartEmptyState from '../../components/CartEmptyState/CartEmptyState'
import './CartPage.css'

export default function CartPage({ onCheckout }) {
  const { setPage } = usePage()
  const { itemList, totalQty } = useCart()
  const isEmpty = itemList.length === 0

  return (
    <main className="cart-page" id="main-content" aria-label="Cart page">

      {/* Page header */}
      <div className="cart-page__header">
        <button
          className="cart-page__back"
          onClick={() => setPage('menu')}
          aria-label="Back to menu"
        >
          ← BACK TO MENU
        </button>
        <div>
          <h1 className="cart-page__title">YOUR CARGO</h1>
          <p className="cart-page__subtitle" aria-live="polite">
            {totalQty} item{totalQty !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* Empty state */}
      {isEmpty ? (
        <CartEmptyState />
      ) : (
        <div className="cart-page__layout">

          {/* Left — items list */}
          <section className="cart-page__left" aria-label="Cart items">
            <CartItems />
          </section>

          {/* Right — coupon + bill + checkout */}
          <aside className="cart-page__right" aria-label="Order summary">
            <CouponBox />
            <BillSummary />
            <CheckoutCard onCheckout={onCheckout} />
          </aside>

        </div>
      )}
    </main>
  )
}
