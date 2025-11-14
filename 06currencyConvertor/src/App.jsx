import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
 const [amount, setamount] = useState(0)
 const [from , setFrom] = useState("usd")
 const [to , setTo] = useState("inr")
 const [convertedAmount , setconvertedAmount] = useState(0)

 const currency = useCurrencyInfo(from)

 const options = Object.keys(currency)

 const swap = () => {
  setFrom(to)
  setTo(from)
  setconvertedAmount(amount)
  setamount(convertedAmount)
 }

 // when user click on convert
 


  return (
    <>
    <h1 className='text-3xl bg-orange-400 text-center '>Currency Convertor App with chai</h1>

    <InputBox/>
    <useCurrencyInfo/>


    </>
  )
}

export default App
