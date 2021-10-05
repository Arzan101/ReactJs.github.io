import React from 'react'

const SlotM =()=>{
    let x = '🙂'; 
    let y = '🙂'; 
    let z = '🥪';  

    if((x===y && y===z)){
        return(
            <div className="slot__inner">
            {x}{y}{z}          
            <h1>This is Matching</h1>
             </div>
        )
    }
    else{
        return(
            <div className="slot__inner">
            {x}{y}{z}          
            <h1>This is Not Matching</h1>
             </div>
        )
    }
}
function App() {
    return (
        <div className="heading">
            <h1> 🎰 Welcome to <span style={ {fontweight:"bold"} }> Slot Machine game</span>🎰 </h1>
            <SlotM/>
        </div>
    )
}

export default App
 