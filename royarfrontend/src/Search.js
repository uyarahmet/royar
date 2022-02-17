import Navbar from './Navbar'
import ChatWidget from './ChatWidget'
import {GoogleApiWrapper } from 'google-maps-react';
import {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import createReactClass from 'create-react-class'
import {Dropdown, Input} from 'semantic-ui-react'


import royar from './img/royaremlakicon.png'

import axiosInstance from './axios-connection'
import Cards from './Cards'
import MapContainer from './MapContainer'

import FilterSection, {More, BedsAndBaths, Price, Alert} from './FilterBar'



function Comp(){
  return (
    <div>
      <More/>
      <BedsAndBaths/>
      <Price/>
      <Alert/>
    </div>
  )
}

const containerStyle = {
  position: 'absolute',
  top: '100px',
  right: '0px',
  width: '30%', // changed it from 70
  height: '85%',
  backgroundColor: 'white',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  textAlign: 'center',
  overflow: 'auto',
  }




export function Search() {


  const [listingData, setListingData] = useState(null);
  const [filters, setFilters] = useState([])

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

//<Navbar/>
//<FilterSection/>

  return (
    <div>
    <Navbar/>
      <div className="map-and-cards">
        <MapContainer/>
        <div style={containerStyle} className="cards-container">
          <div class="card-columns" style={{gridTemplateColumns: '350px 350px', display: 'grid', rowGap: '50px', columnGap: '18px'}}>
            <Cards listingData={listingData}/>
          </div>
        </div>
      </div>
    </div>
  )

}

/*
<div className="map-and-cards">
  <MapContainer/>
  <div style={containerStyle} className="cards-container">
    <div class="card-columns" style={{gridTemplateColumns: '350px 350px', display: 'grid', rowGap: '50px', columnGap: '18px'}}>
      <Cards listingData={listingData}/>
    </div>
  </div>
</div>

<ChatWidget/>
*/

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBzFqVz_IYQJk4WLohrMjK0z508c7vtB_U'
})(Search);
