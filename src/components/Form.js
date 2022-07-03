import React, { Component } from 'react';



//using class component again because manage state
class Form extends Component {
    state = {
        term: '',
    }
    handleChange = event => {
        this.setState({
            term: event.target.value,
        })
    }
    
    handleSubmit = event => {
        event.preventDefault(); //evita al form di inviarsi automaticamente al refresh o senza campi compilati
        this.props.handleFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className='col-lg-8 col-12'>
                <h3 className='text-center'>Video Stats</h3>
                <form onSubmit={this.handleSubmit}>
                    <input className="form-control form-control-lg border border-danger my-4" 
                        type="text" 
                        placeholder="Enter the video ID" 
                        aria-label="form-example" 
                        value={this.state.term}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        )
    }
}

export default Form;