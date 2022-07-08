import React, { Component } from 'react'

export class Child extends Component {
  
  render() {
const{vl}=this.props;

     if(vl%4===0
      )
     {
          return (
        <div>
          <h1 >child componant will display if counter is devided by 4</h1>
        </div>
      )
     }
        
   
  }
}

export default Child
