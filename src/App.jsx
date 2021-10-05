import React, {useState} from "react";



const App = ()=>{
    const state = useState();
    const [Count ,setCount]=useState(0);

    const IncNum = () =>{
       setCount( Count + 1);
    //   console.log('clicked')
    }
    return(
     <div>
        <h1>{Count}</h1>
        <button onClick={IncNum}>Click Me</button>
     </div>
    )
}

export default App;