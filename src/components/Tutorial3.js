import React from 'react';

export default function Tutorial3(props) {
  return (
    <div>
        <h2>This will show you the Array and object passed as a props in functional and class Component...</h2>
      <ul>
        
        {props.data.map((index,item)=>(
            <li key={index}>{item}</li>
        ))}
        <hr style={{marginTop:'20px', backgroundColor: 'red', padding:'1px'}}/>
      </ul>
      
    </div>
  )
}
