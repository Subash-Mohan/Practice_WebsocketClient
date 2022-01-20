import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import "../style/Home.css"


function Home({parentCallback}) {

    const [name,setName]=useState("");
    const history=useHistory();


    const FClick=()=>{
        parentCallback(name)
        history.push("/finder")
        setName("")
    }


    const HClick=()=>{
        parentCallback(name)
        history.push("/helper")
        setName("")
    }

    return (
        <div className="screen">
            <div className="w">
        <div className="container" >
            
            <div className="form-group">
            <h3 >Name</h3>
            <div className="margins">
             <input type="text"  value={name}
             onChange={(e)=>{
                 setName(e.target.value)
             }}/>
             </div>
           </div>
           
           <button  className="btn  btn-primary m" onClick={FClick}>Finder</button>
           
           
           <button to="/helper" className="btn  btn-primary m" onClick={HClick}>Helper</button>
           
        
           </div>
           </div>
        </div>
    )
}

export default Home
