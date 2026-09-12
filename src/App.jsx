import { useState } from 'react'
import './App.css'
// import MenuBar from './Component/Menubar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Call from'./Component/Calling'
import Impact from './Component/ImpactPage'
import Contact from './Component/ContactUs'
// import Home from './Component/Homepage'



function App() {

  return (
    <>
    
      <Router>

        <Routes>
          <Route path='/' element={<Call/>}></Route>
          {/* <Route path='/Home' element={<Home/>}></Route> */}
          <Route path='/Impact' element={<Impact/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
 