import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Title  from './components/Title'
import OpenScreen from './components/OpenScreen'
import './App.css'
import MainScreen from './components/MainScreen'
import ScreenSwitch from './components/ScreenSwitch'
function App() {
  return (
    <>
      <div>
        <ScreenSwitch/>
      </div>
    </>
  )
}

export default App
