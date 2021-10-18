import React,{ useState } from 'react'


const App=()=> {

   let newTime= new Date().toLocaleTimeString();
   const [cTime, sTime] = useState(newTime);

   const UpdateTime = () =>{
    let cnewTime= new Date().toLocaleTimeString();
    sTime(cnewTime);

    }
    setInterval(UpdateTime,1000);
   return (
      <div>
         <h1>{cTime}</h1>
         
      </div>
   )
}

export default App
