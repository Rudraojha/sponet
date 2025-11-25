import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import ProductListing from './pages/ProductListing'
import CartPage from './pages/CartPage'

export default function App(){
  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-6">
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/products' element={<ProductListing/>} />
          <Route path='/cart' element={<CartPage/>} />
        </Routes>
      </main>
    </div>
  )
}
