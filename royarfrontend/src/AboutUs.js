import Navbar from './Navbar'
import ChatWidget from './ChatWidget'

export default function AboutUs(){

  return (
    <div>
      <Navbar/>
      <ChatWidget/>
      <div className="about-container">
        <h1>Who are we?</h1><br/>
        <p>We the Royar team believe our vision can revolutionize the real estate mission in Turkey by
        providing detailed descriptions about real estates in the market and by giving individual consultancy services.</p>
        <br/><h1>Why are we needed?</h1><br/>
        <p>There doesn't exist any platfrom or service that provides detailed information about the surroundings of a real estate,
        the market, or investment opportunities. There is also a shortage of reliable customer oriented real estates in Turkey. </p>
        <br/><h1>What makes us different?</h1><br/>
        <p>We use artificial intelligence and machine learning to find the best choice for you based on your preferences. We also provide broader
        information
        about nearby restraunts, schools, social institutions, and their ratings. Our client oriented approach will ensure a
        wonderful experience for you. </p><br/><br/>
      </div>
    </div>
  )
}
