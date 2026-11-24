import { Link, NavLink } from 'react-router-dom'
import { Heart, Search, ShoppingBag, UserRound } from 'lucide-react'
import { useEffect, useState, type ReactNode } from 'react'

export function formatUGX(value: number) {
  return new Intl.NumberFormat('en-UG', { style: 'currency', currency: 'UGX', maximumFractionDigits: 0 }).format(value)
}

export function Header({ search, setSearch }: { search: string; setSearch: (value: string) => void }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('zentra_cart') || '[]') as { quantity: number }[]
    setCount(cart.reduce((total, item) => total + item.quantity, 0))
  })
  return <header className="sticky top-0 z-40 border-b border-black/5 bg-cream/95 backdrop-blur-md">
    <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
      <Link to="/" className="brand" aria-label="ZENTRA home"><span>Z</span><b>ZENTRA</b></Link>
      <div className="relative mx-auto hidden w-full max-w-xl md:block">
        <Search className="absolute left-3 top-3 size-5 text-slate-400" />
        <input value={search} onChange={event => setSearch(event.target.value)} className="input pl-10" placeholder="Search products, stores and categories" />
      </div>
      <nav className="ml-auto flex items-center gap-1">
        <Link className="icon-button" to="/wishlist" aria-label="Favourites"><Heart /></Link>
        <Link className="icon-button relative" to="/cart" aria-label="Cart"><ShoppingBag /><span className="cart-count">{count}</span></Link>
        <Link className="icon-button" to="/account" aria-label="Account"><UserRound /></Link>
      </nav>
    </div>
  </header>
}

export function Layout({ children }: { children: ReactNode }) {
  const [search, setSearch] = useState('')
  return <>
    <Header search={search} setSearch={setSearch} />
    <main>{children}</main>
    <footer className="mt-16 border-t bg-white px-4 py-8 text-sm text-slate-500">
      <div className="mx-auto max-w-7xl flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <span>ZENTRA · Independent digital commerce for Uganda</span>
        <span>Support: akatukundaedgar123@gmail.com · 0763345509</span>
      </div>
    </footer>
  </>
}
