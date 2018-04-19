import React, { Component } from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/NavBar";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import Users from "./components/Users";
import Home from "./components/Home";

class App extends Component {
  componentDidMount() {
    this.getArticles()
    this.getTopics()
    this.getUsers()
  }
  state = {
    articles: [],
    topics: [],
    users: []
  }
  render() {
    const {articles, users, topics} = this.state;
    return (
      <div className="App">
      <Navbar />
      <Route exact path="/" render={(props) => <Home />}/>
      <Route exact path="/articles" render={(props) => <Articles articles={articles}/>}/>
      <Route exact path="/topics" render={(props) => <Topics topics={topics}/>}/>
      <Route exact path="/users" render={(props) => <Users users={users}/>}/>
      </div>
    );
  }
  getArticles = () => {
    fetch("https://northcoder-news.herokuapp.com/api/articles")
    .then(res => res.json())
    .then(res => {
      this.setState({
        articles: res
      })
    })
  }
  getTopics = () => {
    fetch("https://northcoder-news.herokuapp.com/api/topics")
    .then(res => res.json())
    .then(res => {
      this.setState({
        topics: res
      })
    })
  }
  getUsers = () => {
    fetch("https://northcoder-news.herokuapp.com/api/users")
    .then(res => res.json())
    .then(res => {
      this.setState({
        users: res
      })
    })
  }
}

export default App;
