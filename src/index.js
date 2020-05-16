import React from 'react';
import ReactDOM from  'react-dom'

const customStyle = {
  color: 'red',
  fontSize: '20px',
  border: '1px solid black'
};

customStyle.color = 'blue';

ReactDOM.render(
  <div>
    <h1 style={customStyle}>Hello Michael</h1>
  </div>
  ,document.getElementById('root')
);