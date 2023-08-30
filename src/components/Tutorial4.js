import React, { Component } from 'react'

export default class Tutorial4 extends Component {
    render() {
        const { item } = this.props;
    
        return (
          <div>
            <ul>
                {item.map(person =>(
                    <li key={person.id}>Name is {person.name} and age is {person.age}</li>
                ))}
                <hr style={{marginTop:'20px', backgroundColor: 'red', padding:'1px'}}/>
            </ul>
            
          </div>
        );
    }
}
