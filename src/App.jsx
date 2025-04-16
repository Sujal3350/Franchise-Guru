import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Aboutus from './Components/Aboutus/Aboutus';
import Contact from './Components/Contact/Contact';
import Categories from './Components/Categories/Categories';
import Footer from './Components/Footer/Footer';
import Food from './Components/Categoriespages/Food';
import Pump from './Components/Categoriespages/Pump';
import Retail from './Components/Categoriespages/Retail';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

import Layout from './Components/Pages/Layout';

import Terms from './Components/Terms/Terms';
import Privacy from './Components/Privacy/Privacy';



function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Layout />}> 
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/food" element={<Food />} />
            <Route path="/pump" element={<Pump />} />
            <Route path="/retail" element={<Retail />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/privacy-policy" element={<Privacy />} />
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
