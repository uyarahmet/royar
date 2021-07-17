import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const cardStyle = {width: '350px', height: '200px', margin: '20px', borderColor: 'white'}



export default function Cards(props){

  if(props.listingData == null){
    return (
      <div class="card" style={cardStyle}>
        <img class="card-img-top" style={{maxWidth: '100%', maxHeight: '100%'}} alt="Card" src="" />
        <div class="card-body">
          <h5 class="card-title">price</h5>
          <p class="card-text">bedrooms livingrooms area</p>
        </div>
      </div>
    )
  }

   return(
     <div>
     {props.listingData.map(entry =>

         <div class="card" style={cardStyle}>
           <img class="card-img-top" style={{maxWidth: '100%', maxHeight: '100%'}} alt="Card" src={entry['image']} />
           <div class="card-body">
             <h5 class="card-title">{entry['price']}</h5>
             <p class="card-text">{entry['bedrooms']+ "+" +entry['livingrooms'] + " " + entry['area']}</p>
           </div>
         </div>
   )}
   </div>
 )
}
