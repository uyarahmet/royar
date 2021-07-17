import Navbar from './Navbar'
import ChatWidget from './ChatWidget'
import {GoogleApiWrapper } from 'google-maps-react';
import {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import royar from './img/royaremlakicon.png'

import axiosInstance from './axios-connection'
import Cards from './Cards'
import MapContainer from './MapContainer'

const containerStyle = {
  position: 'absolute',
  top: '112px',
  right: '0px',
  width: '52.5%',
  height: '85%',
  backgroundColor: 'white',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  textAlign: 'center',
  overflow: 'auto',
  }


export function Search() {
  const [listingData, setListingData] = useState(null);

  useEffect( () => {

      axiosInstance
            .get(`listings/query/`, {

            })
            .then((res) => {
                setListingData(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
  }
)





  return (
    <div>

    <Navbar/>

    <form className="d-flex" style={{ position: 'relative', top: '9px', width: '100%', left: '1%'}}>
      <input className="form-control me-2" type="search" style={{width: '400px', marginRight: '20px'}} placeholder="Enter an address, neigborhood, city, or ZIP code" aria-label="Search"/>
      <button className="btn btn-success" type="submit" style={{marginRight: '10px'}}>Search</button>
      <div class="btn-group" style={{marginRight: '10px'}}>
        <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Price
        </button>
        <div class="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', transform: 'translate3d(0px, 38px, 0px)', top: '0px', left: '0px', willChange: 'transform'}}>
          <p>Action</p>
          <p>Another action</p>
          <p>Something else here</p>
          <div class="dropdown-divider"></div>
          <p>Separated link</p>
        </div>
      </div>
        <div class="btn-group" style={{marginRight: '10px'}}>
          <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Beds & Baths
          </button>
          <div class="dropdown-menu">
            <p>Action</p>
            <p>Another action</p>
            <p>Something else here</p>
            <div class="dropdown-divider"></div>
            <p>Separated link</p>
          </div>
        </div>
        <div class="btn-group" style={{marginRight: '10px'}}>
          <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            More
          </button>
          <div class="dropdown-menu" role="menu" aria-labelledby="dLabel">
            <p>Action</p>
            <p>Another action</p>
            <p>Something else here</p>
            <div class="dropdown-divider"></div>
            <p>Separated link</p>
          </div>
        </div>
          <button className="btn btn-success" type="submit" style={{marginRight: '10px'}}>Create Alert</button>
          <a href="https://royaremlak.com/"><img src={royar} alt="royar" style={{width: '45px', height: '40px', position: 'absolute',left: '95%'}}/></a>
    </form>
    <div className="map-and-cards">

    <MapContainer/>

    <div style={containerStyle} className="cards-container">

      <div class="card-columns" style={{gridTemplateColumns: '350px 350px', display: 'grid', rowGap: '50px', columnGap: '18px'}}>

        <Cards listingData={listingData}/>

      </div>

    </div>

    </div>
    <ChatWidget/>
    </div>
  )

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBzFqVz_IYQJk4WLohrMjK0z508c7vtB_U'
})(Search);
