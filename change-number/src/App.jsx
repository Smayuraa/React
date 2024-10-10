import React, { useState } from 'react'
import './App.css'

 const App=()=>{
   
  const[no,setno]=useState(0);

  return (
    <div>
    <h1>Count: {no}</h1>
    <button onClick={()=>setno(no+1)}>Increament</button>
    <button onClick={()=>setno(no-1)}>Decrement</button>
    </div>
  )
 }
export default App
