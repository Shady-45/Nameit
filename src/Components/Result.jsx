import React from 'react'
import '../App.css'

const domainURL =`https://in.godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=`

const Result = ({item}) => {
  return (
    <div className='card'>
        <a target="_blank" href={`${domainURL}${item}`}><p className="result">{item}</p></a>
        
    </div>
  )
}

export default Result