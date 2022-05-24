import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import { signOutUser } from "../../../firebase-config";
import { auth } from "../../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";

function GroupIcons(props) {
  const navigate = useNavigate();
  const cartSelector = useSelector((state) => state.cart.cart);
  const [active, setActive] = useState(false);
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (curentUser) => {
    setUser(curentUser);
  });

  const [value, setValue] = useState("");

  const changeURL = () => {
    navigate(`/checkout`);
  };

  const handleSearch = () => {
    navigate(`/search/${value}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setValue(event.target.value.trim());
      handleSearch();
    }
  };
  return (
    <>
      <div className="group-icon-header">
        <div className={`input-search-group ${active ? "open" : "close"}`}>
          <input
            onKeyPress={(e) => handleKeyPress(e)}
            onChange={(e) => setValue(e.target.value.trim())}
            className="input-search"
            placeholder="Search..."
          />
          <button onClick={() => handleSearch()} className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>

        <button className="search-icon">
          <i
            onClick={() => setActive(true)}
            className={`fas fa-search ${active ? "close" : "open"}`}
          ></i>
          <i
            onClick={() => setActive(false)}
            className={`diss fa-solid fa-xmark ${active ? "open" : "close"}`}
          ></i>
        </button>

        <button onClick={() => changeURL()} className="cart-icon">
          <div className="cart">
            <i className="fas fa-shopping-cart"></i>
            {cartSelector.length === 0 || (
              <div className="circle-red">{cartSelector.length}</div>
            )}
          </div>
        </button>

        <div className="avatar-user">
          {user?.photoURL ? (
            <img className="avatar-user-img" src={user?.photoURL} />
          ) : (
            <img className="avatar-user-img" src="assets/images/avatar.png" />
          )}
          <div className="login-logout">
            {user?.displayName || user?.email ? (
              <>
                <span className="login-logout-item">
                  <img src={user?.photoURL || "assets/images/avatar.png"} />
                  <span className="name-user">
                    {user?.displayName || user.email}
                  </span>
                </span>
                <hr />
                <span
                  onClick={() => navigate("/login")}
                  className="login-logout-item"
                >
                  <i className="fa-solid fa-arrow-right-arrow-left"></i>
                  Change Account
                </span>

                <span
                  onClick={signOutUser}
                  className="login-logout-item logout"
                >
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  Log out
                </span>
              </>
            ) : (
              <>
                <span
                  onClick={() => navigate("/login")}
                  className="login-logout-item"
                >
                  <i className="fa-solid fa-right-to-bracket"></i>
                  Log in
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default GroupIcons;
