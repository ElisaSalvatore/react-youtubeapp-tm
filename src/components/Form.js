import React, { Component } from 'react';

//using class component again because manage state
class Form extends Component {
    render() {
        return (
            <div className='col-lg-8 col-12'>
                <h3 className='text-center'>Video Stats</h3>
                <input class="form-control form-control-lg border border-danger my-4" type="text" placeholder="Enter the video ID" aria-label="form-example" />
            </div>
        )
    }
}

export default Form;