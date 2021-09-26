import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Link} from "react-router-dom";
// import Newpassword from './newpassword.component';


export default class Forgot extends Component
{

  handleSubmit = e =>{
e.preventDefault();

const data ={
  email :this.email,
  mobile:this.mobile
};
axios.post('forgot', data).then ( res=>{ console.log(res)})
.catch(
  err=>{console.log(err);
  }
)


};
    render()
    {
  return ( 
     <div className="forgotcomponent">
                   <div className="container bg-color=rgb(238,252,252)">
                      <div className="row">
                        <div className="col-md-4"> </div> 
                          <div className="col-md-6 "> <br/>
                            
                              <h4 className="text-center" >Forgot Password?</h4> <br/>
                                           <div className="form-group text-center">
                                                    <form  onSubmit={this.handleSubmit} id="register-form" autoComplete="off" className="form" method="post">
                                                            
                                                                 
                                                                            <span className="input-group-addon "><i className="glyphicon glyphicon-envelope color-blue"></i></span>
                                                                            <div className="row">
                                                                            <p >Reset password Using Email</p>
                                                                            <input id="email" name="email" placeholder="email address" className="form-control"  type="email" onChange={e => this.email = e.target.value}/>
                                                                            </div>
                                                                            <p>---------------------OR----------------------</p>

                                                                            <div className="row">
                                                                            <p>Reset password Using Mobile Number</p>
                                                                            <input type="tel" id="mobile" name="mobile" className="form-control" placeholder="mobile number" onChange={e => this.mobole = e.target.value}/>
                                                                               
                                                                            </div>   
                                                                             <div className="row"></div>                             
                                                                            <div className="row">
                                                                             <p></p>
                                                                              <Link to="/components/newpassword.component"> <input name="recover-submit" className="butn-login" value="VERIFY" type="submit"/> </Link> 
                                                                            </div>
                                                                        
                                                            
                                                      </form>
                                          </div>
                                </div>
                            </div>
                          </div>
                           
                        </div>
                   ); 
    }
}

