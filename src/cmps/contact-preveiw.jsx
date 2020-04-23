import React from "react";

export default ({ contact }) => {
  return (
    <section className="contact-prev-container">
      <img src={contact.imgUrl} alt="Profile" />
      <li className="contact-prev-title">{contact.name}</li>
    </section>
  );
};
