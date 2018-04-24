import React, { Component } from "react";
import Article from './Article';
import PT from "prop-types";

class Articles extends Component {
    render() {
        const props = this.props;
        const { articles, comments, users, topics} = this.props;
        return (
            <div className="outer">
                <div className="container-fluid">
                    {articles && articles.map(article => {
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