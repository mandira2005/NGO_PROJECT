import { useState } from 'react'
import './App.css'
import MenuBar from './Component/Menubar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
    
      <Router>

        <Routes>
          <Route path='/' element={<MenuBar/>}></Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
 