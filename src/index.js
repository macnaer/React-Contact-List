import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Components
import ContactList from "./Components/ContactList/ContactList";

const App = () => {
  return (
    <div className="container">
      <div id="card_contacts">
        <div
          id="contacts"
          className="panel-collapse collapse show"
          aria-expanded="true"
        >
          <h1>Contact list app</h1>
          <ContactList />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
