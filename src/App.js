
import { Navigate, Route, Routes } from 'react-router';
import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';
import { Layout } from './components/Layout';
import { Posts } from './components/Posts';

function App() {
  // u app cemo pisati route... npr routa 1 neka renderuje jednu komponentu i slicno
  //1. sto radimo jeste da sve nase route obavijemo jednom <Routes></Routes> komponentom
  //2. - uvodimo jos jednu komponentu <Route/> koja ima 2 stvari path-putanju do nase route
  //i u element napisemo celu tu nasu komponentu koju smo importovali
  //ovo je prvi put da pisemo celu nasu komponentu u property neke druge komponente
  /* pisemo celu nasu komponentu u property neke druge komponente */
  /* path sa '/' zapravo kazemo sta ce se prikazati na toj default stranici */

  //problem je sto na tri razlicita mesta imamo ucitavanje istih komponenti,ovaj problem cemo resiti uz pomocu NESTED ROUTES
  return (

    <Routes>
      
      <Route path={'/'} element={<Layout />}>
        {/* i u ovoj Layout ce se prikazivati sve ono sto je isto za svaku stranu */}
      <Route path={'/not-found'} element={<NotFound />} />
      <Route path={'/home'} element={<Home />} />
      <Route path={'/about'} element={<About />} />
      <Route path={'/contact'} element={<Contact />} />
      <Route path={'/posts'} element={<Posts />} />

      </Route>
      
      {/* na kraju stavljamo gard- sta da se desi ako se ucita npr pogresna putanja ili nesto sto ne postoji
      uvek ce se ucitavati NotFound strana */}
      <Route path={'/*'} element={<Navigate replace to={'/not-found'} />} />




    </Routes>


  );
}

export default App;
