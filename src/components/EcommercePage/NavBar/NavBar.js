import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
  Table,
} from "react-bootstrap";
import {
  Cart,
  Cart3,
  DashLg,
  PersonCircle,
  PlusLg,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import logo from "../../../logo.svg";

const NavBar = ({
  loggedInUser,
  cartItems,
  setSearchQuery,
  handleLogout,
  setShowLogin,
  setShowCart,
  cartLength,
  removeFromCart,
  addToCart,
}) => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="position-sticky top-0 start-0 z-3"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} className="App-logo" alt="Logo" height="30" />
          <strong className="fs-2">E-commerce</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">
              <Form className="d-flex align-items-center" inline>
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Form>
            </Nav.Link>
            <Nav.Link href="#">
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="d-inline-flex align-items-center fw-bold"
                >
                  <PersonCircle className="me-2" />{" "}
                  {loggedInUser ? loggedInUser : "Profile"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {loggedInUser ? (
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  ) : (
                    <Dropdown.Item onClick={() => setShowLogin(true)}>
                      Login
                    </Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
            <Nav.Link href="#cart">
              <Dropdown>
                <Dropdown.Toggle
                  variant="primary"
                  id="cart-dropdown"
                  className="d-flex align-items-center position-relative"
                >
                  <Cart className="me-2" />
                  <strong>Cart</strong>{" "}
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                    {cartLength}
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className="end-0 p-0 overflow-auto shadow-lg bg-body-tertiary rounded"
                  style={{
                    left: "initial",
                    width: "max-content",
                    maxHeight: "350px",
                  }}
                >
                  <Table
                    bordered
                    hover
                    style={{ verticalAlign: "middle" }}
                    className="mb-0"
                  >
                    <thead className="position-sticky top-0 shadow table-info">
                      <tr>
                        <th>S. No.</th>
                        <th>Restaurant</th>
                        <th>Price</th>
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <tr key={index}>
                          <td className="text-center">{index + 1}.</td>
                          <td>{item.info.name}</td>
                          <td>{item.info.costForTwo}</td>
                          <td>
                            <Button
                              variant="danger"
                              className="w-50 d-inline-flex align-items-center"
                              onClick={() => removeFromCart(index)}
                            >
                              <DashLg />
                            </Button>
                            <Button
                              variant="success"
                              className="w-50 d-inline-flex align-items-center"
                              onClick={() => addToCart(index)}
                            >
                              <PlusLg />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="position-sticky bottom-0 table-info">
                      <tr>
                        <td colSpan={4} align="center">
                          <Button
                            variant="primary"
                            onClick={() => setShowCart(true)}
                            className="d-flex align-items-center"
                          >
                            <Cart3 className="me-2" /> Go To Cart
                          </Button>
                        </td>
                      </tr>
                    </tfoot>
                  </Table>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
