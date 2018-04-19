import React, { Component } from "react";
import Article from './Article';

class Topic extends Component {
    render() {
        const {articles, topics, currentTopic} = this.props;

        return (
            <div>
                <div className="container-fluid">
                {topics.topics && articles.articles && this.getArticlesByTopic(currentTopic, articles, topics)}
                </div>
                </div>
        )
    }
    getArticlesByTopic = (currentTopic, articles, topics) => {
        let topicId = topics.topics.map(topic => {
            if(topic.title.toLowerCase() === currentTopic) return topic._id;
        }).filter(id => id !== undefined)[0];
        return (
            <div>
                {articles.articles.map(article => {
                    if(article.belongs_to === topicId){
                        return (
                            <div className="between-articles" key={article._id}>
                            <div className="card articles-box-width">
                        <Article article={article}/>
                        </div>
                        </div>
                        )
                    }
                })}
                </div>
        )
    }
}

export default Topic;