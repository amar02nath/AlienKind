import { useCart } from '../../context/CartContext'
import FreeDeliveryBar from '../FreeDeliveryBar/FreeDeliveryBar'
import './BillSummary.css'

const fmt = n => '₹' + n.toLocaleString('en-IN')

export default function BillSummary() {
  const { subtotal, discount, delivery, tax, total, savings } = useCart()

  return (
    <section className="bill-summary" aria-label="Bill summary">
      <h3 className="bill-summary__title">// BILL SUMMARY</h3>
      <FreeDeliveryBar />

      <dl className="bill-summary__list">
        <div className="bill-summary__row">
          <dt className="bill-summary__label">Item total</dt>
          <dd className="bill-summary__value">{fmt(subtotal)}</dd>
        </div>
        {discount > 0 && (
          <div className="bill-summary__row">
            <dt className="bill-summary__label">Discount</dt>
            <dd className="bill-summary__value bill-summary__value--disc">-{fmt(discount)}</dd>
          </div>
        )}
        <div className="bill-summary__row">
          <dt className="bill-summary__label">Delivery fee</dt>
          <dd className={`bill-summary__value${delivery===0?' bill-summary__value--free':''}`}>
            {delivery === 0 ? 'FREE' : fmt(delivery)}
          </dd>
        </div>
        <div className="bill-summary__row">
          <dt className="bill-summary__label">GST &amp; charges (5%)</dt>
          <dd className="bill-summary__value">{fmt(tax)}</dd>
        </div>
      </dl>

      <div className="bill-summary__divider" aria-hidden="true" />

      <div className="bill-summary__total-row">
        <span className="bill-summary__total-label">TO PAY</span>
        <span className="bill-summary__total-value" aria-live="polite">{fmt(total)}</span>
      </div>

      {savings > 0 && (
        <p className="bill-summary__savings" role="status" aria-live="polite">
          🎯 You are saving {fmt(savings)} on this order!
        </p>
      )}
    </section>
  )
}
