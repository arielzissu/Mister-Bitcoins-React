import React, { Component } from "react";
import contactService from "../services/contact.service";

export default class ContactDetails extends Component {
  state = {
    contact: null,
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const contact = await contactService.getContactById(id);
    this.setState({ contact });
  }

  onGoBackClickHandler = (ev) => {
    this.props.history.go(-1);
  };

  onClickEditHandler = () => {
    this.props.history.push("/edit/" + this.state.contact._id);
  };

  render() {
    const { contact } = this.state;

    return (
      <section className="contact-details-container">
        <div className="contact-details-main-imgs">
          <img
            className="contact-details-img btn"
            src="../assets/svg/back.svg"
            onClick={this.onGoBackClickHandler}
            alt="Go Back"
          />
          <img
            className="contact-details-img btn"
            src="../assets/svg/pencil.svg"
            onClick={this.onClickEditHandler}
            alt="Edit Contact"
          />
        </div>

        <div className="contact-details-container-main">
          <h2>Details Page</h2>
          <img src={contact ? contact.imgUrl : null} alt="Profile" />
          <h3> {contact ? contact.name : "loading..."}</h3>
          <h3> {contact ? contact.email : "loading..."}</h3>
          <h3> {contact ? contact.phone : "loading..."}</h3>
        </div>
      </section>
    );
  }
}
