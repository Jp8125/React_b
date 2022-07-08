import React, { useState } from 'react'

function Hookdemo() {
    const [dt,setDt]=useState("name")
     
  return (
    
       <div>
        <h1>{dt}</h1>
        <button onClick={()=>{
            setDt("Jay")
        }}>click</button>
    
    </div>
   
 
  )
}

export default Hookdemo
