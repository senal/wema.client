import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { User } from "../models/User";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      account: {
        username: "ranga@ranga.com",
        password: ""
      }
    };
  }

  componentDidMount() {
    const title = document.title;
    document.title = title + "- Login";
  }

  handleSubmit = event => {
    event.preventDefault();
    this.login(this.state.account);
  };

  handleOnChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
    this.login(this.state.account.username, this.state.account.password);
  };

  login = ({ username, password }) => {
    const { history } = this.props;
    if (username === "ranga" && password === "ranga") {
      const user = new User(1, "Ranga", "Fernando");
      this.props.setUser(user);
      history.replace("/dashboard");
    }
  };

  render() {
    const account = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">username:</label>
            <input
              type="text"
              name="username"
              id="username"
              value={account.username}
              className="form-control"
              onChange={this.handleOnChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={account.password}
              className="form-control"
              onChange={this.handleOnChange}
            />
          </div>
          <input type="submit" value="Login" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}
