import React from "react";

export function ContactPreview(props) {
  const { contact } = props;
  return (
    <section className="contact-prev-container">
      <img src={contact.imgUrl} alt="Profile" />
      <li className="contact-prev-title">{contact.name}</li>
    </section>
  );
}

export default ContactPreview;
