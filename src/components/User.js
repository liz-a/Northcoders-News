import React, { Component } from "react";

class User extends Component {

    render() {
        const {users, username} = this.props;
        const user = users.filter(user => user.username === username)[0]
        if(!user) return null
        return (
            <div className="card user-card" >
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">{user.username}</p>
  <img className="card-img-top card-image-size" src={user.avatar_url} alt="Card image cap"/>
  <div className="card-body">
    <a href="#" className="btn btn-primary user-btn-clr">{`Articles by ${user.username}`}</a>
    <a href="#" className="btn btn-primary user-btn-clr">{`Comments by ${user.username}`}</a>
  </div>

</div>

        )
    }
}

export default User;