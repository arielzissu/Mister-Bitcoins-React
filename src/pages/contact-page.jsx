import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { loadContacts } from "../store/actions/contactActions";

import ContactList from "../cmps/contact-list";
import ContactFilter from "../cmps/contact-filter";
import { ReactComponent as PlusImg } from "../assets/svg/plus.svg";

export class ContactPage extends Component {
  state = {
    contacts: [],
    filterBy: { term: "" },
  };

  componentDidMount() {
    this.loadContacts();
  }

  loadContacts = () => {
    this.props.loadContacts(this.state.filterBy);
  };

  onFilterHandler = (filterBy) => {
    this.setState((prevState) => {
      return {
        filterBy: {
          ...prevState.filterBy,
          ...filterBy,
        },
      };
    }, this.loadContacts);
  };

  render() {
    const { contacts } = this.props;
    const { filterBy } = this.state;
    return (
      <section className="contact-page-container">
        <h2 className="contact-page-title">Contact Page:</h2>
        <ContactFilter filterBy={filterBy} onFilter={this.onFilterHandler} />
        <ContactList contacts={contacts} />
        <NavLink to="/contact/edit">
          <div className="contact-page-add-btn btn">+</div>
          <PlusImg className="contact-page-add-btn btn" title="Plus" />
        </NavLink>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contact.contacts,
});

const mapDispatchToProps = {
  loadContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
