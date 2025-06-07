import React, { useState } from 'react'
import { UseCounterStore } from '@/stores/Cartcounter'
import { div } from 'motion/react-client'

interface CartItem {
  id: number
  name: string
  price: string
  quantity: number
}


const CartItems = () => {
    const [items, setItems] = useState(null);

    if(!items) {
        <div>
            <span>You don't have any product in carts.</span> 
            Go for Shopping</div>
    }
  
  return (
    <div>Hello</div>
  )
}

export default CartItems