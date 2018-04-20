import React, { Component } from "react";
import User from './User';

class Users extends Component {
    render(){
        const {users, articles, comments, topics} = this.props;
        // users && console.log(users)
        return (
            <div>
                <div className="container-fluid">
                {users && this.getAllUsers(users, comments, articles)}
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
}

export default Users;