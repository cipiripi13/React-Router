
import { Route, Routes } from 'react-router';
import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Home } from './components/Home'

function App() {
  // u app cemo pisati route... npr routa 1 neka renderuje jednu komponentu i slicno
  //1. sto radimo jeste da sve nase route obavijemo jednom <Routes></Routes> komponentom
  //2. - uvodimo jos jednu komponentu <Route/> koja ima 2 stvari path-putanju do nase route
  //i u element napisemo celu tu nasu komponentu koju smo importovali
  //ovo je prvi put da pisemo celu nasu komponentu u property neke druge komponente
  return (

    <Routes>
      {/* pisemo celu nasu komponentu u property neke druge komponente */}
      {/* path sa '/' zapravo kazemo sta ce se prikazati na toj default stranici */}
      {/* <Route path={'/'} element={<Home />} />  */}
      <Route path={'/home'} element={<Home />} />
      <Route path={'/about'} element={<About />} />
      <Route path={'/contact'} element={<Contact />} />

      

    </Routes>


  );
}

export default App;
