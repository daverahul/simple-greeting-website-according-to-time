import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let curDate = new Date(2020,5,6,22);
curDate = curDate.getHours();
let greetings ='';
let cssStyle ={};

if(curDate>=1 && curDate<12){
    greetings="Good Morning";
    cssStyle.color='green';


}else if(curDate>=12 && curDate<19){
    greetings='Good Afternoon';
    cssStyle.color='orange';

}
else{
    greetings='Good Night';
    cssStyle.color='black';

}

ReactDOM.render(<>
<div>
<h1>Hello sir,<span style={cssStyle}> {greetings}</span></h1>
</div>
</>,document.getElementById("root"));
