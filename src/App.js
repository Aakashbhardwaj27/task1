import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [boxCount,setBoxCount]=useState([])
  return (
    <div className="App">
     <div className="column1">
       <button onClick={()=>{setBoxCount((boxCount)=>[...boxCount,boxCount.length+1])}}><div className="add">+</div></button>
      <h5>{boxCount.length}</h5>
       <button onClick={()=>{setBoxCount(boxCount.filter((e)=>boxCount.indexOf(e)!==boxCount.length-1))}}><div className="delete">−</div></button>
     </div>
     <div className="column2">
{boxCount.length>0?boxCount.map((index)=><div style={{fontSize:5*index,width:5*index,height:5*index}} className="box">{index}</div>
  ):null}
     </div>
    </div>
  );
}

export default App;
