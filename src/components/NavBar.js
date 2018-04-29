import React, { Component } from "react";
import { Link } from "react-router-dom";
import PT from "prop-types";

class Navbar extends Component {
  state = {
    hideTopicsMenu: true,
    hideOptionsWrap: true,
    hideUsersMenu: true
  }
  render() {
    const { users, topics } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <Link to="/" onClick={this.hideOptionalMenus} className="navbar-brand nav-nc-text">{"< Northcoders News />"}</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link to="/users" onClick={this.handleMenuClickUsers} className="nav-link nav-text">Users</Link>
              </li>
              <li className="nav-item">
                <Link to="/articles" onClick={this.hideOptionalMenus} className="nav-link nav-text">Articles</Link>
              </li>
              <li className="nav-item">
                <a onClick={this.handleMenuClickTopics} className="nav-link nav-text">Topics</a>
              </li>
              <li className="nav-item" hidden={this.state.hideOptionsWrap}>
                <a className="nav-link kill-hover">{"<"}</a>
              </li>
                {topics && this.getExtraMenuItemsTopics(topics)}
              <li className="nav-item">
                <a className="nav-link kill-hover" hidden={this.state.hideOptionsWrap}>{"/>"}</a>
              </li>
            </ul>
          </div>
        </nav>
        <nav hidden={this.state.hideUsersMenu} className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to="/users" className="navbar-brand text-dark">{"< All Users />"}</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
                <a className="nav-link">{"<"}</a>
              </li>
              {users && this.getExtraMenuItemsUsers(users)}
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
      hideTopicsMenu: bool,
      hideUsersMenu: true
    })
  }
  handleMenuClickUsers = (e) => {
    let bool;
    this.state.hideUsersMenu ? bool = false : bool = true;
    this.setState({
      hideUsersMenu: bool,
      hideOptionsWrap: true,
      hideTopicsMenu: true
    })
  }
  getExtraMenuItemsTopics = (topics) => {
    return topics.map(topic => {
      const title = topic.title;
      return (
      <li key={topic._id} className="nav-item">
        <Link to={`/topics/${title.toLowerCase()}`} hidden={this.state.hideTopicsMenu} className="nav-link nav-text">{title}</Link>
      </li>
      )
    })
  }
  getExtraMenuItemsUsers = (users) => {
    return users.map(user => {
      const username = user.username
      return (
      <li key={user._id} className="nav-item">
        <Link to={`/users/${username.toLowerCase()}`} className="nav-link nav-text">{username}</Link>
      </li>
      )
    })
  }
  hideOptionalMenus = () => {
    this.setState({
      hideOptionsWrap: true,
      hideTopicsMenu: true,
      hideUsersMenu: true
    })
  }
  static propTypes = {
    users: PT.array.isRequired,
    topics: PT.array.isRequired
}
}

export default Navbar;