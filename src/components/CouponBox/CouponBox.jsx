import { useCart } from '../../context/CartContext'
import './CouponBox.css'

const QUICK_CODES = ['ALIEN20','SECTOR50','FIRST100']

export default function CouponBox() {
  const { couponCode, appliedCoupon, couponStatus, setCoupon, applyCoupon, prefillCoupon } = useCart()

  function handlePrefill(code) {
    prefillCoupon(code)
    // auto-apply after prefill
    setTimeout(() => applyCoupon(), 0)
  }

  return (
    <section className="coupon-box" aria-label="Promo code">
      <h3 className="coupon-box__title">// PROMO CODE</h3>
      <div className="coupon-box__row">
        <input className="coupon-box__input" type="text" placeholder="ENTER CODE"
          value={couponCode} maxLength={16}
          onChange={e => setCoupon(e.target.value.toUpperCase())}
          onKeyDown={e => e.key === 'Enter' && applyCoupon()}
          aria-label="Promo code input" />
        <button className="coupon-box__apply" onClick={applyCoupon} aria-label="Apply coupon">APPLY</button>
      </div>
      <ul className="coupon-box__tags" role="list" aria-label="Quick apply codes">
        {QUICK_CODES.map(code => (
          <li key={code}>
            <button className={`coupon-box__tag${appliedCoupon===code?' coupon-box__tag--applied':''}`}
              onClick={() => handlePrefill(code)} aria-pressed={appliedCoupon===code}>
              {code} {code==='ALIEN20'?'— 20% off':code==='SECTOR50'?'— ₹50 off':'— ₹100 off'}
            </button>
          </li>
        ))}
      </ul>
      {couponStatus && (
        <p className={`coupon-box__msg${couponStatus.ok?' coupon-box__msg--ok':' coupon-box__msg--err'}`} role="status" aria-live="polite">
          {couponStatus.msg}
        </p>
      )}
    </section>
  )
}
