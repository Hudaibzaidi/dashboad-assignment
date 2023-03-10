import React from 'react'
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import About from './about'
import Button from './button'
import Contect from './contect'
import Home from './home'

export default function RouteFolder() {
  return (
<>
    <BrowserRouter> 
     <Link to='/home'>HOME</Link>
     <Link to='/about'>ABOUT</Link>
     <Link to='/contect'>CONTECT</Link>
     <Link to='/button'>Button</Link>
       <Routes>
            <Route path='home' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contect' element={<Contect/>}/>
            <Route path='contect' element={<Button/>}/>
       </Routes>
    </BrowserRouter>
</>
  )
}
