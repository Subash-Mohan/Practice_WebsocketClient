import React,{useState,useEffect} from 'react'
import "../App.css"
import "../style/Helper.css"

function Helper({personName,socket}) {
   
    const[totalclues,setTotalclues]=useState([])
   

   
     
    return (
        <div className="screen">
           <div className="word">
            <h1>
             Hii {personName}..
            </h1>
            <div className="find">
               <h2>Word:Elonmusk</h2>
            </div>
            </div>
            <div className="card">
            <h2>Words for clue</h2>
            <div className="table">
               
             
            <div  >
                
                <h5  onClick={()=>{
                   socket.emit("clue","object");
                   setTotalclues([...totalclues,"object"])
                }} > object</h5>
              
                <h5 onClick={()=>{
                   socket.emit("clue","thing");
                   setTotalclues([...totalclues,"thing"])
                }}> thing</h5>
                <h5 onClick={()=>{
                   socket.emit("clue","package");
                   setTotalclues([...totalclues,"package"])
                }}> package</h5>
                <h5 onClick={()=>{
                   socket.emit("clue","person");
                   setTotalclues([...totalclues,"person"])
                }}> person</h5>
            </div>
            <div>
                <h5 onClick={()=>{
                   socket.emit("clue","work");
                   setTotalclues([...totalclues,"work"])
                }}> work</h5>
                <h5 onClick={()=>{
                   socket.emit("clue","profession");
                   setTotalclues([...totalclues,"profession"])
                }}> profession</h5>
                <h5 onClick={()=>{
                   socket.emit("clue","craft");
                   setTotalclues([...totalclues,"craft"])
                }}> craft</h5>
                <h5 onClick={()=>{
                   socket.emit("clue","sport");
                   setTotalclues([...totalclues,"sport"])
                }}> sport</h5>
            </div>
            <div>
                <h5 onClick={()=>{
                   socket.emit("clue","theater");
                   setTotalclues([...totalclues,"theater"])
                }}> theater</h5>
                <h5 onClick={()=>{
                   socket.emit("clue"," mall");
                   setTotalclues([...totalclues," mall"])
                }}> mall</h5>
                <h5 onClick={()=>{
                   socket.emit("clue","film");
                   setTotalclues([...totalclues,"film"])
                }}> film</h5>
                <h5 onClick={()=>{
                   socket.emit("clue","camera");
                   setTotalclues([...totalclues,"camera"])
                }}> camera</h5>
            </div>
            <div>
                <h5 onClick={()=>{
                   socket.emit("clue","location");
                   setTotalclues([...totalclues,"location"])
                }}> location</h5>
                <h5 onClick={()=>{
                   socket.emit("clue","country");
                   setTotalclues([...totalclues,"country"])
                }}> country</h5>
                <h5 onClick={()=>{
                   socket.emit("clue","flag");
                   setTotalclues([...totalclues,"flag"])
                }}> flag</h5>
                <h5 onClick={()=>{
                   socket.emit("clue","patriotism");
                   setTotalclues([...totalclues,"patriotism"])
                }}> patriotism</h5>
            </div>
            <div>
                <h5 onClick={()=>{
                   socket.emit("clue","car");
                   setTotalclues([...totalclues,"car"])
                }}>car</h5>
                <h5 onClick={()=>{
                   socket.emit("clue","vehicle");
                   setTotalclues([...totalclues,"vehicle"])
                }}> vehicle</h5>
                <h5 onClick={()=>{
                   socket.emit("clue","bike");
                   setTotalclues([...totalclues,"bike"])
                }}> bike</h5>
                <h5 onClick={()=>{
                   socket.emit("clue","flight");
                   setTotalclues([...totalclues,"flight"])
                }}> flight</h5>
            </div>
            </div>
            </div>
            <div className="Yourclues">
               <h4>Your clues</h4>
            {totalclues.map((selected,index)=> <h6 key={index}><h5>{selected}</h5></h6>)}
            </div>
        </div>

    )
}

export default Helper
