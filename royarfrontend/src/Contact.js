import {BiLocationPlus} from 'react-icons/bi'


export default function Contact(){
  return (
    <section id="contact" style={{marginTop: '60px', textAlign: 'center', padding: '50px'}}>

  		<div className="row section-intro">
     		<div className="col-twelve">

     			<h5>Contact</h5>
     			<h1>We'd Love To Hear From You.</h1>

     			<p className="lead">Feel free to contact us.</p>
          <br/>
     		</div>
     	</div>

     	<div className="row section-intro">

     		<div className="col-twelve">

     			<div className="icon">
     				<i className="icon-pin"></i>
     			</div>

     			<h1>Where to find us</h1>
          <BiLocationPlus color="white" size={30}/>

     			<p>
              Rumelifeneri, Sarıyer Rumeli Feneri Yolu, 34450 Sarıyer,
              Istanbul, Turkey <br/>
              </p>

     		</div>

     		<div className="col-four tab-full collapse">

     			<div className="icon">
     				<i className="icon-mail"></i>
     			</div>

     			<h5>Email Us At</h5>

     			<p>royaremlak@royaremlak.com <br/>
  			   </p>

     		</div>

     		<div className="col-four tab-full">

     			<div className="icon">
     				<i className="icon-phone"></i>
     			</div>

     			<h5>Call us at</h5>

     			<p>TR: (+90) 534 234 1233 <br/>
  			   </p>

     		</div>

     	</div>

  	</section>
  )
}
