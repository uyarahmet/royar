
/*
const intro_one = ['please type buy, rent, or sell for us to navigate to your likings.', 'help']
const intro_two = ['where would you like to buy from? Our options are currently istanbul, ankara, izmir, and antalya'
,'where would you like to sell from? our options are currently istanbul, ankara, izmir, and antalya',
'where would you like to rent from? our options are currently istanbul, ankara, izmir, and antalya']
const city = ['antalya','istanbul','ankara','izmir']
*/


export default function messageHandler(prevResp, message){

  if(message==='pizduyar'){
    return "Fuck You."
  }

  message =""+message
  const str = message.toUpperCase()
  console.log(str)
  var response = ''

  if(str.includes("BUY")){
    response = "Where would you like to buy from? Our options are currently Istanbul, Ankara, Izmir, and Antalya"
  }else if(str.includes("RENT")){
    response = "Where would you like to rent from? Our options are currently Istanbul, Ankara, Izmir, and Antalya"
  }
  else if(str.includes("SELL")){
    response = "Where would you like to sell from? Our options are currently Istanbul, Ankara, Izmir, and Antalya"
  }else if(str.includes("ISTANBUL")){
    response = "What would you want in Istanbul? Buy, Rent, or Sell?"
  }
  else if(str.includes("IZMIR")){
    response = "What would you want in Izmir? Buy, Rent, or Sell?"
  }else if(str.includes("ANTALYA")){
    response = "What would you want in Antalya? Buy, Rent, or Sell?"
  }else if(str.includes("ANKARA")){
    response = "What would you want in Ankara? Buy, Rent, or Sell?"
  }


  return response
}
