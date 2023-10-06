import { useState } from "react";

const Counter=()=>{
    const [count,setCount]=useState(0);
    const [value,setValue]=useState("demo");
    function Reset(){
        setCount(0);
    }
    function onTextChange(event){
        setValue(event.target.value)
    }
    return(
        <>
            <input type="text" value={value}
            onChange={event=>onTextChange(event)}/>
            Your input {value} length: {value.length}
            <button onClick={()=>{setCount(count+1)}}>Just Click It</button>
            Clicked {count}
            <br/>
            <button onClick={()=>{setCount(0)}}>reset</button>

        </>
    )
}

export default Counter;