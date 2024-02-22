import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePages from '../pages/HomePages/HomePages'


const AppRoute = () => {
  return (
    
    <Routes>
      <Route exact path='/' element={<HomePages/>}/>
    </Routes>
  )
}

export default AppRoute