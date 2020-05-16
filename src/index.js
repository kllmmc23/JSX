import React from 'react';
import ReactDOM from 'react-dom';

const date = new Date();
const hours = date.getHours();
const customStyle = {
  color: ''
};

let greeting;

if (hours < 12 ) {
  greeting = 'Good Morning'
  customStyle.color = 'red'
}
else if(hours < 18){
  greeting = "Good Afternoon"
  customStyle.color = 'green'
}
else {
  greeting = 'Crap is night already'
    customStyle.color = 'blue'
}



ReactDOM.render(
  <div>
    <h1 className='heading' style={customStyle}>{greeting}</h1>
  </div>
  ,document.getElementById('root')
);