import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  const [amount, setAmount] = useState()
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmt, setConvertedAmt] = useState()

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmt)
    setConvertedAmt(amount)
  }

  const convert = () => {
    setConvertedAmt( amount * currencyInfo[to])
  }

  


  return (
    <>
      <div className='body'>
        <div className="page">
          <h1>Currency Converter</h1>
          <div className="container">
            <InputBox
              label="Amount"
              amount={amount}
              currencyOptions={options}
              selectCurrency={from}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}  
            />
            <button type='button' onClick={swap}>Swap</button>
            
            <InputBox
              label="Converted To"
              amount={convertedAmt}
              currencyOptions={options}
              selectCurrency={to}
              onCurrencyChange={(currency) => setTo(currency)}
            
            />
            <button type='button' onClick={convert}>Convert</button>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
