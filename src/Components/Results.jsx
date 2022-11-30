import React from 'react'
import Result from './Result'
import '../App.css'

const Results = ({Names}) => {
  return (
    <div>
<p className='names-text'>{Names.map((item)=>{
  return <Result key={item} item={item}/>
}) }</p>
    </div>
  )
}

export default Results