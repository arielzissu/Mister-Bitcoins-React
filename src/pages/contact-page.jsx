import React, { Component } from "react";
import ContactList from "../cmps/contact-list";
import ContactFilter from "../cmps/contact-filter";
import contactService from "../services/contact.service";
import { NavLink } from "react-router-dom";

export default class ContactPage extends Component {
  state = {
    contacts: [],
    filterBy: {
      term: "",
    },
  };

  async componentDidMount() {
    this.loadContacts();
  }

  loadContacts = async () => {
    const contacts = await contactService.getContacts(this.state.filterBy);
    this.setState({ contacts });
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

  // addHandle = (el) => {
  //   el.histoty.push("/edit");
  // };

  render() {
    return (
      <section className="contact-page-container">
        <h2 className="contact-page-title">Contact Page:</h2>
        <ContactFilter
          filterBy={this.state.filterBy}
          onFilter={this.onFilterHandler}
        />
        <ContactList contacts={this.state.contacts} />
        <NavLink to="/edit">
          <div className="contact-page-add-btn btn">+</div>
        </NavLink>
      </section>
    );
  }
}
