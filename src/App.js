import './App.css';

import React, {useState,useCallback} from 'react';

import Home  from './Pages/Home';
import Finder from './Pages/Finder';
import Helper from './Pages/Helper';
import Empty from './Pages/Empty';

import{BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import io from 'socket.io-client';

function App() {
  const[name,setName]=useState("");
  
  const socket=io.connect("http://localhost:5000")

  const callback=useCallback((name)=>{
    setName(name);
    
  },[]);


  return (
    <Router>
    <div className="App">
      <Empty/>
      <Switch>
      <Route path="/" exact >
        <Home parentCallback={callback} />
      </Route>
      <Route path="/finder" >
        <Finder personName={name} socket={socket}/>
      </Route>
      <Route path="/helper">
        <Helper personName={name} socket={socket}/>
      </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
