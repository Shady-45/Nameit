import React, { useEffect, useRef } from 'react'
import '../App.css'


const Input = ({handleinputChange}) => {
const inputRef = useRef(null)
useEffect(()=>{
  inputRef.current.focus();
})
  
  
  
  return (
    <>
    <div className="container">
    <div className='search-container'>
        <input ref={inputRef} onChange={(e)=>handleinputChange(e.target.value)} type="text" placeholder='Enter Keywords'  />
       
      
    </div>
   
    </div>
    
   
    </>
  )
}

export default Input