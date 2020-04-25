import React, { Component } from "react";
import { connect } from "react-redux";

import {
  loadContact,
  clearContact,
  saveContact,
  deleteContact,
} from "../store/actions/contactActions";
import { ReactComponent as BackImg } from "../assets/svg/back.svg";
import { ReactComponent as DeleteImg } from "../assets/svg/delete.svg";

export class EditPage extends Component {
  state = {
    contact: null,
  };

  componentDidMount() {
    this.loadContact();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadContact();
    }
  }

  componentWillUnmount() {
    this.props.clearContact();
  }

  async loadContact() {
    const { id } = this.props.match.params;
    try {
      await this.props.loadContact(id);
      const { currContact } = this.props;
      this.setState({ contact: { ...currContact } });
    } catch (err) {
      console.log(err);
      this.props.history.push("/contact");
    }
  }

  onSaveHandle = (el) => {
    el.preventDefault();
    this.props.saveContact(this.state.contact);
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
    this.props.deleteContact(this.state.contact._id);
    this.props.history.push("/contact");
  };

  render() {
    const { contact } = this.state;
    if (!contact) return false;
    return (
      <section className="edit-page-main-container">
        <div className="edit-page-main-imgs">
          <BackImg
            className="edit-page-img btn"
            onClick={this.onGoBackClickHandler}
            title="Back"
          />
          {contact._id ? (
            <DeleteImg
              className="edit-page-img btn"
              onClick={this.onDeleteHandle}
              title="Delete"
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

const mapStateToProps = (state) => ({
  currContact: state.contact.currContact,
});

const mapDispatchToProps = {
  loadContact,
  clearContact,
  saveContact,
  deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);
