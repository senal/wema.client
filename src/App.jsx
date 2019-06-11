import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Report } from "./components/Report";
import { Invoice } from "./components/Invoice";
import Customer from "./components/customer/Customer";
import { Login } from "./components/Login";
import { NotFound } from "./components/NotFound";
import { Master } from "./components/Master";
import ProtectedRoute from "./routes/ProtectedRoute";
import Category from "./components/master/category/Category";
import SubCategory from "./components/master/category/SubCategory";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  isAuthenticated = () => {
    if (this.state.user) {
      return true;
    }
    return false;
  };

  handleUser = async user => {
    this.setState({ user });
  };

  render() {
    return (
      <main className="container">
        <Switch>
          <ProtectedRoute
            path="/dashboard"
            isAuthenticated={this.isAuthenticated()}
            component={Dashboard}
          />
          <ProtectedRoute
            path="/invoice"
            isAuthenticated={this.isAuthenticated()}
            component={Invoice}
          />
          <ProtectedRoute
            path="/customer"
            isAuthenticated={this.isAuthenticated()}
            component={Customer}
          />
          <ProtectedRoute
            path="/master"
            isAuthenticated={this.isAuthenticated()}
            component={Master}
          />
          <ProtectedRoute
            path="/category"
            isAuthenticated={this.isAuthenticated()}
            component={Category}
          />
          <ProtectedRoute
            path="/subcategory"
            isAuthenticated={this.isAuthenticated()}
            component={SubCategory}
          />
          <ProtectedRoute
            path="/report"
            isAuthenticated={this.isAuthenticated()}
            component={Report}
          />
          <Route path="/notfound" component={NotFound} />
          <Route
            path="/"
            exact
            component={props => <Login {...props} setUser={this.handleUser} />}
          />
          <Redirect to="/notfound" />
        </Switch>
      </main>
    );
  }
}
