import React, { Component } from "react";

class User extends Component {


    render() {
        const {users, username} = this.props;
        console.log(users)
        const user = users.filter(user => user.username === username)[0]
        if(!user) return null
        return (
//             <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="{user.avatar_url}" alt="Card image cap"/>
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>


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
            <div className="row align-centre"><button>{`Articles by ${user.username}`}</button></div>
            <div className="row align-centre"><button>{`Comments by ${user.username}`}</button></div>
            </div>
            </div>
            </div>
        )
    }
}

export default User;