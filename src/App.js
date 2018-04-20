import React, { Component } from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/NavBar";
import Articles from "./components/Articles";
import Topic from "./components/Topic";
import Users from "./components/Users";
import User from "./components/User";
import Home from "./components/Home";

class App extends Component {
  componentDidMount() {
    this.getArticles()
    this.getTopics()
    this.getUsers()
    this.getComments()
  }
  state = {
    articles: [],
    topics: [],
    users: [],
    comments: []
  }
  render() {
    const {articles, users, topics, comments} = this.state;
    return (
      <div className="App">
      <Navbar topics={topics} users={users}/>
      <Route exact path="/" render={(props) => <Home />}/>
      <Route exact path="/articles" render={(props) => <Articles users={users} topics={topics} articles={articles} comments={comments} />}/>
      <Route exact path="/topics/:topic_name" render={(props) => <Topic users={users} comments={comments} articles={articles} topics={topics} currentTopic={props.match.params.topic_name}/>}/>
      <Route exact path="/users" render={(props) => <Users users={users}/>}/>
      <Route exact path="/users/:username" render={(props) => <User username={props.match.params.username} users={users} />}/>
      </div>
    );
  }
  getArticles = () => {
    fetch("https://northcoder-news.herokuapp.com/api/articles")
    .then(res => res.json())
    .then(res => {
      this.setState({
        articles: res.articles
      })
    })
  }
  getTopics = () => {
    fetch("https://northcoder-news.herokuapp.com/api/topics")
    .then(res => res.json())
    .then(res => {
      this.setState({
        topics: res.topics
      })
    })
  }
  getUsers = () => {
    fetch("https://northcoder-news.herokuapp.com/api/users")
    .then(res => res.json())
    .then(res => {
      this.setState({
        users: res.users
      })
    })
  }
  getComments = () => {
    fetch("https://northcoder-news.herokuapp.com/api/comments")
    .then(res => res.json())
    .then(res => {
      this.setState({
        comments: res.comments
      })
    })
  }

}

export default App;
