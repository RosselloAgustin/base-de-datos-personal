import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'

function App() {

  return (
    <>
      <div className='fondoPpal flex flex-col justify-evenly h-screen'>
        <Header />
        <Body />
      </div>
    </>
  )
}

export default App
