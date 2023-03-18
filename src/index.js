import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // obmotamo ceo  <App /> u browserRouter i tako ce u celoj nasoj app biti dostupni podaci koji se ticu rutera
  // i na taj nacin mozemo da koristimo router gde hocemo, ovo radimo ovde zato sto je index.js mozaak nase cele aplikacije
  <BrowserRouter>
    <App />
  </BrowserRouter>


);


