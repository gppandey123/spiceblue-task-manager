import React from "react";
import { useSelector } from "react-redux";
import "./Navbar.css";
const SideNav = () => {
  const { profile } = useSelector((state) => state.user);
  return <>{profile ? <div className="sidenav"></div> : ""}</>;
};

export default SideNav;
