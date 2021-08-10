import React from "react";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <SideNav />
      <div className="main">{children}</div>
    </div>
  );
}

export default Layout;
