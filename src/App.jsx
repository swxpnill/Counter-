import React ,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter , setcount] = useState(15)

  // const addValue = () => {
  //   console.log("Clicked", counter);
  //   // ?counter = counter + 1
  //   setCounter(counter + 1)
  // }

  // const removeValue = () => {
  //   setCounter(counter - 1)
  // }

  const addcnt = () =>{
    if(counter < 20){
      setcount(counter + 1)
    }
  }
  const remcnt = () =>{
    if(counter > 0){
      setcount(counter - 1)
    }
  }

  return (
    <>
     <h1>Code with Swapnil</h1>
     <h2>Counter Value : {counter}</h2>

     <button
     onClick={addcnt}
     >Add Value : {counter}</button>
     <br />
     <button
     onClick={remcnt}
     >Remove Value : {counter}</button>
     <p>footer : {counter}</p>
    </>
  )
}

export default App
