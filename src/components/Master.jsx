import React, { Component } from "react";
import NavBar from "../common/NavBar";
import SubNavBar from "./master/SubNavBar";

export class Master extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="row">
          <div className="col-3">
            <SubNavBar />
          </div>
          <div className="col">Hello world</div>
        </div>
        <main className="container" />
      </React.Fragment>
    );
  }
}
