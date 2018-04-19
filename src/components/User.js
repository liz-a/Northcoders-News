import React, { Component } from "react";

class User extends Component {
    render() {
        const {users, username} = this.props;
        const user = users.users.filter(user => user.username === username)[0]
        return (
            <div className="card">
            <div className="row align-centre">{user.name}</div>
            <div className="row align-centre">{user.username}</div>
            <div className="row">
            <img
                        className=" align-centre avatar-size border border-white"
                        src={user.avatar_url}
                        alt="avatar"
                      /></div>

            <div className="row align-centre"> 
            <div className="col-sm-12">
            <div className="row align-centre">Articles by user: !!!</div>
            <div className="row align-centre">Comments by user: !!!</div>
            </div>
            </div>
            </div>
        )
    }
}

export default User;