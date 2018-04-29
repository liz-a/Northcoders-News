import React, { Component } from "react";
import Article from './Article';
import PT from "prop-types";

class Topic extends Component {
    render() {
        const {articles, topics, users, comments, currentTopic} = this.props;
        return (
            <div>
                <div className="container-fluid">
                {topics && articles && users && this.getArticlesByTopic(currentTopic, articles, topics, users,comments)}
                </div>
            </div>
        )
    }
    getArticlesByTopic = (currentTopic, articles, topics, users, comments, deleteComment) => {

        let topicId = topics.map(topic => {
            if(topic.title.toLowerCase() === currentTopic) return topic._id;
        }).filter(id => id !== undefined)[0];
        return (
            <div className="outer">
                {articles.map(article => {
                    if(article.belongs_to === topicId){
                        return (
                            <div className="between-articles" key={article._id}>
                            <div className="card articles-box-width">
                        <Article    article={article}                                    
                                    comments={comments}
                                    topics={topics}
                                    users={users}
                                    />
                        </div>
                        </div>
                        )
                    }
                })}
                </div>
        )
    }
    static propTypes = {
        users: PT.array.isRequired,
        topics: PT.array.isRequired,
        articles: PT.array.isRequired,
        comments: PT.array.isRequired,
        currentTopic: PT.string.isRequired
    }
}

export default Topic;