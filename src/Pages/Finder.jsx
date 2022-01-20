import React,{useState,useEffect} from 'react'
import "../style/Finder.css"

function Finder({personName,socket}) {
    const [clues,setClues]=useState([])
    const[word,setWord]=useState("")

    useEffect(()=>{
        socket.on("clue",(payload)=>{
          setClues([...clues,payload])
          console.log(clues)
        })
      })
    return (
        <div className="screen">
        <h1>
            Hii..{personName}        </h1>
            <ul className="clues">

                
                <h2 >Your clues</h2>
                {clues.map((clue)=> <li><h4>{clue}</h4></li>)}
            </ul>
            <input type="text"  value={word}
             onChange={(e)=>{
                 setWord(e.target.value)
             }}/>
             <div className="but">
             <button  className="btn  btn-primary " onClick={()=>{
                 word==="Elonmusk" ?alert("You win"):alert("You loose")
             }} >Submit</button>
             </div> 
        </div>

    )
}

export default Finder
