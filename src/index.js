import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route,  Link ,Switch} from 'react-router-dom';

import './index.css';

import Nav from "./Component/Nav";
import Garage from "./Component/Garage";
import Greeting from "./Component/Greet";
import Car from "./Component/Car";
import From from'./Component/Form';

import HoverGreeting from "./Component/HoverGreeting ";

import Home from "./Component/Home";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 {/* <Nav/>
    <Garage/>
    <Greeting/>
  <HoverGreeting/>
<Home/> */}



<From/>
<Router>
<Nav/>

        <nav>
          
     <Link to ="/">Home</Link> |
          <Link to ="/Greet">Greet </Link>
          <Link to ="/Car">Car</Link>
        </nav>

    
  <Switch>
    <Route  exact path="/" component={Home}/>
  <Route path="/Car" component={Car } />
  <Route path="/Greet" component={Greeting } />



  </Switch>
  

</Router>

  </React.StrictMode>
);


reportWebVitals();
