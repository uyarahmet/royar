import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Route, BrowserRouter} from 'react-router-dom'

import AboutUs from './AboutUs'
import Buy from './Buy'
import Sell from './Sell'
import Rent from './Rent'
import Help from './Help'
import Login from './Login'
import Signup from './Signup'

import Istanbul from './pages/Istanbul'
import Ankara from './pages/Ankara'
import Izmir from './pages/Izmir'
import Antalya from './pages/Antalya'


function Router(){

  return (
      <React.StrictMode>
            <BrowserRouter>
              <Route exact path ='/' component={App}/>
              <Route exact path ='/about/' component={AboutUs}/>
              <Route exact path ='/buy/' component={Buy}/>
              <Route exact path ='/sell/' component={Sell}/>
              <Route exact path ='/rent/' component={Rent}/>
              <Route exact path ='/help/' component={Help}/>
              <Route exact path ='/istanbul/' component={Istanbul}/>
              <Route exact path ='/ankara/' component={Ankara}/>
              <Route exact path ='/izmir/' component={Izmir}/>
              <Route exact path ='/antalya/' component={Antalya}/>
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
