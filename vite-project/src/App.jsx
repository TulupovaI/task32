import { useState } from 'react'


import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import General from './components/General'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className='wrapper'>
        <Header/>
        <div className="main">
          <div className="navigation">
            <Navigation/>            
          </div>
          <div className="central-block">
            <General/>
          </div>
        </div>

      </div>
      
    </>
  )
}

export default App
