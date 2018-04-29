import React, { Component } from "react";
import Article from './Article';
import PT from "prop-types";

class User extends Component {

    state = {
        showArticles: false
    }

    render() {
        const { users, username, comments, articles, topics } = this.props;
        const user = users.filter(user => user.username === username)[0]
        if (!user) return null
        return (
            <div>
                <div className="card user-card" >
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">{user.username}</p>
                    <img className="card-img-top card-image-size" src={user.avatar_url} alt="Card cap" />
                    <div className="card-body">
                        <a onClick={(e)=>{this.handleArticleClick()}} className="btn btn-primary user-btn-clr">{`Articles by ${user.username}`}</a>
                    </div>
                </div>
                {this.state.showArticles && <div className="outer">
                    <div className="container-fluid">
                        {user && this.getArticlesByUser(user, articles, comments, topics, users)}
                    </div></div>}
                
            </div>
        )
    }
    handleArticleClick = () => {
        let bool;
        this.state.showArticles ? bool = false : bool = true;
        this.setState({
            showArticles: bool
        })
    }
    getArticlesByUser = (currentUser, articles, comments, topics, users) => {
        return (
            <div>
                {articles.map(article => {
                    if (article.created_by === currentUser._id)
                        return <div className="between-articles" key={article._id}>
                            <div className="card articles-box-width">
                                <Article article={article}
                                    comments={comments}
                                    topics={topics}
                                    users={users}
                                />
                            </div>
                        </div>
                })
                }
            </div>
        )
    }
    static propTypes = {
        users: PT.array.isRequired,
        username: PT.string.isRequired,
        topics: PT.array.isRequired,
        article: PT.object.isRequired,
        comments: PT.array.isRequired
    }
}

export default User;