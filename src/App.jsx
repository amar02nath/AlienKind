import { CartProvider } from './context/CartContext'
import { PageProvider, usePage } from './context/PageContext'
import { useToast } from './hooks/useToast'

import Navbar   from './components/Navbar/Navbar'
import Toast    from './components/Toast/Toast'
import Footer   from './components/Footer/Footer'
import MenuPage from './pages/MenuPage/MenuPage'
import CartPage from './pages/CartPage/CartPage'

import './App.css'

function AppShell() {
  const { page } = usePage()
  const { message, visible, showToast } = useToast()

  function handleCheckout() {
    showToast('Initiating payment sequence...')
  }

  return (
    <div className="app">
      <Navbar />

      {page === 'menu' && <MenuPage onAdd={showToast} />}
      {page === 'cart' && <CartPage onCheckout={handleCheckout} />}

      <Footer />
      <Toast message={message} visible={visible} />
    </div>
  )
}

export default function App() {
  return (
    <CartProvider>
      <PageProvider>
        <AppShell />
      </PageProvider>
    </CartProvider>
  )
}
