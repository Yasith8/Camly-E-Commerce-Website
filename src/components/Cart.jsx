import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { Modal, Alert } from "antd";
import { Style } from "@mui/icons-material";

function Cart({ cartCount, cameraShowList, cartIndex, arrAdd, afterOrder }) {
  console.log(arrAdd);

  const [totalCount, setTotalCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < arrAdd.length; i++) {
      let index = arrAdd[i];
      let eleTot = parseInt(cameraShowList[index + 1].price);
      total += eleTot;
    }
    setTotalCount(total);
  }, [arrAdd, cameraShowList]);

  const updateTotalPrice = (priceChange) => {
    setTotalCount((prevTotal) => prevTotal + priceChange);
  };

  const handleRemoveFromCart = (itemToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item !== itemToRemove)
    );
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    //afterOrder(0)
    Modal.success({
      title: "Thank You🛒",
      content: "Your Ordering Process completed Successfully🎉✅",
      onOk: () => {
        setIsModalOpen(false);
      },
    });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <ul>
        {arrAdd.map((item, index) => (
          <CartItem
            key={index}
            data={cameraShowList[index]}
            updateTotalPrice={updateTotalPrice}
            onRemove={handleRemoveFromCart}
          />
        ))}
      </ul>

      <div className="fixed bottom-0 p-6 w-full bg-white flex  items-center gap-[9rem]">
        <div>
          <div className="font-semibold">Total:</div>
          <div className="font-bold text-[1rem]">{totalCount}</div>
        </div>
        <div>
          <button
            className="bg-orange-500 text-white font-semibold p-3 rounded-md"
            onClick={showModal}
          >
            Pay Now
          </button>
        </div>
      </div>
      <Modal
        title="Pay Here"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          style: {
            backgroundColor: "#f97316",
            borderColor: "#f97316",
            color: "white",
          },
        }}
        okText="Place Order"
        width={1000}
      >
        <div className="flex">
          <div className="mt-3">
            <h1 className="font-bold text-[1rem]">Add Your Delivery Details</h1>
            <form action="">
              <div className="grid grid-cols-3 items-center">
                <label htmlFor="name" className="w-10">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-[15rem] py-1 border"
                  placeholder="Enter your Name"
                  required
                />
              </div>

              <div className="grid grid-cols-3 mt-2 items-center">
                <label htmlFor="mobile">Mobile:</label>
                <input
                  type="text"
                  id="mobile"
                  className="w-[15rem] py-1 border"
                  placeholder="Enter your Mobile Number"
                  required
                />
              </div>

              <div className="grid grid-cols-3 mt-2 items-center">
                <label htmlFor="address">Address:</label>
                <textarea
                  id="address"
                  className="w-[15rem] py-1 border"
                  placeholder="Address"
                  required
                />
              </div>
            </form>

            <h1 className="font-bold text-[1rem] my-2">Payment Details</h1>

            <div className="grid grid-cols-3 mt-2 items-center">
              <label htmlFor="mobile">Account Name:</label>
              <input
                type="text"
                id="mobile"
                className="w-[15rem] py-1 border"
                placeholder="H N V PERERA"
                required
              />
            </div>

            <div className="grid grid-cols-3 mt-2 items-center">
              <label htmlFor="mobile">Account Number:</label>
              <input
                type="text"
                id="mobile"
                className="w-[15rem] py-1 border"
                placeholder="1234 **** **** ****"
                required
              />
            </div>

            <div className="grid grid-cols-3 mt-2 items-center">
              <input
                type="text"
                id="mobile"
                className="w-[5rem] py-1 border"
                placeholder="CVC"
              />
              <label htmlFor="mobile">Expire Date:</label>
              <input
                type="date"
                id="mobile"
                className="w-[3rem] py-1 border"
                placeholder="1234 **** **** ****"
                required
              />
            </div>

            <div></div>
          </div>
          <div className="w-[30rem] h-[25rem] bg-orange-500 rounded-xl p-5">
            <h1 className="text-[1.1rem] font-bold">Order Summery</h1>
            <div>
              <div className="flex items-center justify-between">
                <h1>SubTotal</h1>
                <h1>{totalCount}</h1>
              </div>

              <div className="flex items-center justify-between">
                <h1>Discount</h1>
                <h1>-15000</h1>
              </div>

              <div className="flex items-center justify-between">
                <h1>Delivery Fee</h1>
                <h1>+700</h1>
              </div>

              <hr />

              <div className="flex items-center justify-between">
                <h1>Total</h1>
                <h1>{totalCount + 700 - 15000}</h1>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Cart;
