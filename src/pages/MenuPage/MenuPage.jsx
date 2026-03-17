import { useState, useMemo } from 'react'
import Hero from '../../components/Hero/Hero'
import CategoryTabs from '../../components/CategoryTabs/CategoryTabs'
import MenuSection from '../../components/MenuSection/MenuSection'
import { menuItems } from '../../data/menuData'
import './MenuPage.css'

export default function MenuPage({ onAdd }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return menuItems
    return menuItems.filter(item => item.category === activeCategory)
  }, [activeCategory])

  return (
    <main className="menu-page" id="main-content" aria-label="Menu page">
      <Hero />
      <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
      <MenuSection items={filtered} onAdd={onAdd} />
    </main>
  )
}
