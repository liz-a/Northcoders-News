import React, { Component } from "react";
import User from './User';

class Users extends Component {
    render(){
        const {users} = this.props;
        users && console.log(users)
        return (
            <div>
                <div className="container-fluid">
                {users && this.getAllUsers(users)}
                </div>
                </div>
        )
    }
    getAllUsers = (users) => {
        return users.map(user => {
            return (
                <div key={`allUserNav${user._id}`}><User username={user.username} users={users}/></div>
            )
        })
    }
}

export default Users;