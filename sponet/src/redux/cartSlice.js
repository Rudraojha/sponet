import { createSlice } from '@reduxjs/toolkit'
const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      const exists = state.items.find(i => i.id === item.id)
      if (!exists) state.items.push({ ...item, qty: 1 })
    },
    increaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload)
      if (item) item.qty++
    },
    decreaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload)
      if (item && item.qty > 1) item.qty--
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload)
    }
  }
})
export const { addToCart, increaseQty, decreaseQty, deleteItem } = cartSlice.actions
export default cartSlice.reducer
