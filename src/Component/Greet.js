import React, { useState } from 'react';

// function Greeting() {
// //   const [age, setAge] = useState(4);

// //   const message = (name) => {
// //     setAge(40);
// //     alert("Hello " + name + age);
// //   };

// //   return (
// //     <>
// //       <h1>Welcome to the App</h1>
// //       <button
// //         onClick={() => {
// //           message("Deepika");
// //         }}
// //       >
// //         Say Hello 
// //       </button>
// //     </>
// //   );




 
const Counting=()=>{

const [count, setCount]=useState(0)


   const onClicki=()=>{

setCount(count+1);  


   }

   
   const onClickd=()=>{

    setCount(count-1);
   }
   
   const onClickr=()=>{

    setCount(0);
   }


    return(
        <>
         <h1>Count: {count}</h1>
        <button  onClick={()=>{
            onClicki(count)
        }}> Increase </button>
        <button onClick={()=>{
            onClickd(count)
        }}> Decrease </button>
        <button onClick={()=>{
            onClickr(count)}}> Reset </button>
    
    
    </>
    );

}

export default Counting;






