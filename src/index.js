import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Components
import ContactList from "./Components/ContactList/ContactList";

const App = () => {
  return (
    <div>
      <h1>Contact list app</h1>
      <ContactList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
