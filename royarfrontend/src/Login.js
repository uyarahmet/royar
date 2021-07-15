
import Footer from './Footer'
import Navbar from './Navbar'
import ChatWidget from './ChatWidget'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import './css/main.css';
import React, {useState} from 'react';
import 'react-chat-widget/lib/styles.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {FaUserCircle, FaKey} from "react-icons/fa"

import royaremlakicon from "./img/royaremlakicon.png"
import axiosInstance from './axios-connection'
import {useCookies} from 'react-cookie'


export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useCookies(['access-token'])
    //const [refreshToken, setRefreshToken] = useCookies(['refresh-token'])
    const [dialog, setDialog] = useState('')

    let logged;
    if(token['acces-token']){
      logged = true;
    }else{
      logged = false;
    }
    const [isLoggedIn, setIsLoggedIn] = useState(logged)

    function loginClicked(){

        axiosInstance
              .post(`auth/token/`, {
                  username: email,
                  password: password,
              })
              .then((res) => {
                  var access = res.data.access
                  //var refresh = res.data.refresh
                  setToken('access-token',access)
                  //setRefreshToken('refresh-token', refresh)
                  setDialog("Loginned succesfuly.")
                  setIsLoggedIn(true)
              })
              .catch((err)=>{
                setIsLoggedIn(false)
                if(err.response.status === 401){
                  setDialog("Wrong password, please try again.")
                }else if(err.response.status === 400){
                  setDialog("This email has not registered")
                }
              })
    }

  return (
    <>
    <Navbar isLoggedIn = {isLoggedIn}/>
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
						<div className="form-group">
							<div id="rememberWrapper" className="custom-control custom-checkbox">
								<input type="checkbox" className="custom-control-input" id="customControlInline"/>
								<label id="rememberme" className="custom-control-label" htmlFor="customControlInline">Remember me</label>
							</div>
						</div>
							<div className="d-flex justify-content-center mt-3 login_container">
				 	<button type="button" name="button" onClick={loginClicked} className="btn btn-primary btn-lg">Login</button>
				   </div>
					</form>
				</div>

				<div className="mt-4">
					<div className="d-flex justify-content-center links">
						Don't have an account? <a style={{textDecoration: 'none',}} className="ml-2" href="/signup">&nbsp; Sign Up</a>
					</div>

          <div style={{textAlign: 'center', color: 'red'}}>{dialog}</div>

					<div className="d-flex justify-content-center links">
					    Forgot your password?
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
