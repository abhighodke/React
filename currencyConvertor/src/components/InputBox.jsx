import React from 'react'
import './InputBox.css'
import { useId } from 'react'

const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = 'usd'
}) => {

   

  return (
    <div className="outer">
        <label >{label}</label>
        <div className="input">
            <input 
                type='number'
                value={amount}
                onChange={(e) => onAmountChange(Number(e.target.value))}
                />
            <select 
                value={selectCurrency}
                onChange={(e) => onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                
            </select>
        </div>
    </div>
  )
}

export default InputBox