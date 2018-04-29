import React, { Component } from "react";
import Article from './Article';
import PT from "prop-types";

class Home extends Component {
    render() {
        const { users, articles, comments, topics } = this.props;
        return (
            <div className="outer">
                <div className="container-fluid">
                    <div className="between-articles">
                        <div className="card articles-box-width">
                            <div className="align-centre"><h4>Most talked about...</h4></div>
                            {users.length && articles.length && comments.length && topics.length && this.getTopMostCommentedArticle(articles, comments, topics, users)}
                        </div>
                    </div>
                    <div className="between-articles">
                        <div className="card articles-box-width">
                            <div className="align-centre"><h4>Highest rated...</h4></div>

                            {users.length && articles.length && comments.length && topics.length && this.getTopVotedArticle(articles, comments, topics, users)}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
    getTopVotedArticle = (articles, comments, topics, users) => {
        const topArticle = articles.sort((a, b) => b.votes - a.votes)[0];
        return (
            <div className="card ">
            {topArticle &&
                <Article
                    article={topArticle}
                    comments={comments}
                    topics={topics}
                    users={users} />}
            </div>
        )
    }

    getTopMostCommentedArticle = (articles, comments, topics, users) => {
        const topArticle = articles.sort((a, b) => b.comment_count - a.comment_count)[0];
        return (
            <div className="card ">
            {topArticle &&
                <Article
                    article={topArticle}
                    comments={comments}
                    topics={topics}
                    users={users} />}
            </div>
        )
    }
    static propTypes = {
        users: PT.array.isRequired,
        topics: PT.array.isRequired,
        articles: PT.array.isRequired,
        comments: PT.array.isRequired
    }
}

export default Home;