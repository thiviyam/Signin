
import './App.css';
import './components/forgotpassword.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigatorInsideSignin from './navigator_inside_signin';
import Checkingresp from './form/checkingresp';
import ListMenuContent from './form/listMenuContent';
import Cart from './ordering/cart';
import Orders from './ordering/orders';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Samplecart from './form/samplecart';


function App() {
  return (

    
    <div className="App"> 

       {/* <Samplecart/> */}
         {/* <NavigatorInsideSignin/> */}
         {/* <ListMenuContent/> */}

         {/* <Checkingresp/> */}

     <Router> 
     <Switch>
        
         <Route exact path="/"> <Cart/> </Route>

          <Route path="/ordering/orders"> <Orders/> </Route>
     </Switch>
     </Router>
     
    </div>

    
  );
}

export default App;
