import React, { Component } from "react";
import User from './User';
import PT from "prop-types";

class Users extends Component {
    render(){
        const {users, articles, comments, topics} = this.props;
        return (
            <div>
                <div className="container-fluid">
                {users && this.getAllUsers(users, comments, articles, topics)}
                </div>
                </div>
        )
    }
    getAllUsers = (users, comments, articles, topics) => {
        return users.map(user => {
            return (
                <div key={`allUserNav${user._id}`}><User topics={topics} articles={articles} comments={comments} username={user.username} users={users}/></div>
            )
        })
    }
    static propTypes = {
        users: PT.array.isRequired,
        topics: PT.array.isRequired,
        articles: PT.array.isRequired,
        comments: PT.array.isRequired
    }
}

export default Users;