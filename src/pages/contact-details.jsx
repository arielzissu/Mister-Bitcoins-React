import React, { Component } from "react";
import { connect } from "react-redux";

import { loadContact } from "../store/actions/contactActions";
import { loadUser } from "../store/actions/UserActions";

import TransferFund from "../cmps/transfer-fund";
import { ReactComponent as BackImg } from "../assets/svg/back.svg";
import { ReactComponent as EditImg } from "../assets/svg/pencil.svg";
import { MoveList } from "../cmps/move-list";

export class ContactDetails extends Component {
  componentDidMount() {
    this.loadContact();
    this.props.loadUser();
  }
  async loadContact() {
    const { id } = this.props.match.params;
    try {
      await this.props.loadContact(id);
    } catch (err) {
      console.log(err);
      this.props.history.push("/contact");
    }
  }

  onBackHandler = () => {
    this.props.history.go(-1);
  };

  onEditHandler = () => {
    this.props.history.push("/contact/edit/" + this.props.contact._id);
  };

  render() {
    const { contact, loggedinUser } = this.props;

    return (
      <section className="contact-details-container">
        <div className="contact-details-main-imgs">
          <div className="contact-details-img btn" onClick={this.onBackHandler}>
            <BackImg title="Back" />
          </div>

          <div className="contact-details-img btn" onClick={this.onEditHandler}>
            <EditImg title="Edit" />
          </div>
        </div>

        <div className="contact-details-container-main">
          <h2>Details Page</h2>
          <img src={contact ? contact.imgUrl : null} alt="Profile" />
          <h3> {contact ? contact.name : "loading..."}</h3>
          <h3> {contact ? contact.email : "loading..."}</h3>
          <h3> {contact ? contact.phone : "loading..."}</h3>
        </div>

        {contact ? <TransferFund contact={contact} /> : ""}
        {contact ? <MoveList contact={contact} user={loggedinUser} /> : ""}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  contact: state.contact.currContact,
  loggedinUser: state.user.loggedinUser,
});

const mapDispatchToProps = {
  loadContact,
  loadUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);
