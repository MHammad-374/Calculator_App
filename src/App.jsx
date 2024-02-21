import { useState } from 'react'
import './App.css'
import Body from './Components/Body'

function App() {
  const [theme, setTheme] = useState('light')
  const [text, setText] = useState('dark')

  let handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      setText('light')
    }
    else {
      setTheme('light')
      setText('dark')
    }
  }



  return (
    <>
      <nav className={`bg-${theme}`}>
        <h1 className={`appName text-${text}`}>Calculator</h1>
        <div className="form-check form-switch">
          <input className=" form-check-input" onChange={handleTheme} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className={`text-${text} form-check-label`} htmlFor="flexSwitchCheckDefault">Switch Mode</label>
        </div>
      </nav>
      <Body theme={theme} text={text} />
    </>
  )
}

export default App
