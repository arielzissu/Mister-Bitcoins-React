import React from "react";
import { Link } from "react-router-dom";
import ContactPreview from "./contact-preveiw";

export function ContactList(props) {
  const { contacts } = props;

  return (
    <section className="contact-list-container">
      <ul className="contact-list-contain-prev">
        {contacts.map((contact) => {
          return (
            <Link
              className="contact-list-contain-link-prev"
              to={"/contact/" + contact._id}
              key={contact._id}
            >
              <ContactPreview
                contact={contact}
                key={contact._id}
              ></ContactPreview>
            </Link>
          );
        })}
      </ul>
    </section>
  );
}
export default ContactList;
