import { useCart } from '../../context/CartContext'
import { FREE_DELIVERY_MIN } from '../../data/menuData'
import './FreeDeliveryBar.css'

const fmt = n => '₹' + n.toLocaleString('en-IN')

export default function FreeDeliveryBar() {
  const { subtotal } = useCart()
  const pct       = Math.min((subtotal / FREE_DELIVERY_MIN) * 100, 100)
  const unlocked  = subtotal >= FREE_DELIVERY_MIN
  const remaining = FREE_DELIVERY_MIN - subtotal

  return (
    <div className={`free-del-bar${unlocked?' free-del-bar--unlocked':''}`} role="status" aria-live="polite">
      <span className="free-del-bar__text">
        {unlocked ? '🎉 Free delivery unlocked!' : `Add ${fmt(remaining)} more for free delivery`}
      </span>
      <div className="free-del-bar__track" aria-hidden="true">
        <div className={`free-del-bar__fill${unlocked?' free-del-bar__fill--done':''}`} style={{ width: pct + '%' }} />
      </div>
    </div>
  )
}
