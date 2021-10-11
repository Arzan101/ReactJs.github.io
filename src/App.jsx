import React,{ useState } from 'react'


const App=()=> {

   let newTime= new Date().toLocaleTimeString();
   const [cTime, sTime] = useState(newTime);

   const UpdateTime = () =>{
    let cnewTime= new Date().toLocaleTimeString();
    sTime(cnewTime);

    }
   return (
      <div>
         <h1>{cTime}</h1>
         <button className="button1" onClick={UpdateTime}>Get Time</button>
      </div>
   )
}

export default App
