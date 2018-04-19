import React, { Component } from "react";

class Comment extends Component {
    render () {
        const {createdBy, body, votes, users} = this.props;
        return (
            <div className="card comment-box">
                <div className="row">
                    <div className="col-md-9">
                        <div className="card comment-user-name" >{this.findUserName(createdBy, users)}</div>
                    </div>
                    <div className="col-md-2 comment-votes">Votes: {votes}</div>
                    <div className="col-md-1 comment-votes-change">
                            <p><i className="far fa-arrow-alt-circle-up"></i> <i className="far fa-arrow-alt-circle-down"></i> </p></div>
                    </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card comment-body" >{body}</div>
                    </div>
                    </div>
                </div>
        )
    }
    findUserName = (userId, users) => {
        const user = users.users.filter(user => {
            return user._id === userId
        })[0]
        return (
            <div>{user.name} says:</div>
        )
    }
}

export default Comment;