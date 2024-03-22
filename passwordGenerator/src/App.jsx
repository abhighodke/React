import { useCallback, useEffect, useRef, useState } from 'react'
import FontAwesomeIcon from 'react-fontawesome'

import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [password, setPassword] = useState('')
  const [upper, setUpper] = useState(true)
  const [lower, setLower] = useState(true)
  const [number, setNumber] = useState(true)
  const [symbol, setSymbol] = useState(true)
  const [click, setClick] = useState(true)

  const passRef = useRef(null)

  const generatePass = useCallback(() => {
    let pass = '';
    let str = '';

    if(upper) str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(lower) str += 'abcdefghijklmnopqrstuvwxyz'
    if(number) str+= '0123456789'
    if(symbol) str+= '!@#$%^&*-_+=[]{}~`'

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length) + 1
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, upper, lower, number, symbol, click])

  const copyToClip = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    generatePass()
  }, [length, upper, lower, number, symbol, click])
  

  return (
    <>
     <div className='body'>
      <div className="main">
        
        <div className="container"> 
        <h1>Password Generator</h1>         
         <div className="generator">
        <input type="text" id='pg' value={password} ref={passRef} />
        <button 
          className='btn'
          onClick={() => {
            setClick((prev) => !prev )
        }}
          >Refresh</button>
        
         </div>
         <div className="customization">
          <h2>Customize Your Password</h2>
          <hr/>
          <label htmlFor="len">Password Length</label>
          <div className="customContain">          
              <div className="range"> 
                <input 
                  type="number" 
                  id='len' 
                  max={40}
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  />
                <input 
                  type="range" 
                  id='lenRan' 
                  min={6}
                  max={40}
                  value={length}
                  onChange={(e) => setLength(e.target.value)} />
              </div>
              <div className="checks">
                <div className="upper">
                  <input
                    type="checkbox"
                    defaultChecked={upper}
                    id="upperInput"
                    className='chkbx'
                    onChange={() => {
                        setUpper((prev) => !prev )
                    }}
                  />
                  <label htmlFor="upperInput">Uppercase</label>
                </div>
                <div className="lower">
                  <input
                    type="checkbox"
                    defaultChecked={lower}
                    id="lowerInput"
                    className='chkbx'
                    onChange={() => {
                      setLower((prev) => !prev )
                  }}
                  />
                  <label htmlFor="lowerInput">Lowercase</label>
                </div>
                <div className="numbers">
                  <input
                    type="checkbox"
                    defaultChecked={number}
                    id="numberInput"
                    className='chkbx'
                    onChange={() => {
                      setNumber((prev) => !prev )
                  }}
                  />
                  <label htmlFor="numberInput">Numbers</label>
                </div>
                <div className="symbols">
                  <input
                    type="checkbox"
                    defaultChecked={symbol}
                    id="symbolInput"
                    className='chkbx'
                    onChange={() => {
                      setSymbol((prev) => !prev )
                  }}
                  />
                  <label htmlFor="symbolInput">Symbols</label>
                </div>
              
              </div>
          </div>

         </div>
        <button 
        id='copy'
          className='btn'
          onClick={copyToClip}
          >Copy Password</button>
        </div>
        
        
      </div>
     </div>
    </>
  )
}

export default App
