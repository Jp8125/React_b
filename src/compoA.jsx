import React, { Component } from 'react'
import CompoB from './compoB';

 class CompoA extends Component {
    constructor(){
            super();
            this.state={
                emps: [{type:"web",ename:"jay"},
            {type:"android",ename:"raj"}],  num:0
            }
    }
  render() {
    const f1 =()=>{
        this.setState({num:this.state.num+1})
    }
    return (
      <div>
        <h3>function val:{this.state.num}</h3>
<hr></hr>
<h2>mapping of an array</h2>
        {this.state.emps.map((n,index)=>(<p>{index+1}.{n.type}{n.ename}</p>)

        )}
        <CompoB f1={f1}></CompoB>
      </div>
    )
  }
}

export default CompoA 
