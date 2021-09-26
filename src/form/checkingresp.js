import axios from 'axios'
import React, { Component } from 'react'

export default class Checkingresp extends Component 
{

    constructor(props) {
        super(props)
    
        this.state = {
             chefid: ""
        }
    }

    componentDidMount()
    {
        axios.get("http://localhost:8099/form/gettingresp")
        .then(res => {

            const chefid = res.data;
            this.setState( {chefid} );
        })

        console.log("entered")
    }
    

    render() {
        return (
            <div>
                <h1> {this.state.chefid} </h1>
            </div>
        )
    }
}
