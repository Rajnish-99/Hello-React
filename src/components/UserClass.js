 import React from "react";
 
 class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log(props)
    }
    render(){
        return(<div className="user-card">
            <h2>Name:Rajnish</h2>
            <h3>Location:Delhi</h3>
        </div>);
    }
 }

 export default UserClass;