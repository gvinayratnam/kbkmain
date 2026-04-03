import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './Home Components/Hero'
import Services from './Home Components/Services'
import NavBar from './NavBar'
import Development from './Home Components/Development'
import Theabout from './Theabout'
import About from './Home Components/About'
import TheService from './TheService'
import ThePortfolio from './ThePortfolio'
import TheContact from './TheContact'
import WorkPage from './WorkPage'
import ScrollToTop from './Scrolltoup'

function App() {

  return (
    <>
      {/* <Home/> */}
      {/* <Theabout/> */}
      <BrowserRouter>
      <ScrollToTop/>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<Theabout/>}/>
          <Route path='/service' element={<TheService/>} />
          <Route path='/portfolio' element={<ThePortfolio/>}/>
          <Route path='/contact' element={<TheContact/>} />
          <Route path='/work' element={<WorkPage/>} />
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
