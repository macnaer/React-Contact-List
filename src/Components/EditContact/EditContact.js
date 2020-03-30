import React from "react";
import { Redirect } from "react-router-dom";
import "./EditContact.css";

class EditContact extends React.Component {
  state = {
    id: this.props.currentContact.id,
    name: this.props.currentContact.name,
    address: this.props.currentContact.address,
    gender: this.props.currentContact.gender,
    phone: this.props.currentContact.phone,
    email: this.props.currentContact.email,
    avatar: this.props.currentContact.avatar,
    isRedirect: false
  };

  getAvatar = event => {
    this.setState({
      avatar: event.target.value
    });
  };

  getName = event => {
    this.setState({
      name: event.target.value
    });
  };
  getTelNumber = event => {
    this.setState({
      phone: event.target.value
    });
  };
  getAddress = event => {
    this.setState({
      address: event.target.value
    });
  };

  getEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  onSendData = event => {
    event.preventDefault();
    const { id, name, address, phone, email, avatar } = this.state;
    // console.log("telNumber => ", phone);
    this.props.onEditCurrentContact(id, name, address, phone, email, avatar);
    this.setState({
      isRedirect: true
    });
  };
  render() {
    const {
      name = "Jane Doe",
      address = "London Capital stret",
      phone = "(098)999-45-67",
      email = "jane@london.com",
      avatar = 1,
      gender = "women"
    } = this.state;
    console.log("Avatar => ", avatar);
    const URL = `https://api.randomuser.me/portraits/${gender}/${avatar}.jpg`;
    if (this.state.isRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="row">
        <div className="col-md-10">
          <form onSubmit={this.onSendData}>
            <input
              type="text"
              value={name}
              className="form-control"
              onChange={this.getName}
              required
            />
            <input
              type="text"
              value={address}
              className="form-control"
              onChange={this.getAddress}
              required
            />
            <input
              type="number"
              min="1"
              max="99"
              value={avatar}
              className="form-control"
              onChange={this.getAvatar}
              required
            />
            <input
              type="text"
              value={email}
              className="form-control"
              onChange={this.getEmail}
              required
            />
            <input
              type="text"
              value={phone}
              className="form-control"
              onChange={this.getTelNumber}
              required
            />
            {/* <input
            type="radio"
            name="gender"
            className="form-check-input"
            value="men"
            id="gender_man"
          />

          <label htmlFor="gender_man" className="form-check-label">
            Men
          </label> */}
            <button className="btn btn-success" type="submit">
              Save chages
            </button>
          </form>
        </div>
        <div className="col-md-2">
          {avatar.length !== 0 ? (
            <img
              className="rounded-circle mx-auto d-block img-fluid edit_photo"
              src={URL}
            />
          ) : (
            <h3>No foto</h3>
          )}
        </div>
      </div>
    );
  }
}
export default EditContact;
