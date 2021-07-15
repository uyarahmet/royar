import './css/buttons.css'

export default function ActionMenu() {

  const redirect = () => {
    window.location = "https://royaremlak.com/search"
  }

  return (
      <div className="buttons">
        <button onClick={redirect} id="actionbutton" className="button">Buy a House</button>
        <button onClick={redirect} id="actionbutton" className="button">Sell a House</button>
        <button onClick={redirect} id="actionbutton" className="button">Rent a House</button>
      </div>
  )
}
