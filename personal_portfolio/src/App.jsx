import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/css/responsive.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoute from '../src/AppRoute/AppRoute';





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <AppRoute/>
    </BrowserRouter>
    </>
  )
}

export default App
