import { Link } from "react-router-dom"

export const Home = () => {


  return (
    <div>
      {/* <ul> */}
        {/* za linkovanje koristimo tu <Link></Link> komponentu koju uvozimo iz react-router-doma 
        ----gde ce ici ti linkovi koristimo ---'to'--- i putanja
        i ovo nisu obicni <a></a> linkovi koji svaki put salju novi zahtev ka serveru vec React Router linkovi koji
        samo imitiraju da idemo na dr stranu a zapravo se nalazimo u okviru jedne iste html str a JS vrsi reload ---> SPA*/}
        {/* <li><Link to={'/home'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
      </ul>*/}
      <h1>Home</h1>
    </div> 
  )

}