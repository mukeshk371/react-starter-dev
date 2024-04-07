import React from "react";
import { ArrowLeft, DashLg, PlusLg } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const CartPage = ({ cartItems, removeFromCart, addToCart }) => {
  return (
    <div className="mt-4">
      <Link to="/" className="btn btn-primary mb-3 d-inline-flex align-items-center">
        <ArrowLeft />Back to E-commerce Page
      </Link>
      <h2>Cart Items</h2>
      <table className="w-full border-collapse border border-black">
        <thead className="bg-slate-300 text-center">
          <tr>
            <th className="text-center p-[10px] border border-black">#</th>
            <th className="border border-black p-[10px]">Restaurant</th>
            <th className="border border-black p-[10px]">Price</th>
            <th className="text-center border border-black p-[10px]">Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td className="text-center p-[10px] border border-black">{index + 1}</td>
              <td className="border border-black p-[10px]">{item.info.name}</td>
              <td className="border border-black p-[10px]">{item.info.costForTwo}</td>
              <td className="text-center border border-black md:p-[10px]">
                <button className="bg-red-600 py-[7px] px-[12px] text-white rounded" onClick={() => removeFromCart(index)}>
                  <DashLg />
                </button>
                <button className="bg-green-600 py-[7px] px-[12px] text-white rounded ml-[10px]" onClick={() => addToCart(index)}>
                  <PlusLg />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center p-[20px]">
        <Link to="/checkout" className="bg-green-600 py-[7px] px-[12px] text-white rounded inline-flex no-underline">Checkout</Link>
      </div>
    </div>
  );
};

export default CartPage;
