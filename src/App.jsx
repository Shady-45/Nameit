import React,{ useState} from 'react'


import './App.css'
import Header from './Components/Header'
import Input from './Components/Input'
import Results from './Components/Results'

function App() {

const name =require('@rstacruz/startup-name-generator')
  const [headerExpand,setHeaderExpand]=useState(true)
  const [Names,setNames] = useState([])
const handleinputChange =(inputText)=>{
  setHeaderExpand(!inputText)
  
  setNames( inputText ?  name(inputText): name(''))
  console.log(name('cloud'));
  
 
}

  return (
  <div>
  <Header headerExpand={headerExpand}/>
  <Input handleinputChange={handleinputChange} />
  <Results  Names={Names} />
  </div>
  )
}

export default App
