import React, { Component } from "react";
import Article from './Article';

class Home extends Component {
    render() {
        const { users, articles, comments, topics } = this.props;
        return (
            <div className="outer">
                <div className="container-fluid">
                    <div className="between-articles">
                        <div className="card articles-box-width">
                            <div className="align-centre">Most talked about...</div>
                            {articles && this.getTopMostCommentedArticle(articles, comments, topics, users)}
                        </div>
                    </div>
                    <div className="between-articles">
                        <div className="card articles-box-width">
                            <div className="align-centre">Highest rated...</div>

                            {articles && this.getTopVotedArticle(articles, comments, topics, users)}
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
        // {topArticle && console.log(topArticle.comment_count)}
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
}

export default Home;