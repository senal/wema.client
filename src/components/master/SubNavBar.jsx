import React from "react";
import { NavLink } from "react-router-dom";

const SubNavBar = props => {
  return (
    <div className="col">
      <div
        className="nav flex-column nav-pills"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <NavLink className="nav-link" to="/category">
          Manage Category
        </NavLink>
        <NavLink className="nav-link" to="/subcategory">
          Manage Sub Category
        </NavLink>
      </div>
    </div>
  );
};

export default SubNavBar;
