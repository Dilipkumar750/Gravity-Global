import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Route, Routes } from 'react-router-dom';
import Contact from './Components/ContactComponent/Contact';
import Home from './Components/HomeComponent/Home';
import TopHeader from './Pages/Navbar/TopHeader';
import Hero from './Components/HomeComponent/Hero';

function App() {
  

  return (
    <>
    <TopHeader/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Hero' element={<Hero/>}/>
    </Routes>
    </>
  )
}

export default App
