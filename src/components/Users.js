import React, { Component } from "react";
import User from './User';

class Users extends Component {
    render(){
        const {users} = this.props;
        users.users && console.log(users.users)
        return (
            <div>
                <div className="container-fluid">
                
                {/* {users.users && users.users.map(user => {
                    return (
                    <div key={`${user._id}`} className="col-sm-7 align-centre users">
                    <div className="card">
                    {user.name}
                    </div>
                    </div>
                    )
                })} */}
                {users.users && this.getAllUsers(users)}
                </div>
                </div>
        )
    }
    getAllUsers = (users) => {
        return users.users.map(user => {
            return (
                <div key={`allUserNav${user._id}`}><User username={user.username} users={users}/></div>
            )
        })
    }
}

export default Users;