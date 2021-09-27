import React from 'react';
import './components/forgotpassword.css'
import { Login } from './components/login/login';
// import Heading from './form/header';
import Chefinfo from './form/personalinfo';
import Userinfo from './form/userinfo';
// import Cart from './ordering/cart';
// import Orders from './ordering/orders';
import {BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";
import './form/navbar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
//import  { BrowserRouter } from "react-router-dom";
// import  forgot from "./components/forgot.component";
// import Newpassword from './components/newpassword.component';
import Forgot from './components/forgot.component';
import Checkingresp from './form/checkingresp';



export default function NavigatorInsideSignin()
 {


    return (
        <div className="navi">
            <Router>
              <div className="side-nav">
               <NavLink  to="/form/header" className="links" title="Back to HOME page"> <i className="fa fa-arrow-left" aria-hidden="true"></i> &nbsp; HOME CHEF </NavLink> &nbsp; &nbsp; &nbsp;
               <NavLink activeClassName="active"  to="/" className="links">  Log In </NavLink> &nbsp; &nbsp; &nbsp;
               <NavLink activeClassName="active"  to="/form/userinfo" className="links"> Sign Up </NavLink> &nbsp; &nbsp; &nbsp;
               <NavLink activeClassName="active"  to="/form/personalinfo" className="links" > Register for chef </NavLink> &nbsp; &nbsp; &nbsp;
               <NavLink activeClassName="active" to="/components/forgot.component" className="links"> Forgot password </NavLink> &nbsp; &nbsp; &nbsp;
              </div>

            <Switch className="disp">
               <Route exact path="/" component={Login} />
		       <Route  path="/form/personalinfo" component={Chefinfo}/>
			   <Route  path="/form/userinfo" component={Userinfo }/>
               <Route  path="/components/forgot.component" component={Forgot}/>   
               <Route  path="./form/checkingresp" component={Checkingresp}/>  
                 
	        </Switch>
            </Router> 


        </div>
    )
}
