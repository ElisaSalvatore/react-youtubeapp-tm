import React, {Component} from 'react';

import Form from './Form';
import Results from './Results';


//class component
class Body extends Component { 
    render() {
        return (
          <div className='container d-flex flex-column align-items-center py-5 vh-100'>
            <Form />
            <Results />
          </div>  
        )
    }
}

export default Body; 