import { useState } from 'react'
import { Routes ,Route } from 'react-router-dom'
import Products from './pages/Products'



function App() {
  

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Products/>}>
        </Route>
      </Routes>
      
      
    
    </>
  )
}

export default App
