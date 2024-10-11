import { useState } from "react";

const User = (props)=>{
    const[Count,setCount] = useState(0);
    return (
        <div className="user-card">
             {/* <button onClick={()=>setCount(Count+1)}>Increment</button>
            {console.log(Count)} */}
            <h1>Count = {Count}</h1>
            <h2>Name {props.name}</h2>
            <h3>Location:Delhi</h3>
        </div>
    );
};

export default User;