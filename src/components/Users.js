import React, { Component } from "react";

class Users extends Component {
    render(){
        const {users} = this.props;
        users.users && console.log(users.users)
        return (
            <div>
                <p>Users!</p>
                <div className="container-fluid">
                <div className="row">
                {users.users && users.users.map(user => {
                    return (
                    <div key={`${user._id}`} className="col-sm-7 align-centre users">
                    <div className="card">
                    {user.name}
                    </div>
                    </div>
                    )
                })}
                </div>
                </div>
                </div>
        )
    }
}

export default Users;