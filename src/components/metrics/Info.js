import React from "react";

function Info(props) {

    return (
        <div className="col-12 col-lg-5 p-4 my-2 rounded overflow-hidden shadow">
            <div className="pb-2 mb-3 fw-bold border-bottom border-light">INFO</div>
            <div>
                <strong>Channel Title: </strong>
                <span classname="text-secondary">{props.channelTitle}</span>
            </div>
            <div>
                <strong>Video Title: </strong>
                <span classname="text-secondary">{props.title}</span>
            </div>
            <div>
                <strong>Views: </strong>
                <span classname="text-secondary">{props.views}</span>
            </div>
        </div>
    )
}

export default Info;