 import React from "react";
 
 class UserClass extends React.Component{
// constructor is called first 
    constructor(props){
        super(props);
        // earlier we used useState hook to maintain state
        // now we will use this.state
        // this.state is an object
        // we can define as many as key value pairs in this object
        this.state = {
            count :0,
            count2:2,
        };
        console.log("child constructor called");
    }
// componentDidMount called third
    componentDidMount(){
        console.log("Child component mount called");
        // api call is made here and 
    }

    // render method is called second
    render(){
        console.log("child render called");
        return(<div className="user-card">
            <h1>Count= {this.state.count}</h1>
            {/* <h1>Count2= {this.state.count2}</h1> */}
            <button onClick={()=>{
                this.setState({count:this.state.count+1});
            }}>Increment</button> 
            {console.log(this.statecount)}
            <h2>Name:{this.props.name}</h2>
            <h3>Location:{this.props.location}</h3>
        </div>);
    }
 }


 export default UserClass;