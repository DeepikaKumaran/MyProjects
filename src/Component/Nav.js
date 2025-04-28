import React from "react";
import "../Style.css"; // ✅ this goes up one folder level to reach Style.css



const Nav = ()=>{


    const click=()=>{
        alert("hello");
    }


    const onDlick=(name)=>{
        alert("hello" + name)
    }
    return(
<div className="navbar"> <h1>
    deepika
    </h1>
    <div className="link">
    <a  href="/">Home</a>
    <a  href="Create ">New Blog </a>
    <button onClick={click}>ClickMe</button>
 <button onClick={()=>{
    onDlick("deepika")
 }}>Clicked me Again</button>
    </div>
    </div>

    
    )
}

export default Nav;