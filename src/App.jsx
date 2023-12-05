import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blog from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Blog></Blog>

    </div>
  )
}

export default App
