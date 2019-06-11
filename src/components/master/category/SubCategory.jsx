import React, { Component } from "react";
import SubNavBar from "../SubNavBar";
import NavBar from "../../../common/NavBar";

class SubCategory extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="row">
          <div className="col-3">
            <SubNavBar />
          </div>
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  onChange={() => console.log("sss")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  className="form-control"
                  rows={20}
                  cols={30}
                />
              </div>
              <button type="submit" className="btn btn-primary m-2">
                Save
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => console.log("ssss")}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SubCategory;
