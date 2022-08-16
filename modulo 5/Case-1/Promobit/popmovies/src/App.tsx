import { useState } from 'react'
import { Router } from 'react-router-dom'
import './App.css'
import { MainPage } from './pages/MainPage'
import AppRouter from './router/router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <AppRouter/>
    </div>
  )
}

export default App
