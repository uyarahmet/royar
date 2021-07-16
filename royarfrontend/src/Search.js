import Navbar from './Navbar'
import ChatWidget from './ChatWidget'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import royar from './img/royaremlakicon.png'

import f1 from './img/ev1.jpeg'
import f2 from './img/ev2.jpeg'
import f3 from './img/ev3.jpeg'
import f4 from './img/havaliev.jpeg'
import f5 from './img/ev4.jpeg'


const mapStyles = {
  position: 'absolute',
  top: '18px',
  left: '0px',
  width: '47.5%', // 47.5
  height: '85%',
  margin: '0',
  padding: '0'
};

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

const cardStyle = {width: '350px', height: '200px', margin: '20px', borderColor: 'white'}

/*

  */

export class Search extends Component{
//width: '46.48%', height: '10%', margin: '20px', float: 'left'}
  render (){

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

    <Map
    google={this.props.google}
    zoom={14}
    style={mapStyles}
    initialCenter={
      {
        lat: -1.2884,
        lng: 36.8233
      }
    }
    />


    <div style={containerStyle} className="cards-container">

      <div class="card-columns" style={{gridTemplateColumns: '350px 350px', display: 'grid', rowGap: '50px', columnGap: '18px'}}>

        <div class="card" style={cardStyle}>
          <img class="card-img-top" style={{maxWidth: '100%', maxHeight: '100%'}} alt="Card" src={f1} />
          <div class="card-body">
            <h5 class="card-title">13.000TL/ay</h5>
            <p class="card-text">6+2 180m2</p>
          </div>
        </div>

        <div class="card" style={cardStyle}>
          <img class="card-img-top" style={{maxWidth: '100%', maxHeight: '100%'}} alt="Card" src={f2} />
          <div class="card-body">
            <h5 class="card-title">13.400TL/ay</h5>
            <p class="card-text">5+2 190m2</p>
          </div>
        </div>

        <div class="card" style={cardStyle}>
          <img class="card-img-top" style={{maxWidth: '100%', maxHeight: '100%'}} alt="Card" src={f3} />
          <div class="card-body">
            <h5 class="card-title">11.200TL/ay</h5>
            <p class="card-text">5+2 700m2</p>
          </div>
        </div>

        <div class="card" style={cardStyle}>
          <img class="card-img-top" style={{maxWidth: '100%', maxHeight: '100%'}} alt="Card" src={f4} />
          <div class="card-body">
            <h5 class="card-title">13.000TL/ay</h5>
            <p class="card-text">4+2 180m2</p>
          </div>
        </div>

        <div class="card" style={cardStyle}>
          <img class="card-img-top" style={{maxWidth: '100%', maxHeight: '100%'}} alt="Card" src={f5} />
          <div class="card-body">
            <h5 class="card-title">13.400TL/ay</h5>
            <p class="card-text">6+2 190m2</p>
          </div>
        </div>

        <div class="card" style={cardStyle}>
          <img class="card-img-top" style={{maxWidth: '100%', maxHeight: '100%'}} alt="Card" src={f3} />
          <div class="card-body">
            <h5 class="card-title">11.200TL/ay</h5>
            <p class="card-text">5+2 700m2</p>
          </div>
        </div>

        <div class="card" style={cardStyle}>
          <img class="card-img-top" style={{maxWidth: '100%', maxHeight: '100%'}} alt="Card" src={f4} />
          <div class="card-body">
            <h5 class="card-title">3.000TL/ay</h5>
            <p class="card-text">3+1 180m2</p>
          </div>
        </div>

        <div class="card" style={cardStyle}>
          <img class="card-img-top" style={{maxWidth: '100%', maxHeight: '100%'}} alt="Card" src={f2} />
          <div class="card-body">
            <h5 class="card-title">3.400TL/ay</h5>
            <p class="card-text">3+2 190m2</p>
          </div>
        </div>

        <div class="card" style={cardStyle}>
          <img class="card-img-top" style={{maxWidth: '100%', maxHeight: '100%'}} alt="Card" src={f3} />
          <div class="card-body">
            <h5 class="card-title">11.200TL/ay</h5>
            <p class="card-text">5+2 700m2</p>
          </div>
        </div>

        <div class="card" style={cardStyle}>
          <img class="card-img-top" style={{maxWidth: '100%', maxHeight: '100%'}} alt="Card" src={f1} />
          <div class="card-body">
            <h5 class="card-title">3.000TL/ay</h5>
            <p class="card-text">3+1 180m2</p>
          </div>
        </div>

        <div class="card" style={cardStyle}>
          <img class="card-img-top" style={{maxWidth: '100%', maxHeight: '100%'}} alt="Card" src={f2} />
          <div class="card-body">
            <h5 class="card-title">3.400TL/ay</h5>
            <p class="card-text">3+2 190m2</p>
          </div>
        </div>

        <div class="card" style={cardStyle}>
          <img class="card-img-top" style={{maxWidth: '100%', maxHeight: '100%'}} alt="Card" src={f3} />
          <div class="card-body">
            <h5 class="card-title">11.200TL/ay</h5>
            <p class="card-text">5+2 700m2</p>
          </div>
        </div>

        <div class="card" style={cardStyle}>
          <img class="card-img-top" style={{maxWidth: '100%', maxHeight: '100%'}} alt="Card" src={f1} />
          <div class="card-body">
            <h5 class="card-title">3.000TL/ay</h5>
            <p class="card-text">3+1 180m2</p>
          </div>
        </div>

        <div class="card" style={cardStyle}>
          <img class="card-img-top" style={{maxWidth: '100%', maxHeight: '100%'}} alt="Card" src={f2} />
          <div class="card-body">
            <h5 class="card-title">3.400TL/ay</h5>
            <p class="card-text">3+2 190m2</p>
          </div>
        </div>

        <div class="card" style={cardStyle}>
          <img class="card-img-top" style={{maxWidth: '100%', maxHeight: '100%'}} alt="Card" src={f3} />
          <div class="card-body">
            <h5 class="card-title">11.200TL/ay</h5>
            <p class="card-text">5+2 700m2</p>
          </div>
        </div>

        <div class="card" style={cardStyle}>
          <img class="card-img-top" style={{maxWidth: '100%', maxHeight: '100%'}} alt="Card" src={f1} />
          <div class="card-body">
            <h5 class="card-title">3.000TL/ay</h5>
            <p class="card-text">3+1 180m2</p>
          </div>
        </div>

        <div class="card" style={cardStyle}>
          <img class="card-img-top" style={{maxWidth: '100%', maxHeight: '100%'}} alt="Card" src={f2} />
          <div class="card-body">
            <h5 class="card-title">3.400TL/ay</h5>
            <p class="card-text">3+2 190m2</p>
          </div>
        </div>

        <div class="card" style={cardStyle}>
          <img class="card-img-top" style={{maxWidth: '100%', maxHeight: '100%'}} alt="Card" src={f3} />
          <div class="card-body">
            <h5 class="card-title">11.200TL/ay</h5>
            <p class="card-text">5+2 700m2</p>
          </div>
        </div>

      </div>

    </div>

    </div>
    <ChatWidget/>
    </div>
  )
}
}

export default GoogleApiWrapper({
  apiKey: ''
})(Search);
