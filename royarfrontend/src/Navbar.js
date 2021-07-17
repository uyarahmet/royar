import {FaUserCircle} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {useState, useEffect} from 'react'
import {useCookies} from 'react-cookie'

export default function Navbar(props) {

  //const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');
  const [token, removeToken] = useCookies(['access-token'])
  const [removeRefreshToken] = useCookies(['refresh-token'])
  const [setDialog] = useState('')

  let logged = props.isLoggedIn
  const [isLoggedIn, setIsLoggedIn] = useState(logged)


  function AuthComponent(props){
    const flag = props.isLoggedIn
    if(flag){
      return (
        <button className="btn btn-success" type="submit" onClick={logoutClicked} style={{position: 'absolute', right: '15px', top: '9px'}}><FaUserCircle style={{position: 'relative', right: '5px', bottom: '1px'}}className="icon" size={20}/>
  Sign Out</button>
      )
    }
    return (
      <button className="btn btn-success" type="submit" onClick={loginClicked} style={{position: 'absolute', right: '15px', top: '9px'}}><FaUserCircle style={{position: 'relative', right: '5px', bottom: '1px'}}className="icon" size={20}/>
Login</button>
    )
  }

  function logoutClicked(){
    removeToken("access-token")
    removeRefreshToken("refresh-token")
    setDialog("You have succesfuly logged out.")
    setIsLoggedIn(false)
  }

  function loginClicked(){
    window.location = "https://royaremlak.com/login"
  }

  useEffect(() => {
    let flag;
    if(token['access-token'] != null){
      flag = true
    }else{
      flag = false
    }
    setIsLoggedIn(flag)
  })

  //TODO: Check token and put sign in or sign out tokens.


  return(
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <a className="navbar-brand" href="https://royaremlak.com/">Royar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav me-auto">
            <a className="nav-link active" aria-current="page" href="https://royaremlak.com/">Home</a>
            <a className="nav-link" href="https://royaremlak.com/buy/">Buy</a>
            <a className="nav-link" href="https://royaremlak.com/sell/">Sell</a>
            <a className="nav-link" href="https://royaremlak.com/rent/">Rent</a>
            <a className="nav-link" href="https://royaremlak.com/help/">Help</a>
            <a className="nav-link" href="https://royaremlak.com/about/">About Us</a>
            <AuthComponent isLoggedIn={isLoggedIn}/>
          </div>
        </div>
        </div>
    </nav>
  )
}
