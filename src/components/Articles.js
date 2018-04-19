import React, { Component } from "react";
import Article from './Article';
import PT from "prop-types";

class Articles extends Component {
    render() {
        const props = this.props;
        const { articles, comments, users, topics } = this.props;
        // articles.articles && console.log(articles.articles)
        return (
            <div className="outer">
                <div className="container-fluid">
                {/* <div className="row align-centre">
                <div className="col-md-4">
                <div className="card ">Most votes
                </div>
                </div>
                </div> */}
                    {articles.articles && articles.articles.map(article => {
                        return (
                            <div className="between-articles" key={article._id}>
                                <div className="card articles-box-width">
                                    <Article 
                                    article={article}  
                                    comments={comments}
                                    topics={topics}
                                    users={users}
                                    {...props} />
                                </div>
                                </div>
                                )
                                
                            })}
            
                </div>
            </div>
                )
    }
    // static propTypes = {
    //     article: PT.array.isRequired
    // }
}
        
export default Articles;