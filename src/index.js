import React from "react";
import ReactDOM from "react-dom";
import uuid from "uuid";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";

// Components
import ContactList from "./Components/ContactList/ContactList";
import AddContact from "./Components/AddContact/AddContact";
import Header from "./Components/Header/Header";
import EditContact from "./Components/EditContact/EditContact";
import NotFound from "./Components/NotFound/NotFound";

class App extends React.Component {
  URL = "https://contactlist-87ffb.firebaseio.com/List.json";

  componentDidMount() {
    this.updateContactList();
  }

  updateContactList = () => {
    fetch(this.URL)
      .then(response => {
        return response.json();
      })
      .then(list => {
        this.setState({
          List: list
        });
      })
      .catch(err => console.log(err));
  };

  state = {
    List: [],
    currentContact: "",
    findContact: ""
  };

  onStarChange = id => {
    this.setState(state => {
      const index = this.state.List.findIndex(elem => elem.id === id);
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
    this.onSaveData(newList);
    // this.setState(state => {
    //   return {
    //     List: newList
    //   };
    // });
  };

  onDeleteContact = id => {
    const index = this.state.List.findIndex(elem => elem.id === id);

    const partOne = this.state.List.slice(0, index);
    const partTwo = this.state.List.slice(index + 1);
    const newList = [...partOne, ...partTwo];
    this.setState(state => {
      return {
        List: newList
      };
    });
  };

  onEditContact = id => {
    const index = this.state.List.findIndex(elem => elem.id === id);
    const currentContact = this.state.List[index];
    this.setState({
      currentContact: currentContact
    });
  };

  async onSaveData(newList) {
    await fetch(this.URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newList)
    })
      .then(responce => {
        console.log("Responce => ".responce);
      })
      .catch(err => console.log("Catch => ", err.Message));
    this.updateContactList();
  }

  onEditCurrentContact = (id, name, address, telnumber, email, avatar) => {
    const index = this.state.List.findIndex(elem => elem.id === id);
    let editedContact = {
      id: id,
      name: name,
      address: address,
      avatar: avatar,
      phone: telnumber,
      gender: "women",
      email: email,
      star: false
    };
    const partOne = this.state.List.slice(0, index);
    const partTwo = this.state.List.slice(index + 1);
    const newList = [...partOne, editedContact, ...partTwo];
    this.setState({
      List: newList
    });
  };

  onSearch = contactName => {
    // console.log("contactName -> ", contactName);
    this.setState({
      findContact: contactName
    });
  };

  onShowContactList = (List, findContact) => {
    if (findContact.length === 0) {
      return List;
    }
    return List.filter(item => {
      return item.name.toLowerCase().indexOf(findContact.toLowerCase()) > -1;
    });
  };

  render() {
    const showContacts = this.onShowContactList(
      this.state.List,
      this.state.findContact
    );
    return (
      <div className="container">
        <div id="card_contacts">
          <div
            id="contacts"
            className="panel-collapse collapse show"
            aria-expanded="true"
          >
            <Router>
              <Header onSearch={this.onSearch} />
              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => (
                    <ContactList
                      List={showContacts}
                      onStarChange={this.onStarChange}
                      onDeleteContact={this.onDeleteContact}
                      onEditContact={this.onEditContact}
                    />
                  )}
                />
                <Route
                  path="/contact"
                  exact
                  render={() => <AddContact onAddContact={this.onAddContact} />}
                />
                <Route
                  path="/edit"
                  exact
                  render={() => (
                    <EditContact
                      currentContact={this.state.currentContact}
                      onEditCurrentContact={this.onEditCurrentContact}
                    />
                  )}
                />
                <Route component={NotFound} />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
