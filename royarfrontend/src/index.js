import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Route, BrowserRouter} from 'react-router-dom'

import AboutUs from './AboutUs'
import Search from './Search'
import Help from './Help'
import Login from './Login'
import Signup from './Signup'



function Router(){

  return (
      <React.StrictMode>
            <BrowserRouter>
              <Route exact path ='/' component={App}/>
              <Route exact path ='/about/' component={AboutUs}/>
              <Route exact path ='/help/' component={Help}/>
              <Route exact path ='/search/' component={Search}/>
              <Route exact path ='/login/' component={Login}/>
              <Route exact path ='/signup/' component={Signup}/>
            </BrowserRouter>
      </React.StrictMode>
  )
}

ReactDOM.render(
  <Router/>,
  document.getElementById('root')
);
