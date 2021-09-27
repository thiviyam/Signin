import React, { Component } from 'react';
import './orders.css';
import Carddetails from './carddetails';
import Bhim from './bhim';
import axios from 'axios';
import upilogo from './upilogo.svg';
import gpaylogo from './gpaylogo.png'
import paytmlogo from './apaytmlogo.png';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

export default class Orders extends Component
{

   constructor(props) {
       super(props)
   
       this.state = {
             userData: []
       }
   }
   
    componentDidMount()
    {
        axios.get("http://localhost:8099/registration/cart")
        .then(res => {
            this.setState( {userData : res.data} );
        })

        console.log("entered")
    }

render() {
    return (
        <div className="body-order">  
         <form action="#" method="post"> 
           	<span  className="title-color"><i className="fa fa-map-marker color-primary icon"></i> &nbsp;  &nbsp; Deliver to   </span>
               <span className="address-align"> 
                                 {
                                    this.state.userData.map
                                    ( u => 
                                        <ul key = {u.address} id="position">
                                              <li> {u.username}</li>
                                              <li> {u.address}</li>
                                              <li> {u.city}</li>
                                              <li> {u.state}</li>
                                             <li> {u.pincode} </li>   
                                             
                                             </ul>
                                    )
                                  }
               </span>   
            <br/> <p></p>

            <span className="title-color"> <i className="fa fa-phone  icon"></i>  &nbsp;  &nbsp; Phone no </span>
                                  {
                                    this.state.userData.map
                                    ( u => 
                                        <ul key = {u.address} id="position">
                                             <li> +91 {u.phoneno} </li>   
                                             
                                             </ul>
                                    )
                                  }
            <br/> <p></p>

            <span className="title-color"> <i className="fa fa-rupee icon"></i> &nbsp;  &nbsp; Grand Total </span>
              <span className="address-align"> <i className="fa fa-rupee    "></i> 2180.00</span>
             <i className="fas fa-rupee-sign    "></i>


              <br/>  <br/> <br/> <br/>

            <div >
               <h3 className="title-color"> Payment Method </h3>
                <div className="payment-border">
                   
                 <input type="radio"  name= "payment" required/>  <label className="subtitle "> card payment <i className="fa fa-credit-card icon" aria-hidden="true"></i> </label> <br/>
                  <br/>   <Router>
                           <Link exact to = "/carddetails" className="link">Debit/Credit/ATM card  <i className="fa fa-credit-card icon" aria-hidden="true"></i> </Link> <br/>
                           
                       <Switch>
                               <Route exact path = "/carddetails" component={Carddetails}></Route>
                               
                       </Switch>
                    </Router>
           <br/> <br/>     <input type="radio"  name= "payment" required/>  <label className="subtitle "> UPI <img className="image" src={upilogo} alt=""/> </label> <br/> 

                     <Router>
                           <Link exact to = "#" className="link pay-mode">Google Pay <img className="imagegpay" src={gpaylogo} alt=""/> </Link> 
                           <Link exact to = "/bhim" className="link pay-mode">BHIM <img className="image" src={upilogo} alt=""/> </Link>  
                           <Link exact to = "#" className="link pay-mode">Paytm <img className="image" src={paytmlogo} alt=""/> </Link>  
                           
                       <Switch>
                               
                               <Route exact path = "/bhim" component={Bhim}></Route>
                               
                               
                       </Switch>
                    </Router>

              <br/> <br/>  <input type="radio"  name= "payment" required/>  <label className="subtitle "> NetBanking <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bank icon" viewBox="0 0 16 16">  <path d="M8 .95 14.61 4h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.379l.5 2A.5.5 0 0 1 15.5 17H.5a.5.5 0 0 1-.485-.621l.5-2A.5.5 0 0 1 1 14V7H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 4h.89L8 .95zM3.776 4h8.447L8 2.05 3.776 4zM2 7v7h1V7H2zm2 0v7h2.5V7H4zm3.5 0v7h1V7h-1zm2 0v7H12V7H9.5zM13 7v7h1V7h-1zm2-1V5H1v1h14zm-.39 9H1.39l-.25 1h13.72l-.25-1z" /> </svg>
                                                                            </label> <br/>

         <br/>       <input type="radio"  name= "payment" required/>  <label className="subtitle "> Pay on Delivery(POD) <i className="fa fa-money icon" aria-hidden="true"></i> </label> <br/>
                </div>

            </div> <br/> <br/>
         
               {/* <Router>
                      <Link exact to="/cart "> <button type="submit" className="buttonpay" > Pay and Place Order</button> </Link>
                      <Switch>
                          <Route exact path="/orders" component={Orders}></Route>
                      </Switch>
                  </Router>
               */}

                <button type="submit" className="buttonpay" > Pay and Place Order</button>
           </form> 
        </div>

       
    )
}
}