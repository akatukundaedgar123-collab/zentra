import { Heart, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { formatUGX } from './Layout'

export type Product = {
  id: string
  name: string
  price: number
  image: string
  category: string
  seller: string
  rating: number
  stock: number
  description: string
}

export function ProductCard({ product }: { product: Product }) {
  const [saved, setSaved] = useState(() => JSON.parse(localStorage.getItem('zentra_favourites') || '[]').includes(product.id))
  const toggleFavourite = () => {
    const favourites: string[] = JSON.parse(localStorage.getItem('zentra_favourites') || '[]')
    const next = favourites.includes(product.id) ? favourites.filter(id => id !== product.id) : [...favourites, product.id]
    localStorage.setItem('zentra_favourites', JSON.stringify(next))
    setSaved(next.includes(product.id))
  }
  return <article className="product-card">
    <Link to={`/product/${product.id}`} className="relative block aspect-square overflow-hidden rounded-xl bg-mist">
      <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover transition duration-300 hover:scale-[1.03]" />
      {product.stock < 5 && <span className="absolute bottom-2 left-2 badge">Only {product.stock} left</span>}
    </Link>
    <div className="p-3">
      <div className="mb-1 flex items-start justify-between gap-2">
        <Link to={`/product/${product.id}`}><h3 className="line-clamp-2 text-sm font-bold text-charcoal">{product.name}</h3></Link>
        <button onClick={toggleFavourite} className={saved ? 'text-emerald-600' : 'text-slate-400'} aria-label="Toggle favourite"><Heart size={18} fill={saved ? 'currentColor' : 'none'} /></button>
      </div>
      <p className="text-base font-extrabold text-emerald-700">{formatUGX(product.price)}</p>
      <div className="mt-2 flex items-center justify-between text-xs text-slate-500"><span>{product.seller}</span><span className="flex items-center gap-1"><Star size={12} fill="#eab308" className="text-yellow-500" />{product.rating}</span></div>
    </div>
  </article>
}
