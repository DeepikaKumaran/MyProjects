 
 import { useEffect,useState } from "react";
 
     const useFetch=(url)=>{
        const [blogs, setBlogs] = useState(null)
        const[isLoading,setIsLoading]=useState(true);
  const [error,setError]=useState(null);
  useEffect(() => {
   setTimeout(()=>{
    fetch(url)
    .then(res => {

if(!res.ok){
throw Error("doest not fetch");
}

      return res.json(); // Convert response to JSON
    }) 
    .then(data => {
        console.log("test", data);
      setBlogs(data);
      
      setIsLoading(false);

    })
    .catch(err => {
      
      setError(err.message);
      setIsLoading(false);
    });
   },2000)
  }, [url]);


  return({blogs,isLoading,error})
     }
 
 export default useFetch;
 
 
 