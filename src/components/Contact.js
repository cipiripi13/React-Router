import { Link, } from "react-router-dom";
import { useNavigate } from 'react-router'

export const Contact = () => {
  //mada umesto Link komponente mozemo da koristimo useNavigate koju importujemo iz react-router
  //ovo je isto hook koji nam vraca neku funkciju sa kojom mozemo da se krecemo kroz nasu aplikaciju
  //i prima string kao parametar gde nam kaze na koju app zelimo da odemo
  const navigate = useNavigate()
  return (
    <div>
      {/* <ul> */}
        {/* II NACIN */}
        {/* ovde kazemo sta hocemo da uradi, a to je na klik da pozove ovu f-ju(ona ne prima nikakve parametre vec samo navigira) navigate i prosledimo gde zelimo da ide 
--- ovi li elementi su ujedno i mnogo laksi za stilizovanje i sredjivanje*/}
        {/* <li style={{ color: 'tomato', cursor: 'pointer' }} onClick={() => navigate('/home')}>Home</li>
        <li style={{ color: 'tomato', cursor: 'pointer' }} onClick={() => navigate('/about')}>About</li>
        <li style={{ color: 'tomato', cursor: 'pointer' }} onClick={() => navigate('/contact')}>Contact</li>
      </ul> */}
      <h1>Contact</h1>
    </div>
  )
}