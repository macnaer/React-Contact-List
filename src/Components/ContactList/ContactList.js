import React from "react";
import "./ContactList.css";

// Component
import ContactItem from "./ContactListItem/ContactItem";

const ContactList = ({ List, onStarChange, onDeleteContact }) => {
  // console.log("ContactList => ", List);

  const item = List.map(item => {
    return (
      <ContactItem
        key={item.id}
        name={item.name}
        address={item.address}
        avatar={item.avatar}
        phone={item.phone}
        gender={item.gender}
        email={item.email}
        star={item.star}
        onStarChange={() => onStarChange(item.id)}
        onDeleteContact={() => onDeleteContact(item.id)}
      />
    );
  });

  return (
    <ul className="list-group pull-down" id="contact-list">
      {item}
    </ul>
  );
};

export default ContactList;
