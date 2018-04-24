import React, { Component } from "react";
import axios from 'axios';

class Comment extends Component {
    state = {
        commentVotes: this.props.votes,
        hideComments: true,
        id: this.props.id,
        createdBy: this.props.createdBy,
        body: this.props.body,
        votes: this.props.votes,
        users: this.props.users
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            commentVotes: newProps.votes,
            id: newProps.id,
            createdBy: newProps.createdBy,
            body: newProps.body,
            votes: newProps.votes,
            users: newProps.users
        })
      }

    render () {
        const {id, createdBy, body, users} = this.state;
        const {deleteComment} = this.props;
        return (
            <div className="card comment-box">
                <div className="row">
                    <div className="col-md-9">
                        <div className="card comment-user-name" >{this.findUserName(createdBy, this.state.users)}</div>
                    </div>
                    <div className="col-md-2 comment-votes">Votes: {this.state.commentVotes}</div>
                    <div className="col-md-1 comment-votes-change">
                            <p><i onClick={(e)=> {this.upVoteComment(id)}} className="far fa-arrow-alt-circle-up up-vote"></i> <i onClick={(e)=> {this.downVoteComment(id)}} className="far fa-arrow-alt-circle-down down-vote"></i> </p></div>
                    </div>
                <div className="row">
                    <div className="col-md-11">
                        <div className="card comment-body" >{body}</div>
                    </div>
                    <div className="col-md-1">
                    <div className="comment-delete"> <i onClick={(e)=> {deleteComment(id)}} className="fas fa-comment-slash delete-comment"></i></div> 
                    </div>
                    </div>
                </div>
        )
    }
    findUserName = (userId, users) => {
        const user = users.filter(user => {
            return user._id === userId
        })[0]
        return (
            <div>{user.name} says:</div>
        )
    }
    upVoteComment = (commentId) => {
        this.setState({
            commentVotes: this.state.commentVotes + 1
        })
        axios.put(`https://northcoder-news.herokuapp.com/api/comments/${commentId}?vote=up`)
    }
    downVoteComment = (commentId) => {
        this.setState({
            commentVotes: this.state.commentVotes - 1
        })
        axios.put(`https://northcoder-news.herokuapp.com/api/comments/${commentId}?vote=down`)
    }
}

export default Comment;