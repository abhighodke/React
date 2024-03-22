import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('gray')

  const handle = () => {

  }

  return (
     
      <div className="mainy">
        <div className="middle"
             style={{backgroundColor: color}} 
        >
          <div className="parent">
              <div 
                className="child" 
                id='red'
                onClick={() => setColor('red')}
              >
                Red
              </div>
              <div 
                className="child" 
                id='yellow'
                onClick={() => setColor('yellow')}
              >
                Yellow
              </div>
              <div 
                className="child" 
                id='blue'
                onClick={() => setColor('blue')}
              >
                Blue
              </div>
              <div 
                className="child" 
                id='orange'
                onClick={() => setColor('orange')}
              >
                Orange
              </div>
              <div 
                className="child" 
                id='green'
                onClick={() => setColor('green')}
              >
                Green
              </div>
              <div 
                className="child" 
                id='purple'
                onClick={() => setColor('purple')}
              >
                Purple
              </div>
              <div 
                className="child" 
                id='brown'
                onClick={() => setColor('brown')}
              >
                Brown
              </div>
              <div 
                className="child" 
                id='teal'
                onClick={() => setColor('teal')}
              >
                Teal
              </div>
          </div>
        </div>  
      </div>
      
      
      
  )
}

export default App
