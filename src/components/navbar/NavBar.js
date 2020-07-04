import React, { useState, useContext } from "react";
import { Link } from "@reach/router";
// import firebase from '../../firebase';
// import { signInWithGoogle } from '../../firebase';
import { Badge } from "antd";
import { Drawer } from "antd";
import {
  MenuOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { AuthContext } from "../../auth/Auth";
import "./NavBar.scss";
import PropTypes from "prop-types";

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

  console.log("BADGE COUNT", badgeCount);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">NATURL</Link>
      </div>
      <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        <span className="navbar-links">
          <Link to="/products">Products</Link>
        </span>
        <span className="navbar-links">
          <Link to="/products-vegan">Vegan</Link>
        </span>
        <span className="navbar-links">
          <Link to="/products-gluten-free">Gluten Free</Link>
        </span>
        <span>
          <Link to="/checkout">
            <Badge
              count={badgeCount}
              title={"Number of Cart Items"}
              offset={[0, 5]}
              style={{
                backgroundColor: "#a1a1a1",
                maxWidth: 2,
                color: "#000000",
              }}
            >
              <ShoppingCartOutlined style={{ fontSize: "20px" }} />
            </Badge>
          </Link>
        </span>

        {currentUser ? (
          <span>
            <Link to="/profile">
              <UserOutlined style={{ fontSize: '20px' }} />
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
          <span>
            <Link onClick={onClose} to="/all-products">
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
        </Drawer>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  itemsInCart: PropTypes.array,
};

export default NavBar;
