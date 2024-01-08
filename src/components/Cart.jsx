import React, { useEffect, useState } from 'react'
import CartItem from './CartItem';

function Cart({cartCount,cameraShowList,cartIndex,arrAdd}) {

  console.log(arrAdd)

  
  return (
    <div>
         <ul>
        {arrAdd.map((item, index) => (
          <CartItem key={index} data={cameraShowList[index]} />
        ))}
      </ul>
    </div>
  )
}

export default Cart