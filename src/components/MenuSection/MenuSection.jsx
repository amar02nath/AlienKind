import FoodCard from '../FoodCard/FoodCard'
import './MenuSection.css'

export default function MenuSection({ items, onAdd }) {
  return (
    <section className="menu-section" id="menu" aria-label="Food menu">
      <div className="menu-section__header" aria-hidden="true">
        <h2 className="menu-section__title">// RECOMMENDED SUSTENANCE</h2>
        <span className="menu-section__line" />
        <span className="menu-section__count">{items.length} {items.length===1?'ITEM':'ITEMS'} FOUND</span>
      </div>
      {items.length > 0 ? (
        <ul className="menu-section__grid" role="list" aria-label="Menu items">
          {items.map(item => (
            <li key={item.id} className="menu-section__cell">
              <FoodCard item={item} onAdd={onAdd} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="menu-section__empty" role="status">// No items found in this sector.</p>
      )}
    </section>
  )
}
