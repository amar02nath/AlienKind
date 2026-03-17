import './CheckoutCard.css'
export default function CheckoutCard({ onCheckout }) {
  return (
    <section className="checkout-card" aria-label="Checkout">
      <button className="checkout-card__btn" onClick={onCheckout}>⚡ PROCEED TO CHECKOUT</button>
      <p className="checkout-card__note">
        <span>Free delivery</span> on orders above ₹499 · Secure payment via Razorpay
      </p>
    </section>
  )
}
