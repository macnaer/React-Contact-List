import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Components
import ContactList from "./Components/ContactList/ContactList";

class App extends React.Component {
  state = {
    List: [
      {
        id: 1,
        name: "Britney Anders",
        address: "Rivne, Best street",
        avatar: 50,
        phone: "(067)888-77-44",
        gender: "women",
        email: "anders@gmail.com",
        star: true
      },
      {
        id: 2,
        name: "Will Smith",
        address: "Lviv, Zamarstunivska 12",
        avatar: 12,
        phone: "(050)888-33-44",
        gender: "men",
        email: "will@smitj.com",
        star: false
      },
      {
        id: 3,
        name: "Will Street",
        address: "Odessa, Beribasivska 121",
        avatar: 67,
        phone: "(097)784-77-12",
        gender: "men",
        email: "street@gmail.com",
        star: false
      }
    ]
  };

  onStarChange = id => {
    console.log("onStarChange", id);
  };

  render() {
    return (
      <div className="container">
        <div id="card_contacts">
          <div
            id="contacts"
            className="panel-collapse collapse show"
            aria-expanded="true"
          >
            <h1>Contact list app</h1>
            <ContactList
              List={this.state.List}
              onStarChange={this.onStarChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
