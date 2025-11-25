import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header(){
  const total = useSelector(s => s.cart.items.reduce((a,b)=>a+b.qty,0))
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Link to="/" className="text-xl font-bold">Sponet</Link>
        <Link to="/products" className="text-sm">Products</Link>
      </div>
      <div>
        <Link to="/cart" className="px-3 py-1 bg-green-500 text-white rounded">🛒 {total}</Link>
      </div>
    </header>
  )
}
