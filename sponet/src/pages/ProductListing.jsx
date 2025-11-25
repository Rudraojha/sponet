import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import p1 from '../assets/plant1.jpg'
import p2 from '../assets/plant2.jpg'
import p3 from '../assets/plant3.jpg'
import p4 from '../assets/plant4.jpg'
import p5 from '../assets/plant5.jpg'
import p6 from '../assets/plant6.jpg'

const plants = [
  { id:1, name:'Snake Plant', price:25, image:p1, category:'Air Purifying' },
  { id:2, name:'Monstera', price:40, image:p2, category:'Tropical' },
  { id:3, name:'ZZ Plant', price:30, image:p3, category:'Low Maintenance' },
  { id:4, name:'Pothos', price:15, image:p4, category:'Air Purifying' },
  { id:5, name:'Rubber Plant', price:35, image:p5, category:'Tropical' },
  { id:6, name:'Aloe Vera', price:12, image:p6, category:'Low Maintenance' }
]

export default function ProductListing(){
  const dispatch = useDispatch()
  const items = useSelector(s => s.cart.items)
  const isAdded = id => items.some(i=>i.id===id)

  const cats = [...new Set(plants.map(p=>p.category))]
  return (
    <div>
      <h2 className="text-2xl mb-4">Our Plants</h2>
      {cats.map(cat=>(
        <section key={cat} className="mb-6">
          <h3 className="font-semibold">{cat}</h3>
          <div className="grid grid-cols-3 gap-4 mt-3">
            {plants.filter(p=>p.category===cat).map(p=>(
              <div key={p.id} className="bg-white p-4 rounded shadow">
                <img src={p.image} alt={p.name} className="w-full h-36 object-cover"/>
                <h4 className="mt-2 font-bold">{p.name}</h4>
                <p>${p.price}</p>
                <button disabled={isAdded(p.id)} onClick={()=>dispatch(addToCart(p))} className="mt-2 w-full px-3 py-2 rounded bg-green-500 text-white disabled:opacity-50">
                  {isAdded(p.id) ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
