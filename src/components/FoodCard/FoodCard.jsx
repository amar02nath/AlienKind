import { useCart } from '../../context/CartContext'
import QuantityStepper from '../QuantityStepper/QuantityStepper'
import './FoodCard.css'

const badgeClass = { special:'food-card__badge--special', hot:'food-card__badge--hot', new:'food-card__badge--new' }

function CardRings() {
  return (
    <svg className="food-card__rings" viewBox="0 0 200 180" aria-hidden="true">
      <ellipse cx="100" cy="90" rx="90" ry="68" stroke="#FF2200" strokeWidth="0.8" fill="none"/>
      <ellipse cx="100" cy="90" rx="55" ry="68" stroke="#FF2200" strokeWidth="0.55" fill="none"/>
    </svg>
  )
}

export default function FoodCard({ item, onAdd }) {
  const { items, addItem, changeQty } = useCart()
  const qty = items[item.id]?.qty ?? 0

  function handleAdd() {
    addItem(item.id, { name:item.name, icon:item.icon, price:item.price })
    onAdd('UNIT LOGGED: ' + item.name)
  }

  return (
    <article className="food-card" aria-label={item.name}>
      <div className="food-card__media" style={{ background: item.bg }} aria-hidden="true">
        <CardRings />
        <span className="food-card__icon" role="img" aria-label={item.name}>{item.icon}</span>
        {item.badge && (
          <span className={`food-card__badge ${badgeClass[item.badge.type] ?? ''}`}>{item.badge.text}</span>
        )}
        <span className={`food-card__veg-dot food-card__veg-dot--${item.isVeg?'veg':'nonveg'}`}
          role="img" aria-label={item.isVeg?'Vegetarian':'Non-vegetarian'} title={item.isVeg?'Vegetarian':'Non-vegetarian'} />
      </div>

      <div className="food-card__body">
        <p className="food-card__category">{item.categoryLabel}</p>
        <h2 className="food-card__name">{item.name}</h2>
        <p className="food-card__price" aria-label={`Price ₹${item.price}`}>
          ₹{item.price.toLocaleString('en-IN')}
        </p>
        <div className="food-card__rating" aria-label={`Rating ${item.rating} out of 5`}>
          <span className="food-card__star" aria-hidden="true">★</span>
          <span className="food-card__rating-val">{item.rating}</span>
        </div>
        <p className="food-card__desc">{item.description}</p>
        <div className="food-card__stepper">
          <QuantityStepper qty={qty} onAdd={handleAdd}
            onIncrease={() => changeQty(item.id, 1)}
            onDecrease={() => changeQty(item.id, -1)} />
        </div>
      </div>
      <span className="food-card__corner-br" aria-hidden="true" />
    </article>
  )
}
