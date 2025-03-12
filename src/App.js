import React from 'react';
import { Routes,BrowserRouter as Router,Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import { Home } from './component/Home/Home';
import { About  } from './component/About/About';
import { Education } from './component/Education/Education';
import {Skills} from './component/Skills/Skills'
import {Projects} from './component/Projects/Projects';
import {Contact_Me} from './component/Contact_Me/Contact_Me';

function App() {
  return (
   <>
   
     <Router>
      <div>
         <Navbar/>    
        <Routes> 

          <Route path="/" element={<Home/>}/>  
          <Route path="/Home" element={<Home/>}/>  
          <Route path="/About" element={<About/>}/>
          <Route path="/Education" element={<Education/>}/>
          <Route path="/Skills" element={<Skills/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Contact_Me" element={<Contact_Me/>}/>
        </Routes>
        </div>
      </Router>
   </>
  );
}

export default App;
