import React, { Component } from 'react'
 class Statedemo extends Component {
    constructor(
        
    ){
        super();
        this.state={
             arr: [1,4,5],
        };
      
        
    }
  
    change=()=>{
        console.log("before change",this.state.arr)
        this.state.arr.reverse()
     this.setState({
       arr: this.state.arr
         })
       console.log("after change",this.state.arr);
    }

    add=()=>{
        for (let i = 0; i < 4; i++) {
            this.state.arr.push(i*i); 
        }
        this.setState({arr:this.state.arr})
        console.log("new array",this.state.arr)
    }
    clear=()=>{
        
        this.setState({arr:[]})
        console.log("array is cleared")
        

    }
  render() {
  
    return (
        <> <div>
          <h1>{this.state.arr}</h1>
        <br></br>
       <button onClick={this.change}>reverse val</button>
       <button onClick={this.clear}>clear array</button>
       <button onClick={this.add}>add </button>
      
       </div></>
     
    )
  }
}

export default Statedemo
