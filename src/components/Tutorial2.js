import React from 'react';
import PropTypes from 'prop-types';


export default function Tutorial2(props) {
    // const name= 'Kashif Khan';
    // const nickName = 'Kashif Noor';
    const onClickHandler = (event)=>{
        document.write(event.target.id);
    }
  return (
    <div>
        <h2>Topic - Variables and props in React</h2>
      <h3> Hello guys this is {props.name} and Nick name is {props.nickName}</h3>
      <button type='submit' style={{padding:'10px', fontWeight:'bold',cursor:'pointer'}} onClick={onClickHandler} id='btn'>Learn more</button>
      <hr style={{marginTop:'20px', backgroundColor: 'red', padding:'1px'}}/>
    </div>
  )
}
Tutorial2.prototype = {
  name :PropTypes.string.isRequired,
  nickName :PropTypes.string.isRequired
}