import React from 'react';
import  Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import {HomeImprovements} from './components/HomeImprovements/HomeImprovements';
import { PersonalCare } from './components/PersonalCare/PersonalCare';
import { Electronics} from './components/Electronics/Electronics';
import {Fashion} from './components/Fashion/Fashion'
import { Gift } from './components/Gift/Gift';
import { Products} from './components/Products/Products';
import { AboutUS} from './components/AboutUS/AboutUS';
import { ContactUS } from './components/ContactUS/ContactUS';



const App = () => {
  return (
    <Router>
     <Header></Header>
     <Routes>
      <Route path = "/home-improvements" element ={<HomeImprovements/>}></Route>
      <Route path = "/personal-care" element = {<PersonalCare/>}></Route>
      <Route path = "/electronics" element = {<Electronics/>}></Route>
      <Route path = "/fashion" element={<Fashion/>}></Route>
      <Route path = "/gift" element={<Gift/>}></Route>
      <Route path = "/products" element={<Products/>}></Route>
      <Route path = "/about-us" element={<AboutUS/>}></Route>
      <Route path = "/contact-us" element={<ContactUS/>}></Route>

      
     </Routes>
     <HeroSection></HeroSection>
     </Router>
  );
}

export default App;
