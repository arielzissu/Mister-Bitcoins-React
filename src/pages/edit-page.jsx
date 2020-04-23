import React, { Component } from "react";
import contactService from "../services/contact.service";

export default class EditPage extends Component {
  state = {
    contact: {
      name: "",
      email: "",
      phone: "",
    },
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      const contact = await contactService.getContactById(id);
      this.setState({ contact });
    }
  }

  onSaveHandle = (el) => {
    el.preventDefault();
    contactService.saveContact(this.state.contact);
    this.props.history.push("/contact");
  };

  handleChange = (ev) => {
    const { name, value } = ev.target;
    this.setState((prevState) => {
      return {
        contact: {
          ...prevState.contact,
          [name]: value,
        },
      };
    });
  };

  onGoBackClickHandler = (ev) => {
    this.props.history.go(-1);
  };

  onDeleteHandle = (ev) => {
    contactService.deleteContact(this.state.contact._id);
    this.props.history.push("/contact");
  };

  render() {
    const { contact } = this.state;
    return (
      <section>
        <div className="edit-page-main-imgs">
          <img
            className="edit-page-img btn"
            src="../assets/svg/back.svg"
            onClick={this.onGoBackClickHandler}
            alt="Go Back"
          />
          {contact._id ? (
            <img
              className="edit-page-img btn"
              src="../assets/svg/delete.svg"
              onClick={this.onDeleteHandle}
              alt="Delete Contact"
            />
          ) : (
            ""
          )}
        </div>

        {contact._id ? (
          <section className="edit-page-container">
            <h2>Edit Page</h2>
            <form onSubmit={this.onSaveHandle} className="edit-page-form-main">
              <label>Enter a contact name: </label>
              <input
                type="text"
                value={contact.name}
                name="name"
                onChange={this.handleChange}
              />
              <label>Enter email: </label>
              <input
                type="text"
                value={contact.email}
                name="email"
                onChange={this.handleChange}
              />
              <label>Enter phone number: </label>
              <input
                type="text"
                value={contact.phone}
                name="phone"
                onChange={this.handleChange}
              />
              <button>Save</button>
            </form>
          </section>
        ) : (
          ""
        )}
        {!contact._id ? (
          <section className="edit-page-container">
            <h2>Add Page</h2>
            <form onSubmit={this.onSaveHandle} className="edit-page-form-main">
              <label>Enter a contact name: </label>
              <input
                type="text"
                value={contact.name}
                name="name"
                onChange={this.handleChange}
              />
              <label>Enter email: </label>
              <input
                type="text"
                value={contact.email}
                name="email"
                onChange={this.handleChange}
              />
              <label>Enter phone number: </label>
              <input
                type="text"
                value={contact.phone}
                name="phone"
                onChange={this.handleChange}
              />
              <button>Save</button>
            </form>
          </section>
        ) : (
          ""
        )}
      </section>
    );
  }
}
