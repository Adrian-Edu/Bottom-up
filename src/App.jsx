import { useState } from 'react';
import './App.css';
import Child from './import';



function Candidat() {

  const [data, setData] = useState("")

  const [handleClick, sethandleClick] = useState("")
 
  const primeste = (pret) => {
    setData(pret)
  }

 const primesteClick = (click) => {
  sethandleClick(click)
 } 


  return (
    <div className='App-header'>

    < Child date={primeste} trimite={data} trimite2={primesteClick} />
    
    <p>{handleClick}</p>

    </div>
  )
}

export default Candidat;
