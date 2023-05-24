import React from 'react';
import './App.css';
import './Componets/Header/Header.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Header from './Componets/Header/Header';
import Tv from './Tv/Tv';
import Ipad from './Ipad/Ipad';
import Iphone from './Iphone/Iphone';
import Cart from './Cart/Cart';
import Watch from "./Watch/Watch";
import Music from "./Music/Music";
import Main from './Componets/Main/Main';
import Section7 from './Componets/section7/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      
          <Routes>
           <Route path="/" element={<Main />} />
           <Route path="/tv" element={<Tv />} />
           <Route path="/watch" element={<Watch />} />
           <Route path="/Music" element={<Music />} />
           <Route path="/ipad" element={<Ipad />} />
           <Route path="/iphone" element={<Iphone />} />
           <Route path="/Cart" element={<Cart />} />
         </Routes>
      
       <Section7 />
    </BrowserRouter>
  );
}

export default App;








