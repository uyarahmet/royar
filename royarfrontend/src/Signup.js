import React, {useState, useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import './css/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaUserCircle, FaKey} from "react-icons/fa"
import {TokenContext} from './index'


import SlideShow from './SlideShow'
import SearchAndBackground from './SearchAndBackground'
import ActionMenu from './ActionMenu'
import Contact from './Contact'
import Footer from './Footer'
import Navbar from './Navbar'
import ChatWidget from './ChatWidget'

import royaremlakicon from "./img/royaremlakicon.png"
import axiosInstance from './axios-connection'
import {useCookies} from 'react-cookie'

export default function Signup(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken, deleteToken] = useCookies(['access-token'])
  const [refreshToken, setRefreshToken, deleteRefreshToken] = useCookies(['refresh-token'])
  const [dialog, setDialog] = useState('')


  const registerClicked = () => {
    axiosInstance
          .post(`auth/token/`, {
              username: email,
              password: password,
          })
          .then((res) => {
              var access = res.data.access
              var refresh = res.data.refresh
              setToken('access-token',access)
              setRefreshToken('refresh-token', refresh)
          })
          .catch((err)=>{
            if(err.response.status == 401){
              setDialog("Wrong password, please try again.")
            }else if(err.response.status == 400){
              setDialog("This email has not registered")
            }
          })
  }


    return (
      <>
      <Navbar/>
      <div className="container h-100" style={{position: 'relative', bottom: '150px' , padding:'80px'}}>
    		<div className="d-flex justify-content-center h-100">
    			<div className="user_card" style={{height: '50%'}}>
    				<div className="d-flex justify-content-center">
    					<div className="brand_logo_container">
                	<img src= {royaremlakicon} className="brand_logo" alt="Logo"/>
    					</div>
    				</div>
    				<div className="d-flex justify-content-center form_container">
    					<form>
    						<div className="input-group mb-3">
    							<div className="input-group-append">
                    <span className="input-group-text"><FaUserCircle className="icon" size={20}/></span>
    							</div>
    							<input type="text" name="" className="form-control input_user" placeholder="email" onChange={
                    evt => setEmail(evt.target.value)
                  }/>
    						</div>
    						<div className="input-group mb-3">
    							<div className="input-group-append">
                    <span className="input-group-text"><FaKey className="icon" size={20}/></span>
    							</div>
    							<input type="password" name="" className="form-control input_pass" placeholder="password" onChange={
                    evt => setPassword(evt.target.value)
                  }/>
    						</div>
                <div className="input-group mb-3">
    							<div className="input-group-append">
                    <span className="input-group-text"><FaKey className="icon" size={20}/></span>
    							</div>
    							<input type="password" name="" className="form-control input_pass" placeholder="reenter password" onChange={
                    evt => setPassword(evt.target.value)
                  }/>
    						</div>
    						<div className="form-group">
    							<div id="rememberWrapper" className="custom-control custom-checkbox">
    								<input type="checkbox" className="custom-control-input" id="customControlInline"/>
    								<label id="rememberme" className="custom-control-label" htmlFor="customControlInline">Remember me</label>
    							</div>
    						</div>
    							<div className="d-flex justify-content-center mt-3 login_container">
    				 	<button type="button" onClick={registerClicked} name="button" className="btn btn-primary btn-lg">Sign Up</button>
    				   </div>
    					</form>
    				</div>

            <div style={{textAlign: 'center', position: 'relative', top: '15px', color: 'red'}}>{dialog}</div>

    				<div className="mt-4" style={{margin: '7px', position: 'relative', bottom: '5px'}}>
    					<div className="d-flex justify-content-center links">
    						<a style={{textDecoration: 'none',}} href="#">Forgot your password?</a>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
      <ChatWidget/>
      <Footer/>
      </>
    )
}
