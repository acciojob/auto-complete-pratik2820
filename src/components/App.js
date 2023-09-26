
import React,{useEffect, useState} from "react";
import './../styles/App.css';

const fruits =["apple", "banana", "cherry", "date", "elderberry", "fig"]

const App = () => {

  const[name,setName]=useState("");
  const[filteredFruits,setFilteredFruits]=useState(fruits);

  useEffect(()=>{
    filterFruits();
  },[name])


  function filterFruits(){
    setFilteredFruits(fruits.filter((fruit)=>(
      fruit.toLocaleLowerCase().includes(name.toLowerCase())
    )))
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Search item</h1>
        <input type="text" onChange={e=>setName(e.target.value)}/>
      
        {/* <button onClick={filterFruits}>Search</button> */}
        <ul>
          {
            filteredFruits.map((fruit)=>(
              <li>{fruit}</li>
            ))
          }
        </ul>
    </div>
  )
}

export default App
