import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import { AuthContext } from "../../auth/Auth";
import { Badge, Drawer } from "antd";
import {
  MenuOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./NavBar.scss";

const NavBar = ({ itemsInCart }) => {
  const [visible, setVisible] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const badgeCount = itemsInCart.reduce(
    (quantity, item) => quantity + item.quantity,
    0
  );

  // console.log(currentUser);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">NATURL</Link>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <div className="navbar-links-group">
            <span className="navbar-links">
              <Link to="/products">Products</Link>
            </span>
            <span className="navbar-links">
              <Link to="/products-vegan">Vegan</Link>
            </span>
            <span className="navbar-links">
              <Link to="/products-gluten-free">Gluten Free</Link>
            </span>
            <span className="navbar-links">
              <Link to="/about">About</Link>
            </span>
            <span className="navbar-links">
              <Link to="/contact">Contact</Link>
            </span>
          </div>

          <div className="mobile-menuitems">
            <Link className="navbar-cart-icons" to="/checkout">
              <Badge
                count={badgeCount}
                title={"Number of Cart Items"}
                offset={[0, 5]}
                style={{
                  backgroundColor: "cadetblue",
                  color: "cadetblue",
                }}
              >
                <ShoppingCartOutlined
                  style={{ fontSize: "20px", marginRight: "16px" }}
                />
              </Badge>
            </Link>

            {currentUser ? (
              <span>
                <Link to="/profile">
                  <UserOutlined style={{ fontSize: "18px" }} />
                </Link>
              </span>
            ) : (
              <span>
                <Link to="/signin">Sign In</Link>
              </span>
            )}

            <MenuOutlined className="Burger-Icon" onClick={showDrawer} />

            <Drawer
              title="NATURL"
              placement="right"
              closable={true}
              onClose={onClose}
              visible={visible}
            >
              <div className="navbar-drawer-hamburguer">
                <span>
                  <Link onClick={onClose} to="/products">
                    Products
                  </Link>
                </span>
                <br />
                <span>
                  <Link onClick={onClose} to="/products-vegan">
                    Vegan
                  </Link>
                </span>
                <br />
                <span>
                  <Link onClick={onClose} to="/products-gluten-free">
                    Gluten Free
                  </Link>
                </span>
                <br />
                <span>
                  <Link onClick={onClose} to="/about">
                    About
                  </Link>
                </span>
                <br />
                <span>
                  <Link onClick={onClose} to="/contact">
                    Contact
                  </Link>
                </span>
                <br />
                <span>
                  <Link onClick={onClose} to="/profile">
                    Wishlist
                  </Link>
                </span>
                <br />
                <span>
                  <Link onClick={onClose} to="/checkout">
                    Cart
                  </Link>
                </span>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  itemsInCart: PropTypes.array,
};

export default NavBar;
