import React from 'react'
import Navbar from './Component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Component/Home/HomePage';

const App = () => {
  return (
    <>
      <Navbar />
    
      <Routes>
      <Route path='/' element={<HomePage />}></Route>    
      </Routes>
     
     
    </>
  )
}

export default App;