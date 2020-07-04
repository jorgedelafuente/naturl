import React, { useState, useContext } from 'react';
import { Link } from '@reach/router';
// import firebase from '../../firebase';
// import { signInWithGoogle } from '../../firebase';
import styled from 'styled-components';
import { Badge } from 'antd';
import { Drawer } from 'antd';
import {
  MenuOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { AuthContext } from '../../auth/Auth';

const StyledNavBar = styled.div`
  /* tablet */
  @media (max-width: 700px) and (min-width: 480px) {
    font-size: 0.75rem;
    .navbar-links {
      display: none;
    }
  }
  /* mobile */
  @media (max-width: 480px) {
    font-size: 0.7rem;
    .navbar-links {
      display: none;
    }
  }
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 40px;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  & a,
  & span {
    margin-right: 1.25rem;
    color: black;
    text-decoration: none;
    &:hover {
      color: #00677d;
    }
  }
  div:nth-child(1) {
    margin-left: 1.25rem;
  }
  div:nth-child(2) {
    margin-right: 1.25rem;
  }

  .Burger-Icon {
    &:hover {
      color: #00677d;
    }
  }

  z-index: 100;
`;

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

  return (
    <StyledNavBar>
      <div>
        <span>
          <Link to="/">NATURL</Link>
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <span className="navbar-links">
          {/* <Link to="/category"
          onClick={()=>filter("Vegan")}
          >Vegan</Link> */}
        </span>
        <span className="navbar-links">
          <Link to="/products">Products</Link>
        </span>
        <span className="navbar-links">
          <Link to="/products-vegan">Vegan</Link>
        </span>
        <span className="navbar-links">
          <Link to="/products-gluten-free">Gluten Free</Link>
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

        <span>
          <Link to="/checkout">
            <Badge
              count={badgeCount}
              title={'Number of Cart Items'}
              offset={[0, 5]}
              style={{
                backgroundColor: '#a1a1a1',
                maxWidth: 2,
                color: '#000000',
              }}
            >
              <ShoppingCartOutlined style={{ fontSize: '20px' }} />
            </Badge>
          </Link>
        </span>

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
    </StyledNavBar>
  );
};

export default NavBar;
