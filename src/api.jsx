import React, { Component } from 'react'

 class Apicall extends Component {
    constructor(){
        super();
        this.state={
            users:null
        }
    }
    componentDidMount(){
        fetch('https://reqres.in/api/users?page=2').then((resp)=>{
            resp.json().then((result)=>{
                this.setState({users:result.data})
             
             
            })
        })
    }
  render() {
    return (
      <div>
      
      {
        this.state.users?this.state.users.map((i,index)=>(<li key={index}><br/><h3>index</h3>:{index}<br/><h3>fname:</h3>{i.first_name}<br/><h3>lname:</h3>{i.last_name}<br></br><h3>avatar:</h3>  <img key={i.avatar} src={i.avatar} /></li>)):null
        
      }
        
      </div>
    )
  }
}

export default Apicall
