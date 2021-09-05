import React from "react";
import ReactDOM from "react-dom";
import './index.css'

let greetings=''
const cssStyle={};

let curDate = new Date(2021,9,5,15)
curDate= curDate.getHours()
if(curDate>=1 && curDate <12 ){
  greetings = "Good Morning"
  cssStyle.color= 'green';
}
else if(curDate>12 && curDate <20)
{
 greetings = "Good Afternoon" 
 cssStyle.color= 'orange';
}
else{
  greetings="Good Night"
  cssStyle.color= 'black';
}

ReactDOM.render(
  <React.Fragment>
  <div>
  <h1>Hello sir , <span style={cssStyle}>{greetings}</span></h1>
  </div>
  </React.Fragment>,
  document.getElementById("root")
);