import React from "react";

function Tags(props){
    let tags = props.tags.map((tag, i) => {
        return <li>{tag}</li>    
    })
    return (
        <div className="col-12 col-lg-5 p-4 my-2 rounded overflow-hidden shadow">
            <div className="pb-2 mb-3 fw-bold border-bottom border-light">TAGS</div>
            <ul className="text-secondary py-2">{tags}</ul>
        </div>
    )
}

export default Tags;