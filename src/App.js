import React from 'react'
import Tutorial from './components/Tutorial1';
import Tutorial2 from './components/Tutorial2';
import Tutorial3 from './components/Tutorial3';
import Tutorial4 from './components/Tutorial4';

export default function App() {
  const dataArray = [1,2,3,4,5];
  const stringData =[
                      {id: 1,name:'Kashif', age:20},
                      {id:2,name:'Khan', age:21}
                    ];
  return (
    <div>
      
      <Tutorial/>
      <Tutorial2 name ='Kashif Khan' nickName='Kashif Noor'/>
      <Tutorial3 data={dataArray}/>
      <Tutorial4 item={stringData}/>
    </div>
  )
}
