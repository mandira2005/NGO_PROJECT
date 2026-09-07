import { useState } from 'react'
import './App.css'
// import MenuBar from './Component/Menubar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Call from'./Component/Calling'



function App() {

  return (
    <>
    
      <Router>

        <Routes>
          <Route path='/' element={<Call/>}></Route>
          {/* <Route path='/Home' element={<Home/>}></Route> */}
        </Routes>
      </Router>

    </>
  )
}

export default App
 