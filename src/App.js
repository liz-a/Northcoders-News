import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
import Navbar from "./components/NavBar";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import Topic from "./components/Topic";
import Users from "./components/Users";
import User from "./components/User";
import Home from "./components/Home";
import axios from "axios";

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
    console.log(users.users)
    return (
      <div className="App">
      <Navbar topics={topics} users={users}/>
      <Route exact path="/" render={(props) => <Home />}/>
      <Route exact path="/articles" render={(props) => <Articles users={users} topics={topics} articles={articles} comments={comments} deleteComment={this.deleteComment}/>}/>
      <Route exact path="/topics/:topic_name" render={(props) => <Topic users={users} comments={comments} articles={articles} topics={topics} currentTopic={props.match.params.topic_name} deleteComment={this.deleteComment}/>}/>
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
  getComments = () => {
    fetch("https://northcoder-news.herokuapp.com/api/comments")
    .then(res => res.json())
    .then(res => {
      this.setState({
        comments: res
      })
    })
  }
  deleteComment = (commentId) => {
    axios.delete(`https://northcoder-news.herokuapp.com/api/comments/${commentId}`)
    // .then(res => res.json())
    .then((res)=> {
      console.log(res)
        this.setState({
          comments: res.data.comments
        })
    })
}
}

export default App;
