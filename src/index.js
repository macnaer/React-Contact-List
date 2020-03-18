import React from "react";
import ReactDOM from "react-dom";
import uuid from "uuid";
import "./index.css";

// Components
import ContactList from "./Components/ContactList/ContactList";
import AddContact from "./Components/AddContact/AddContact";

class App extends React.Component {
  state = {
    List: [
      {
        id: uuid(),
        name: "Britney Anders",
        address: "Rivne, Best street",
        avatar: 50,
        phone: "(067)888-77-44",
        gender: "women",
        email: "anders@gmail.com",
        star: true
      },
      {
        id: uuid(),
        name: "Will Smith",
        address: "Lviv, Zamarstunivska 12",
        avatar: 12,
        phone: "(050)888-33-44",
        gender: "men",
        email: "will@smitj.com",
        star: false
      },
      {
        id: uuid(),
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
    // console.log("onStarChange", id);
    this.setState(state => {
      const index = this.state.List.findIndex(elem => elem.id === id);
      // console.log("Index = ", index);
      const tmpList = this.state.List.slice();
      tmpList[index].star = !tmpList[index].star;
      return {
        star: !this.tmpList
      };
    });
  };

  onAddContact = (name, address, telnumber, email, avatar) => {
    let newContact = {
      id: uuid(),
      name: name,
      address: address,
      avatar: avatar,
      phone: telnumber,
      gender: "women",
      email: email,
      star: false
    };

    const newList = [...this.state.List, newContact];
    this.setState(state => {
      return {
        List: newList
      };
    });
  };

  onDeleteContact = id => {
    const index = this.state.List.findIndex(elem => elem.id === id);
    // console.log("Delete contact = ", id);
    // console.log("Delete contact index = ", index);
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
              onDeleteContact={this.onDeleteContact}
            />
            <AddContact onAddContact={this.onAddContact} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
