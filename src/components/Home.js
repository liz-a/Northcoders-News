import React, { Component } from "react";

class Home extends Component {
    render(){
        return (
            <div>
                <p>Homepage!</p>
                <div className="row">
                <div className="col-sm-4">
                <div className="card">
                <div className="card-header p-1 pl-2">Most recent</div>
                </div>
                </div>
                <div className="col-sm-4">
                <div className="card">
                <div className="card-header p-1 pl-2">Most upvoted</div>
                </div>
                </div>
                <div className="col-sm-4">
                <div className="card">
                <div className="card-header p-1 pl-2">Most talked about</div>
                </div>
                </div>
                </div>
                </div>
        )
    }
}

export default Home;