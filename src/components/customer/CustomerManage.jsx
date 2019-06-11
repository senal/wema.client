import React, { Component } from "react";

class CustomerManage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: {
        id: 0,
        name: "",
        address: {
          number: "",
          street: "",
          suburb: "",
          postCode: "",
          state: ""
        },
        phone: ""
      }
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.customer.id !== this.props.customer.id) {
      this.setState({ customer: this.props.customer });
    }
  }

  handleSubmit = e => {
    this.props.onSubmit(e, this.state.customer);
  };

  handleChange = e => {
    const { customer } = this.state;
    customer[e.currentTarget.name] = e.currentTarget.value;
    this.setState({
      customer: customer
    });
  };

  onCancel = () => {
    this.setState({
      customer: {
        id: 0,
        name: "",
        address: {
          number: "",
          street: "",
          suburb: "",
          postCode: "",
          state: ""
        },
        phone: ""
      }
    });
  };

  render() {
    const { customer } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={this.state.customer.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <h6>Address</h6>
            </div>
            <div className="form-group">
              <label htmlFor="address">Number</label>
              <input
                type="text"
                id="number"
                name="number"
                className="form-control"
                value={this.state.customer.address.number}
                onChange={() => console.log("sss")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Suburb</label>
              <input
                type="text"
                id="suburb"
                name="surburb"
                className="form-control"
                value={this.state.customer.address.suburb}
                onChange={() => console.log("sss")}
              />
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="form-control"
                  value={customer.phone}
                  onChange={() => console.log("sss")}
                />
              </div>
            </div>
            <div>
              <div className="form-group">
                <label htmlFor="address">Street</label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  className="form-control"
                  value={this.state.customer.address.street}
                  onChange={() => console.log("sss")}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary m-2">
              Save
            </button>
            <button className="btn btn-secondary" onClick={this.onCancel}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default CustomerManage;
