import React, { Component } from "react";

class Article extends Component {

    render() {
        const { article } = this.props;
        return (
            <div>
            <div className="row">
                <div className="col-md-5">
                <div className="card article-name" >{article.title}</div>
                </div>
                <div className="col-md-2">
                <div className="card article-created-by">{article.created_by}</div>
                </div>
                <div className="col-md-2">
                <div className="card article-belongs-to">{article.belongs_to}</div>
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
                 <p>Comments...</p></div>
                 </div>
                 <div className="col-md-1">
                 <div className="card article-comments-add-delete">
                 <p><i className="fas fa-comment"></i> <i className="fas fa-comment-slash"></i> </p></div>
                 </div>
             </div>
            </div>

        )
    }
}

export default Article;