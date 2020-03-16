import React from "react";
import "./AddContact.css";

class AddContact extends React.Component {
  state = {
    name: null,
    address: null,
    gender: "men"
  };

  getName = event => {
    this.setState({
      name: event.target.value
    });
  };
  getAddress = event => {
    this.setState({
      address: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onAddContact(this.state.name, this.state.address);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            onChange={this.getName}
          />
          <input
            type="text"
            placeholder="Address"
            className="form-control"
            onChange={this.getAddress}
          />
          <input
            type="radio"
            name="gender"
            className="form-check-input"
            value="men"
            id="gender_man"
          />

          <label htmlFor="gender_man" className="form-check-label">
            Men
          </label>
          <button className="btn btn-success" type="submit">
            Add new contact
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
