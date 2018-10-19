import React, { Component } from "react";
import "./App.css";
import Register from "./components/register";
import ListContacts from "./components/ListContacts";
import login from "./components/login";
import profile from "./components/profile";
import { Switch, Route, Link } from "react-router-dom"; // import the react-router-dom components

export const contacts = [
  {
    id: 4,
    name: "Eve Holt",
    email: "Holt@gmail.com",
    Result: "90%",
    avatarURL:
      "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
  },
  {
    id: 5,
    name: "Charles Morris",
    email: "Morris @gmail.com",
    Result: "65%",

    avatarURL:
      "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
  },
  {
    id: 6,
    name: "Tracey Ramos",
    email: "Ramos@gmail.com",
    Result: "99%",

    avatarURL:
      "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
  }
];

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" />
      <Route exact path="/1" component={profile} />
      <Route exact path="/2" component={Register} />
      <Route exact path="/3" component={login} />
    </Switch>
  </main>
);
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { path: "/1", text: <i class="fas fa-user-alt fa-2x"></i>, isActive: false },
        { path: "/2", text:<i class="fas fa-registered fa-2x"></i>, isActive: false },
        { path: "/3", text: <i class="fas fa-sign-in-alt fa-2x"></i>, isActive: false }
      ]
    };
  }

  handleClick(i) {
    const links = this.state.links.slice();
    for (const j in links) {
      links[j].isActive = i == j;
    }
    this.setState({ links: links });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light  bg-light">
          <Link className="navbar-brand" to="/">
            All Students
          </Link>
          <ul className="navbar-nav">
            {this.state.links.map((link, i) => (
              <NavLink
                path={link.path}
                text={link.text}
                isActive={link.isActive}
                key={link.path}
                onClick={() => this.handleClick(i)}
              />
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}
class NavLink extends Component {
  render() {
    return (
      <li className={"nav-item " + (this.props.isActive ? "active" : "")}>
        <Link
          className="nav-link"
          to={this.props.path}
          onClick={() => this.props.onClick()}
        >
          {this.props.text}
        </Link>
      </li>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Route
          exact
          path="/"
          render={({ history }) => <ListContacts contacts={contacts} />}
        />
      </div>
    );
  }
}

export default App;
