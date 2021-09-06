import React, { Component } from 'react'
import axios from 'axios';
import Alert from 'react-bootstrap/Alert'
export class Alert extends Component {

    render(){

        return(
            <Alert key={idx} variant={variant}>
            This is a {variant} alert—check it out!
          </Alert>
            
        )
    }
}

export default Alert;








