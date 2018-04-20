import React, { Component } from "react";
import PT from "prop-types";
import Comment from './Comment';
// import {Route} from 'react-router-dom';
import axios from 'axios';

class Article extends Component {
    state = {
        votes: this.props.article.votes,
        articleComments: this.props.comments.comments,
        hideComments: true
    }

    render() {
        const { article, comments, topics, users, deleteComment } = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-md-5">
                        <div className="card article-name" >{article.title}</div>
                    </div>
                    <div className="col-md-2 article-user">
                        {this.findCreatedBy(article.created_by, article, users)}
                    </div>
                    <div className="col-md-2 article-topic">
                        {this.findBelongsTo(article.belongs_to, article, topics)}
                    </div>
                    <div className="col-md-2">
                        <div className="card article-votes">
                            <p>Votes: {this.state.votes}</p></div>
                    </div>
                    <div className="col-md-1">
                        <div className="card article-votes-change">
                            <p><i onClick={(e) => { this.upVoteArticle(article._id, article) }} className="far fa-arrow-alt-circle-up"></i> <i onClick={(e) => { this.downVoteArticle(article._id, article) }} className="far fa-arrow-alt-circle-down"></i> </p></div>
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
                            <p onClick={(e) => { this.showComments() }}>Comments...</p>
                            {/* <Route path={`/${article._id}/comments`} render={()=><div>COMMENTS</div>}/> */}
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="card article-comments-add">
                            <p><i className="fas fa-comment"></i> </p></div>
                    </div>
                </div>
                <div hidden={this.state.hideComments}>{this.state.articleComments && this.getCommentsByArticle(article._id, this.state.articleComments, users, this.deleteComment)}</div>
            </div>

        )
    }
    findCreatedBy = (userId, article, users) => {
        const user = users.users.filter(user => {
            return user._id === userId
        })[0].name
        return (
            <div className="card article-created-by">{user}</div>
        )
    }
    findBelongsTo = (topicId, article, topics) => {
        const topic = topics.topics.filter(topic => {
            return topic._id === topicId
        })[0].title
        return (
            <div className="card article-created-by">{topic}</div>
        )
    }
    getCommentsByArticle = (articleId, articleComments, users, deleteComment) => {
        // console.log(articleComments)
        return (
            <div>{articleComments && articleComments.map(comment => {
                if (comment.belongs_to === articleId) return <div key={comment._id} className="between-comments"><Comment id={comment._id} users={users} createdBy={comment.created_by} body={comment.body} votes={comment.votes} deleteComment={deleteComment} /></div>
            })}</div>
        )
    }
    showComments = (articleId, comments) => {
        let bool;
        this.state.hideComments ? bool = false : bool = true;
        this.setState({
            hideComments: bool
        })
    }
    static propTypes = {
        article: PT.object.isRequired
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
        axios.delete(`https://northcoder-news.herokuapp.com/api/comments/${commentId}`)
            // .then(res => res.json())
            .then((res) => {
                console.log(res)
                this.setState({
                    articleComments: res.data.comments
                })
            })
    }
}

export default Article;