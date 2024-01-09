import React, { useEffect, useState } from 'react'
import CartItem from './CartItem';

function Cart({cartCount,cameraShowList,cartIndex,arrAdd}) {

  console.log(arrAdd)

  const [totalCount,setTotalCount]=useState(0)
  const [cartItems, setCartItems] = useState([]);
 
  useEffect(() => {
    let total = 0;
    for (let i = 0; i < arrAdd.length; i++) {
      let index = arrAdd[i];
      let eleTot=parseInt(cameraShowList[index].price)
      total += eleTot;
    }
    setTotalCount(total);
  }, [arrAdd, cameraShowList]);


  const updateTotalPrice = (priceChange) => {
    setTotalCount((prevTotal) => prevTotal + priceChange);
  };

  const handleRemoveFromCart = (itemToRemove) => {
    setCartItems((prevItems) => prevItems.filter((item) => item !== itemToRemove));
  };
  
  return (
    <div>
         <ul>
        {arrAdd.map((item, index) => (
          <CartItem key={index} data={cameraShowList[index]} updateTotalPrice={updateTotalPrice} onRemove={handleRemoveFromCart}/>
        ))}
      </ul>

      <div className='fixed bottom-0 left-[75.5%] p-6 w-full bg-white'>
              Total: {totalCount}
            </div>
    </div>
  )
}

export default Cart