import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css'
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Social from './Components/Social/Social';



function App() {
  return (
    <main className='Main'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Social/>
      <Footer/>
      </BrowserRouter>

    </main>
  )
}


export default App
