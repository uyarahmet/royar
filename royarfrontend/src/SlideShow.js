import './css/main.css'
import Istanbul from './img/istanbul.png'
import Izmir from './img/izmir.jpeg'
import Antalya from './img/antalya.jpeg'
import Ankara from './img/ankara.jpeg'

export default function SlideShow(){

  return (
    <div>
    <h2 style={{textAlign: 'center', position: 'relative', top: '85px', fontFamily:
    ["Ivar Headline","Ivar Headline Subset","Times New Roman","serif"]}}>Find best places for best prices in the best cities in Turkey</h2>
    <section id="portfolio" style={{width: '100%'}}>

     	<div className="row portfolio-content">
     		<div className="col-twelve">
  	         <div id="folio-wrapper" className="block-1-2 block-mob-full stack">


  	         	<div className="bgrid folio-item">
  	               <div className="item-wrap">
  	               	<img src={Istanbul} alt=''/>
  	                  <a style={{textDecoration: 'none'}} href="https://royaremlak.com/search" className="overlay">
  	                     <div className="folio-item-table">
  	                     	<div className="folio-item-cell">
  		     					       <h3 className="folio-title" style={{textDecorator: 'none'}}>Istanbul</h3>
  		     					   </div>
  	                     </div>
  	                  </a>
  	               </div>
  	        		</div>

  	        	<div className="bgrid folio-item">
  	               <div className="item-wrap">
  	               	<img src={Ankara} alt=''/>
  	               	<a style={{textDecoration: 'none'}} href="https://royaremlak.com/search" className="overlay">
  	                     <div className="folio-item-table">
  	                     	<div className="folio-item-cell">
  	                     		<h3 className="folio-title">Ankara</h3>
  		     					   </div>
  	                     </div>
  	                  </a>
  	               </div>
  	        		</div>

              <div className="bgrid folio-item">
                   <div className="item-wrap">
                    <img src={Izmir} alt=''/>
                    <a style={{textDecoration: 'none'}} href="https://royaremlak.com/search" className="overlay">
                         <div className="folio-item-table">
                          <div className="folio-item-cell">
                            <h3 className="folio-title">Izmir</h3>
                       </div>
                         </div>
                      </a>
                   </div>
                </div>


  	         </div>

             <div className="bgrid folio-item">
                <div className="item-wrap">
                 <img src={Antalya} alt=''/>
                 <a style={{textDecoration: 'none'}} href="https://royaremlak.com/search" className="overlay">
                      <div className="folio-item-table">
                       <div className="folio-item-cell">
                         <h3 className="folio-title">Antalya</h3>
                    </div>
                      </div>
                   </a>
                </div>

             </div>

     		</div>

     	</div>

  	</section>
    </div>
  )
}
