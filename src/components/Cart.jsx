import React, { useEffect, useState } from 'react'

function Cart({cartCount,cameraShowList,cartIndex,arrAdd}) {

  const [cart, setCart] = useState([]);

  // Function to add a new item to the cart array
  const addToCart = () => {
    setCart(prevCart => [...prevCart, cartIndex]);
  };
  

  console.log(arrAdd)
  return (
    <div>
        <ul>
          {arrAdd.map((i)=>(
            <li key={i.id}>{i.title} = {i.price}</li>
          ))}
        </ul>
    </div>
  )
}

export default Cart