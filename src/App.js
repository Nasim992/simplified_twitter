import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Profile from './components/profile/Profile';
import Notfound from './components/notfound/Notfound';
function App() {
  return ( 
    <Router>
        <Switch>
          
            <Route exact  path="/">
               <Login/>
            </Route>
            <Route exact  path="/home/:id">
               <Home/>
            </Route>
            <Route path="/Login">
               <Login/>
            </Route>
            <Route path="/Register">
               <Register/>
            </Route>
            <Route path="/Profile">
               <Profile/>
            </Route>
            <Route path="*">
              <Notfound/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
