import Couple from './img/yeniev.jpeg'
import './css/search.css'

export default function SearchAndBackground(){
  return(
    <div>
      <img style={{height: '90%', width: '100%'}} src={Couple} alt="img"/>
      <form id="search" className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Enter an address, neigborhood, city, or ZIP code" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  )
}
