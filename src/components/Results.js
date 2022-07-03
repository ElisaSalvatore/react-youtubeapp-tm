import React, { Component } from "react";
import Info from "./metrics/Info";
import Tags from "./metrics/Tags";
class Results extends Component {
    render() {
        return (
            <div className="container">
                <div className="d-flex flex-wrap justify-content-around">
                    <Tags tags={this.props.tags}/>
                    <Info title={this.props.title} channelTitle={this.props.channelTitle} views={this.props.views}/>
                </div>
            </div>
        )
    }
}

export default Results;