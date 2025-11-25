import React from 'react'
import { Link } from 'react-router-dom'
import sample from '../assets/screenshot1.png'

export default function LandingPage(){
  return (
    <div className="h-[70vh] flex flex-col items-center justify-center text-center" style={{backgroundImage:`url(${sample})`, backgroundSize:'cover'}}>
      <div className="bg-white/80 p-8 rounded">
        <h1 className="text-4xl font-extrabold">Sponet — Plants for athletes</h1>
        <p className="mt-4">A LinkedIn-style platform for athletes — shop plants and show your achievements.</p>
        <Link to="/products"><button className="mt-6 px-4 py-2 bg-green-600 text-white rounded">Get Started</button></Link>
      </div>
    </div>
  )
}
