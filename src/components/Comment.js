import React, { Component } from "react";
import axios from 'axios';

class Comment extends Component {
    state = {
        commentVotes: this.props.votes,
        hideComments: true
    }
    render () {
        const {id, createdBy, body, votes, users} = this.props;
        return (
            <div className="card comment-box">
                <div className="row">
                    <div className="col-md-9">
                        <div className="card comment-user-name" >{this.findUserName(createdBy, users)}</div>
                    </div>
                    <div className="col-md-2 comment-votes">Votes: {this.state.commentVotes}</div>
                    <div className="col-md-1 comment-votes-change">
                            <p><i onClick={(e)=> {this.upVoteComment(id)}} className="far fa-arrow-alt-circle-up"></i> <i onClick={(e)=> {this.downVoteComment(id)}} className="far fa-arrow-alt-circle-down"></i> </p></div>
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
    upVoteComment = (commentId) => {
        axios.put(`https://northcoder-news.herokuapp.com/api/comments/${commentId}?vote=up`)
        .then((res)=> {
            this.setState({
                commentVotes: res.data.comment[0].votes
            })
        })
    }
    downVoteComment = (commentId) => {
        axios.put(`https://northcoder-news.herokuapp.com/api/comments/${commentId}?vote=down`)
        .then((res)=> {
            this.setState({
                commentVotes: res.data.comment[0].votes
            })
        })
    }
}

export default Comment;