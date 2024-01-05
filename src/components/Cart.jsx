import React, { useState } from 'react'

function Cart({cartCount,cameraShowList,cartIndex}) {

    const arr=cartIndex.slice(1,-1);
    
  return (
    <div>
        <ul>
            {arr.map((i)=>(
                <li>{cameraShowList[i].matirial}</li>
            ))}
        </ul>
    </div>
  )
}

export default Cart