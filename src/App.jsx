import { useState } from 'react';
import './App.css';
import Child from './import';



function Candidat() {

  const [data,setData] = useState("")
  const [click, setClick] = useState("")

  const primeste = (pret) => {
    setData(pret)
  }

  const handleClick = () => {
    setClick(data)
  } 



  return (
    <div className='App-header'>

    < Child date={primeste} />
    
    <button onClick={handleClick}>Click</button>

    <p>{click}</p>

    </div>
  )
}

export default Candidat;
