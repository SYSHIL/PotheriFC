import { useState } from 'react'
import './App.css'
import Hero from './Hero.jsx'
import Header from './Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
    </>
  )
}

export default App
