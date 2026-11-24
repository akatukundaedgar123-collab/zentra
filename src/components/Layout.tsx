import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Search, ShoppingBag, Store, UserRound } from 'lucide-react'

export function formatUGX(value: number) {
  return new Intl.NumberFormat('en-UG', { style: 'currency', currency: 'UGX', maximumFractionDigits: 0 }).format(value)
}

export function Header({ search, setSearch }: { search: string; setSearch: (value: string) => void }) {
  const [count, setCount] = useState(0)
  useEffect(() => { setCount(JSON.parse(localStorage.getItem('zentra_cart') || '[]').reduce((n: number, i: any) => n + i.quantity, 0)) }, [])
  return <header className="sticky top-0 z-40 border-b border-black/5 bg-cream/95 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
      <Link to="/" className="brand" aria-label="ZENTRA home"><span>Z</span><b>ZENTRA</b></Link>
      <div className="relative mx-auto hidden w-full max-w-xl md:block">
        <Search className="absolute left-3 top-3 size-5 text-slate-400" />
        <input value={search} onChange={e => setSearch(e.target.value)} className="input pl-10" placeholder="Search products, stores and categories" />
      </div>
      <nav className="ml-auto flex items-center gap-1">
        <Link className="icon-button" to="/wishlist" aria-label="Favourites"><Heart /></Link>
        <Link className="icon-button relative" to="/cart" aria-label="Cart"><ShoppingBag /><span className="cart-count">{count}</span></Link>
        <Link className="icon-button" to="/account" aria-label="Account"><UserRound /></Link>
      </nav>
    </div>
  </header>
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState('')
  return <><Header search={search} setSearch={setSearch} /><main>{children}</main><footer className="mt-16 border-t bg-white px-4 py-8 text-sm text-slate-500"><div className="mx-auto max-w-7xl">ZENTRA · Independent digital commerce for Uganda · Support: akatukundaedgar123@gmail.com</div></footer></>
}
