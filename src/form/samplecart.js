import axios from 'axios'
import React, { Component } from 'react'

export default class Samplecart extends Component 
{

    constructor(props) {
                    super(props)
                
                    this.state = {
                         user: []
                    }
                }

    componentDidMount()
    {
        axios.get("http://localhost:8099/registration/cart")
        .then( res => {
            this.setState( {user : res.data} );
        } )
    }
    render() {
        return (
            <div>
                
                {
                                    this.state.user.map
                                    ( u => 
                                        <tr key = {u.address}>
                                              <td> {u.city}</td>
                                             <td> {u.email} </td>   
                                             
                                             </tr>
                                    )
                                  }
                
            </div>
        )
    }
}
