import React, { Component } from "react";
import {Link} from "react-router-dom"

class Topics extends Component {
    render(){
        const {topics} = this.props;
        return (
            <div>
                <p>Topics!</p>
                <div className="container-fluid">
                <div className="row">
                {topics && topics.map(topic => {
                    return (
                    <div key={`${topic._id}`} className="col-sm-4">
                    <div className="card">
                    <Link to={`/topics/${topic.title.toLowerCase()}`}>{topic.title}</Link>
                    </div>
                    </div>
                    )
                })}
                </div>
                </div>
                </div>
        )
    }
}

export default Topics;