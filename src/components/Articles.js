import React, { Component } from "react";
import Article from './Article';

class Articles extends Component {
    render() {
        const props = this.props;
        const { articles } = this.props;
        articles.articles && console.log(articles.articles)
        return (
            <div>
                <p>Articles!</p>
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
                                    <Article article={article} {...props} />
                                </div>
                                </div>
                                )
                                
                            })}
            
                </div>
            </div>
                )
            }
        }
        
export default Articles;