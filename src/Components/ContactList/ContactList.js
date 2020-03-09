import React from "react";
import "./ContactList.css";

// Component
import ContactItem from "./ContactListItem/ContactItem";

const ContactList = () => {
  return (
    <ul className="list-group pull-down" id="contact-list">
      <ContactItem />
    </ul>
  );
};

export default ContactList;
