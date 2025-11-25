import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseQty, decreaseQty, deleteItem } from '../redux/cartSlice'
import { Link } from 'react-router-dom'

export default function CartPage(){
  const items = useSelector(s => s.cart.items)
  const dispatch = useDispatch()
  const totalPlants = items.reduce((s,i)=>s+i.qty,0)
  const totalCost = items.reduce((s,i)=>s+i.qty*i.price,0)

  return (
    <div>
      <h1 className="text-2xl mb-4">Shopping Cart</h1>
      <p>Total Plants: {totalPlants}</p>
      <p>Total Cost: ${totalCost}</p>

      <div className="mt-6 space-y-4">
        {items.map(item=>(
          <div key={item.id} className="flex gap-4 bg-white p-4 rounded items-center">
            <img src={item.image} className="w-24 h-24 object-cover rounded"/>
            <div className="flex-1">
              <h3 className="font-bold">{item.name}</h3>
              <p>Unit price: ${item.price}</p>
            </div>

            <div className="flex items-center gap-2">
              <button onClick={()=>dispatch(increaseQty(item.id))} className="px-2 py-1 bg-gray-200 rounded">+</button>
              <span>{item.qty}</span>
              <button onClick={()=>dispatch(decreaseQty(item.id))} className="px-2 py-1 bg-gray-200 rounded">-</button>
            </div>

            <div>
              <button onClick={()=>dispatch(deleteItem(item.id))} className="text-red-600">Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        <button onClick={()=>alert('Coming Soon!')} className="px-4 py-2 bg-blue-600 text-white rounded">Checkout</button>
        <Link to="/products"><button className="px-4 py-2 border rounded">Continue Shopping</button></Link>
      </div>
    </div>
  )
}
