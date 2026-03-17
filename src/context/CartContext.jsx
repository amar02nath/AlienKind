import { createContext, useContext, useReducer, useCallback } from 'react'
import { COUPONS, DELIVERY_FEE, FREE_DELIVERY_MIN, TAX_RATE } from '../data/menuData'

const CartContext = createContext(null)

const init = { items: {}, couponCode: '', appliedCoupon: null, couponStatus: null }

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const prev = state.items[action.id]?.qty ?? 0
      return { ...state, items: { ...state.items, [action.id]: { ...action.meta, qty: prev + 1 } } }
    }
    case 'CHANGE_QTY': {
      const newQty = (state.items[action.id]?.qty ?? 0) + action.delta
      if (newQty <= 0) {
        const { [action.id]: _, ...rest } = state.items
        return { ...state, items: rest, appliedCoupon: null, couponStatus: null, couponCode: '' }
      }
      return { ...state, items: { ...state.items, [action.id]: { ...state.items[action.id], qty: newQty } } }
    }
    case 'CLEAR':
      return { ...init }
    case 'SET_COUPON_CODE':
      return { ...state, couponCode: action.value }
    case 'APPLY_COUPON': {
      const code = state.couponCode.trim().toUpperCase()
      if (!code) return { ...state, couponStatus: { ok: false, msg: 'Enter a promo code first.' } }
      if (COUPONS[code]) return { ...state, appliedCoupon: code, couponStatus: { ok: true, msg: '✓ ' + COUPONS[code].label } }
      return { ...state, appliedCoupon: null, couponStatus: { ok: false, msg: '✗ Invalid code. Try ALIEN20, SECTOR50 or FIRST100.' } }
    }
    case 'PREFILL_COUPON':
      return { ...state, couponCode: action.code }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, init)

  const addItem     = useCallback((id, meta) => dispatch({ type:'ADD', id, meta }), [])
  const changeQty   = useCallback((id, delta) => dispatch({ type:'CHANGE_QTY', id, delta }), [])
  const clearCart   = useCallback(() => dispatch({ type:'CLEAR' }), [])
  const setCoupon   = useCallback((value) => dispatch({ type:'SET_COUPON_CODE', value }), [])
  const applyCoupon = useCallback(() => dispatch({ type:'APPLY_COUPON' }), [])
  const prefillCoupon = useCallback((code) => dispatch({ type:'PREFILL_COUPON', code }), [])

  const itemList  = Object.values(state.items)
  const totalQty  = itemList.reduce((s, i) => s + i.qty, 0)
  const subtotal  = itemList.reduce((s, i) => s + i.price * i.qty, 0)

  let discount = 0
  if (state.appliedCoupon) {
    const c = COUPONS[state.appliedCoupon]
    discount = c.type === 'percent' ? Math.round(subtotal * c.value / 100) : Math.min(c.value, subtotal)
  }
  const afterDiscount = subtotal - discount
  const delivery      = afterDiscount >= FREE_DELIVERY_MIN ? 0 : (subtotal > 0 ? DELIVERY_FEE : 0)
  const tax           = Math.round(afterDiscount * TAX_RATE)
  const total         = afterDiscount + delivery + tax
  const savings       = discount + (delivery === 0 && subtotal > 0 ? DELIVERY_FEE : 0)

  return (
    <CartContext.Provider value={{
      items: state.items, itemList, totalQty, subtotal,
      discount, delivery, tax, total, savings,
      couponCode: state.couponCode, appliedCoupon: state.appliedCoupon, couponStatus: state.couponStatus,
      addItem, changeQty, clearCart, setCoupon, applyCoupon, prefillCoupon,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
