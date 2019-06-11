import React from "react";
import NavBar from "../../common/NavBar";
import { getCustomers } from "../../common/services/customerService";
import CustomerManage from "./CustomerManage";

class Customer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      selectedCustomer: {}
    };
  }

  componentDidMount() {
    const title = document.title;
    document.title = title + "- Customer";
    const customers = getCustomers();
    this.setState({ customers });
  }

  handleDelete = customer => {
    const customers = this.state.customers.filter(c => c.id !== customer.id);
    this.setState({ customers });
  };

  handleManage = (e, customer) => {
    e.preventDefault();
    console.log(e);
  };

  handleEdit = customer => {
    this.setState({ selectedCustomer: customer }, () =>
      console.log(`selected customer -->  ${this.state.selectedCustomer.name}`)
    );
  };

  handleCancel = e => {
    e.preventDefault();
    this.setState({
      selectedCustomer: {}
    });
  };

  render() {
    const { customers } = this.state;
    console.log(
      ` selected customer reading from Render --> ${
        this.state.selectedCustomer.name
      }`
    );
    return (
      <React.Fragment>
        <NavBar />
        <CustomerManage
          customer={this.state.selectedCustomer}
          onSubmit={this.handleManage}
          onCancel={this.handleCancel}
        />
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {customers.map(c => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.name}</td>
                  <td>
                    {c.address.number} {c.address.street} {c.address.suburb}
                  </td>
                  <td> {c.phone} </td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => this.handleEdit(c)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.handleDelete(c)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Customer;
