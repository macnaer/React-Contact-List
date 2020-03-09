import React, { Fragment } from "react";
import "./ContactList.css";

// Component
import ContactItem from "./ContactListItem/ContactItem";

const ContactList = () => {
  return (
    <Fragment>
      <h1>Contact List </h1>
      <ContactItem />
    </Fragment>
  );
};

export default ContactList;
