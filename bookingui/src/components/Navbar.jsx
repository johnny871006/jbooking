import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
  faToriiGate,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="lineOne">
          <div className="left">
            <span className="logo">J.Booking</span>
          </div>
          <div className="right">
            <buton className="navButtonFlag" />
            <button className="navButtonNotif">使用webpack測試</button>
            <button className="navButton">註冊</button>
            <button className="navButton">登入</button>
          </div>
        </div>
        <div className="lineTwo">
          <div className="item active">
            <FontAwesomeIcon icon={faBed}></FontAwesomeIcon>
            <span>住宿</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faPlane}></FontAwesomeIcon>
            <span>航班</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faCar}></FontAwesomeIcon>
            <span>租車</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faToriiGate}></FontAwesomeIcon>
            <span>景點/活動</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faTaxi}></FontAwesomeIcon>
            <span>機場計程車</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
