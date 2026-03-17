import { categories } from '../../data/menuData'
import './CategoryTabs.css'
export default function CategoryTabs({ active, onChange }) {
  return (
    <nav className="cat-tabs" aria-label="Filter menu by category">
      <ul className="cat-tabs__list" role="list">
        {categories.map(({ id, label }) => (
          <li key={id}>
            <button className={`cat-tabs__btn${active===id?' cat-tabs__btn--active':''}`}
              onClick={() => onChange(id)} aria-pressed={active===id}>{label}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
