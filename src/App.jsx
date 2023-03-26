import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import { useState } from 'react'

const ThemeButton = ({ onChangeTheme }) => {
  return (
    <div className='absolute flex right-8 top-4 gap-x-5'>
      <div onClick={() => onChangeTheme('')} className='h-8 w-8 rounded-full cursor-pointer bg-red-400'></div>
      <div
        onClick={() => onChangeTheme('theme-dark')}
        className='h-8 w-8 rounded-full cursor-pointer bg-slate-400'
      ></div>
      <div
        onClick={() => onChangeTheme('theme-purple')}
        className='h-8 w-8 rounded-full cursor-pointer bg-purple-400'
      ></div>
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState('')
  const handleChangeTheme = (theme) => {
    setTheme(theme)
  }
  return (
    <div
      className={`App ${theme} text-skin-base bg-gradient-to-r from-skin-hue w-screen h-screen selection:bg-red-500 selection:text-white`}
    >
      <BrowserRouter>
        <Navbar />
        <ThemeButton onChangeTheme={handleChangeTheme} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
