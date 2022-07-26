import { useState } from 'react';
import './App.css';
import Product from './import';

const candidat = [
  { 
    nume: "Edu",
    prenume: "Adrian Florentin",
    varsta: 33,
    oras: "Bucuresti"
  },
  {
    nume: "Sarbu",
    prenume: "Elena Cristina",
    varsta: 34,
    oras: "Bucuresti"
  }
]



function Candidat() {

  const [data, setData] = useState(candidat)

  return (
    <div className='App-header'>

    {data.filter((item, index) => [0, 1].includes(item)).map((item, key) => {
      return ( <Product transfer={item} key={key}/>)
    })}
  


    </div>
  )
}

export default Candidat;
