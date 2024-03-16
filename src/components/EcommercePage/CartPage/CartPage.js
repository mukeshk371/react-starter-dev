import React from "react";
import { Table, Button } from "react-bootstrap";
import { DashLg, PlusLg } from "react-bootstrap-icons";

const CartPage = ({ cartItems, removeFromCart, addToCart }) => {
  return (
    <div className="mt-4">
      <h2>Cart Items</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th>Restaurant</th>
            <th>Price</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td className="text-center">{index + 1}</td>
              <td>{item.info.name}</td>
              <td>{item.info.costForTwo}</td>
              <td className="text-center">
                <Button variant="danger" className="d-inline-flex align-items-center" onClick={() => removeFromCart(index)}>
                  <DashLg />
                </Button>
                <Button variant="success" className="ms-2 d-inline-flex align-items-center" onClick={() => addToCart(index)}>
                  <PlusLg />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CartPage;