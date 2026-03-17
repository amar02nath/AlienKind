import { createContext, useContext, useState } from 'react'

const PageContext = createContext(null)

export function PageProvider({ children }) {
  const [page, setPage] = useState('menu') // 'menu' | 'cart'
  return <PageContext.Provider value={{ page, setPage }}>{children}</PageContext.Provider>
}

export const usePage = () => {
  const ctx = useContext(PageContext)
  if (!ctx) throw new Error('usePage must be used inside PageProvider')
  return ctx
}
