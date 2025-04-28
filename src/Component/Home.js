import { useState,useEffect } from "react";
import "../Style.css";  
import BlogList from "./BlogList";
import useFetch from "./UseFetch";

const Home = () => {
   const{blogs,isLoading,error}= useFetch("http://localhost:8000/Blogs");
  //[
  //   // { title: "Welcome", body: "Lorem ipsum dolor sit amet.", id: 1 },
  //   // { title: "React Tips", body: "Some useful React tips here.", id: 2 },
  //   // { title: "Hooks in Depth", body: "Understanding useState and useEffect.", id: 3 },
  //   // { title: "Goodbye", body: "Thanks for reading!", id: 4 },
  // ]
 


  const [name,setName]=useState("deepika")

  // const buttonHandle=()=>{
  //   // setName("mario")
  // }


   // <- empty array to run this effect only once
   
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id );
  //   setBlogs(newBlogs);
  // };

  return (
    <div className="home">

{isLoading && <div>loading....</div>}
      <h1>HomePage</h1>

      {error && <div>{error}</div>}
      { blogs &&  <BlogList blogs={blogs}  /> }
      {/* {<BlogList blogs={blogs.filter((blog) => blog.id === 1)} title="hello" /> }
{ <h1>{name}</h1> } */}
         {/* <button onClick={()=>{setName("mario")}}>change name</button> */}
     </div>
  );
};

export default Home;
      



//  useEffect(()=>{



//   fetch("url")

// .then(res=>{
//   return  res.json();
// })
// .then(data=>{
//   console.log(data)
// })

// .catch(err=>{
//   console.log(err.message)
// })

//  },[])