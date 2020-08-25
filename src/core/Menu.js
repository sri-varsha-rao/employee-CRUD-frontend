import React from "react";
import { Link, withRouter } from "react-router-dom";

const currentTab = (history, path) => {//colors based on the present tab
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};

//Menu bar for navigation
const Menu = ({ history }) => (
  <div>
    <ul className="nav nav-tabs bg-dark">
    <li className="nav-item">
            <Link style={currentTab(history, "/")} className="nav-link" to="/">
            Home
            </Link>
            </li>
      
            <li className="nav-item">
            <Link style={currentTab(history,"/admin/dashboard")} className="nav-link" to="/admin/dashboard">
            DashBoard
            </Link>
            </li>

            <li className="nav-item">
            <Link style={currentTab(history, "/about")} className="nav-link" to="/about">
            About
            </Link>
            </li>
          
          
    </ul>
  </div>
);

export default withRouter(Menu);
