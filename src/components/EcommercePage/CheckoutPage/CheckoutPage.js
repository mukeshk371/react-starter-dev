import React from "react";
import { Table, Button } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const CheckoutPage = ({ cartItems, removeFromCart }) => {
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="mt-4">
        <p>Your cart is empty.</p>
        <Link to="/cart-page" className="btn btn-primary">
          <ArrowLeft/> Back to Cart
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <Link to="/cart" className="btn btn-primary mb-3 d-inline-flex align-items-center">
        <ArrowLeft/> Back to Cart
      </Link>
      <h2>Checkout Details</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Restaurant</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.info.name}</td>
              <td>{item.info.costForTwo}</td>
              <td>
                <Button variant="danger" onClick={() => removeFromCart(index)}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-end">
        <Button variant="success">Place Order</Button>
      </div>
    </div>
  );
};

export default CheckoutPage;
