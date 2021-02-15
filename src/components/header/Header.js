import React, { useContext } from "react";
import "./Header.css";
import { stateContext } from "../../StateProvider";

// Material ui imports:
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

function Header() {
  const globalContext = useContext(stateContext);
  const {
    state: { basket, user },
  } = globalContext;

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <div className="logo__container">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>
      </div>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <span className="headerSearchIcon__container">
          <SearchIcon className="header__searchIcon" />
        </span>
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              {!user ? "Hello, Guest" : `Hello, ${user.email}`}
            </span>

            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>

          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>

          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartOutlinedIcon className="cart__icon" />
            <span
              className={`header__optionLineTwo ${
                basket?.length
                  ? "header__basketCount__red"
                  : "header__basketCount"
              }`}
            >
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
