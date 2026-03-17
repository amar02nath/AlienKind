import { useCart } from '../../context/CartContext'
import './CartItems.css'

const fmt = n => '₹' + n.toLocaleString('en-IN')

export default function CartItems() {
  const { itemList, changeQty, clearCart } = useCart()
  const totalQty = itemList.reduce((s,i) => s + i.qty, 0)

  return (
    <section className="cart-items" aria-label="Order items">
      <div className="cart-items__header">
        <div>
          <h2 className="cart-items__title">ORDER ITEMS</h2>
          <p className="cart-items__subtitle">{totalQty} item{totalQty!==1?'s':''}</p>
        </div>
        <button className="cart-items__clear" onClick={clearCart} aria-label="Clear all items">CLEAR ALL</button>
      </div>

      <ul className="cart-items__list" role="list" aria-label="Items in cart">
        {itemList.map(item => (
          <li key={item.id} className="cart-items__row">
            <span className="cart-items__emoji" role="img" aria-label={item.name}>{item.icon}</span>
            <div className="cart-items__info">
              <p className="cart-items__name">{item.name}</p>
              <p className="cart-items__unit">{fmt(item.price)} per unit</p>
            </div>
            <div className="cart-items__stepper" role="group" aria-label={`Quantity for ${item.name}`}>
              <button className="cart-items__btn" onClick={() => changeQty(item.id,-1)} aria-label={`Remove one ${item.name}`}>−</button>
              <span className="cart-items__qty" aria-live="polite" aria-atomic="true">{item.qty}</span>
              <button className="cart-items__btn" onClick={() => changeQty(item.id, 1)} aria-label={`Add one more ${item.name}`}>+</button>
            </div>
            <span className="cart-items__subtotal" aria-label={`Subtotal ${fmt(item.price * item.qty)}`}>
              {fmt(item.price * item.qty)}
            </span>
          </li>
        ))}
      </ul>
      <span className="cart-items__corner-br" aria-hidden="true"/>
    </section>
  )
}
