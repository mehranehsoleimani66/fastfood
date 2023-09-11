import { useEffect, useState } from "react";
import axios from "../axios";
import Loading from "../Loading/loading";

const CategoriList = () => {
const [categories , setCategories] = useState([])
const [loading , setLoading] = useState(true)
    useEffect(()=>{

        const fetchCategory = async () => {
            try {
              const response = await axios.get("/FoodCategory/categories")
              const {data} = response
              setCategories(data)
              setLoading(false);
            
            } catch (error) {
              console.log(error);
            }

          };
        
          fetchCategory();
        }, []); 

   const renderContent =()=>{
    if (loading){
      return <Loading theme ='warning'/>
     }
     return (
      <ul className="nav">
      <li className="nav-item">
        <a href="#" className="nav-link">فست فود ها</a>
     </li>
  {
  categories?.map((item)=>(
   <li className="nav-link text-danger" key={item?.id}>
      <a className="nav-link">{item?.name}</a>
    </li>
  
  ))}
  </ul>
     )
   }
   
 
    return (
    
    <nav className="container mt-n5">
        <div 
        className="d-flex align-items-center bg-white  rounded-3 py-4 shadow-lg py-4" 
        style={{height:"80px"}}>
        { renderContent()}
        </div>
        </nav>
        );};
 
export default CategoriList;