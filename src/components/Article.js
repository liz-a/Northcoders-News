import React, { Component } from "react";
import PT from "prop-types";
import Comment from './Comment';
import produce from "immer";
import axios from 'axios';

class Article extends Component {
    state = {
        votes: this.props.article.votes,
        articleComments: this.props.comments,
        showComments: false,
        showAddComment: false,
        newCommentBody: ""
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            articleComments: newProps.comments
        })
    }

    render() {
        const { article, topics, users } = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-md-5">
                        <div className="card article-name" ><h4>{article.title}</h4></div>
                    </div>
                    <div className="col-md-2 article-user">
                        {this.findCreatedBy(article.created_by, article, users)}
                    </div>
                    <div className="col-md-2 article-topic">
                        {this.findBelongsTo(article.belongs_to, article, topics)}
                    </div>
                    <div className="col-md-2">
                        <div className="card article-votes">
                            <h5>Votes: {this.state.votes}</h5></div>
                    </div>
                    <div className="col-md-1">
                        <div className="card article-votes-change">
                            <p><i onClick={(e) => { this.upVoteArticle(article._id, article) }} className="far fa-arrow-alt-circle-up up-vote"></i> <i onClick={(e) => { this.downVoteArticle(article._id, article) }} className="far fa-arrow-alt-circle-down down-vote"></i> </p></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card article-body">
                            {article.body}</div>
                    </div>
                </div>
                <div className="row comments-row">
                    <div className="col-md-11">
                        <div className="card article-comments">
                            <b><p className="comment-link" onClick={(e) => {  this.showComments() }}>Comments...</p></b>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="card article-comments-add">
                            <p><i onClick={(e) => { this.showAddComment() }} className="fas fa-comment add-comment"></i> </p></div>
                    </div>
                </div>


                {this.state.showAddComment &&
                <div className="comment-form-box">
                    <form>
                        <div className="form-row align-items-center">
                            <div className="col-md-11">
                                <label className="sr-only" htmlFor="comment">Comment</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">Comment</div>
                                    </div>
                                    <input onChange={(e) => { this.getCommentBody(e.target.value) }} type="text" className="form-control" id="comment" placeholder="..." value={this.state.newCommentBody} />
                                </div>
                            </div>
                            <div className="col-auto">
                                <button onClick={(e) => { e.preventDefault(); { this.addComment(e, article._id, this.state.newCommentBody) } }} type="submit" className="btn btn-primary mb-2 post-comment-btn">Post</button>
                            </div>
                        </div>
                    </form>
                </div>}

                {this.state.showComments && <div>{this.state.articleComments && this.getCommentsByArticle(article._id, this.state.articleComments, users, this.deleteComment)}</div>}

            </div>

        )
    }
    findCreatedBy = (userId, article, users) => {
        const user = users.filter(user => {
            return user._id === userId
        })[0].name
        return (
            <div className="card article-created-by"><h5>{user}</h5></div>
        )
    }
    findBelongsTo = (topicId, article, topics) => {
        const topic = topics.filter(topic => {
            return topic._id === topicId
        })[0].title
        return (
            <div className="card article-created-by"><h5>{topic}</h5></div>
        )
    }
    getCommentsByArticle = (articleId, articleComments, users, deleteComment) => {
        return (
            <div>{articleComments && articleComments.map(comment => {
                if (comment.belongs_to === articleId) return <div key={comment._id} className="between-comments"><Comment comment={comment} 
                users={users} 
                deleteComment={deleteComment} /></div>
            })}</div>
        )
    }
    showComments = () => {
        let bool;
        this.state.showComments ? bool = false : bool = true;
        this.setState({
            showComments: bool
        })
    }
    showAddComment = () => {
        let bool;
        this.state.showAddComment ? bool = false : bool = true;
        this.setState({
            showAddComment: bool
        })
    }
    upVoteArticle = (articleId, article) => {
        axios.put(`https://northcoder-news.herokuapp.com/api/articles/${articleId}?vote=up`)
        .then((res) => {
            this.setState({
                votes: res.data.article.votes
            })
        })
    }
    downVoteArticle = (articleId, article) => {
        axios.put(`https://northcoder-news.herokuapp.com/api/articles/${articleId}?vote=down`)
        .then((res) => {
            this.setState({
                votes: res.data.article.votes
            })
        })
    }
    deleteComment = (commentId) => {
        let newComments = this.state.articleComments.filter(comment => {
            return comment._id !== commentId
        })
        this.setState({
            articleComments: newComments
        })
        axios.delete(`https://northcoder-news.herokuapp.com/api/comments/${commentId}`)
    }
    getCommentBody = (e) => {
        this.setState({
            newCommentBody: e
        })
    }
    addComment = (e, articleId, comment) => {
        e.preventDefault();
        axios.post(`https://northcoder-news.herokuapp.com/api/articles/${articleId}/comments`, {
            comment: comment
        })
        .then(res => {
            const baseState = this.state.articleComments;
            const nextState = produce(baseState, draftState => {
                draftState.unshift(res.data.commentData)
            })
            this.setState({
                articleComments: nextState,
                newCommentBody: ""
            })
        })
    }
    static propTypes = {
        users: PT.array.isRequired,
        topics: PT.array.isRequired,
        article: PT.object.isRequired,
        comments: PT.array.isRequired
    }
}

export default Article;