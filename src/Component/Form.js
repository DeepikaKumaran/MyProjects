import { useState } from "react";
import "../Style.css";

const From=()=>{

    const[blogName,setBlogName]=useState();
    const[blogBody,setBlogBody]=useState();
    const[option,setOption]=useState("Deepika");
    const[isPending,setIsPending]=useState(false);

const handleSubmit=(e)=>{
 e.preventDefault();
 
const blog={blogName,blogBody,option};
console.log("submit" ,blog);


fetch("http://localhost:8000/Blogs",{
method:"POST",
headers:{"content-type":"application/json"},
body:
JSON.stringify(blog),




})
.then(()=>{
  setIsPending(true)  
})



}


return(
    <form onSubmit={handleSubmit}>
<div className ="create">

    <h1>Add a New Blog</h1>
    <label>BlogName</label>

    <input type="text"  required value={blogName} 
    onChange={(e)=>setBlogName(e.target.value)}/>
    <label>BlogBody</label>
    <textarea   required value={blogBody} onChange={(e)=>setBlogBody(e.target.value)}></textarea>
     <label>Select</label>

    <select required value={option} onChange={(e)=>setOption(e.target.value)

    }>
    <option value ="Deepika">
    Deepika
    </option>
    <option value= "Kumaran">
    Kumaran
    </option>
</select>

<button type="submit" disabled={isPending}>
          {isPending ? "Adding..." : "Add Button"}
        </button>
<h1>{blogName}</h1>
<h1>{blogBody}</h1>
<h1>{option}</h1>




</div>




    </form>
)


}

export default From;