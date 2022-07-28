import { useState } from "react"


function Child (props) {

    var pret = 10000

    const [click, setClick] = useState("")

    const handleClick = () => {
        setClick(props.trimite)
      } 
    
    props.date(pret)

    props.trimite2(click)

    return (

    <div>

    <button onClick={handleClick}>Click</button>

    </div>    


    )
}

export default Child