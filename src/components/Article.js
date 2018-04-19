import React, { Component } from "react";
import PT from "prop-types";
import Comment from './Comment';
// import {Route} from 'react-router-dom';

class Article extends Component {
    state = {
        hideComments: true
    }
    render() {
        const { article, comments, topics, users } = this.props;
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
                            <p>Votes: {article.votes}</p></div>
                    </div>
                    <div className="col-md-1">
                        <div className="card article-votes-change">
                            <p><i className="far fa-arrow-alt-circle-up"></i> <i className="far fa-arrow-alt-circle-down"></i> </p></div>
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
                        <div className="card article-comments-add-delete">
                            <p><i className="fas fa-comment"></i> <i className="fas fa-comment-slash"></i> </p></div>
                    </div>
                </div>
                    <div hidden={this.state.hideComments}>{comments.comments && this.getCommentsByArticle(article._id, comments, users)}</div>
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
    getCommentsByArticle = (articleId, comments, users) => {
        return (
            <div>{comments.comments && comments.comments.map(comment => {
                if(comment.belongs_to === articleId) return <div className="between-comments"><Comment users={users} createdBy={comment.created_by} body={comment.body} votes={comment.votes} /></div>
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
        article: PT.array.isRequired
    }
}

export default Article;