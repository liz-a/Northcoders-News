import React, { Component } from "react";
import { Link } from "react-router-dom"

class Navbar extends Component {
  state = {
    hideTopicsMenu: true,
    hideOptionsWrap: true,
    hideUsersMenu: false

  }
  render() {
    const { users, topics } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <Link to="/" className="navbar-brand text-light">{"<Northcoders News/>"}</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link to="/articles" className="nav-link">Articles</Link>
              </li>
              <li className="nav-item">
                <a onClick={this.handleMenuClickTopics} className="nav-link">Topics</a>
              </li>
              <li className="nav-item">
                <a onClick={this.handleMenuClickUsers} className="nav-link">Users</a>
              </li>
              <li className="nav-item" hidden={this.state.hideOptionsWrap}>
                <a className="nav-link">{"<"}</a>
              </li>
                {topics.topics && this.getExtraMenuItemsTopics(topics)}
              <li className="nav-item">
                <a className="nav-link" hidden={this.state.hideOptionsWrap}>{"/>"}</a>
              </li>
            </ul>
          </div>
        </nav>
        <nav hidden={this.state.hideUsersMenu} className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 centre">
            <li className="nav-item">
                <a className="nav-link">{"<"}</a>
              </li>
              {users.users && this.getExtraMenuItemsUsers(users)}
            <li className="nav-item">
                <a className="nav-link">{"/>"}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
  handleMenuClickTopics = (e) => {
    let bool;
    this.state.hideTopicsMenu ? bool = false : bool = true;
    this.setState({
      hideOptionsWrap: bool,
      hideTopicsMenu: bool
    })
  }
  handleMenuClickUsers = (e) => {
    let bool;
    this.state.hideUsersMenu ? bool = false : bool = true;
    this.setState({
      hideUsersMenu: bool
    })
  }
  getExtraMenuItemsTopics = (topics) => {
    return topics.topics.map(topic => {
      const title = topic.title;
      return (
      <li key={topic._id} className="nav-item">
        <Link to={`/topics/${title.toLowerCase()}`} hidden={this.state.hideTopicsMenu} className="nav-link">{title}</Link>
      </li>
      )
    })
  }
  getExtraMenuItemsUsers = (users) => {
    return users.users.map(user => {
      const name = user.name;
      return (
      <li key={user._id} className="nav-item">
        <Link to={`/users/${name.toLowerCase()}`} className="nav-link">{name}</Link>
      </li>
      )
    })
  }
}

export default Navbar;