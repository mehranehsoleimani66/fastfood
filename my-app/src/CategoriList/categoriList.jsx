import { useEffect, useState } from "react";
import axios from "../axios";
import Loading from "../Loading/loading";
 import SearchBar from "../SearchBar/searchBar";

const CategoriList = ({filterItems,children}) => {
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
      <div className="ps-3 w-100 d-flex align-items-center justify-content-between">
      <ul className="nav">
      <li className="nav-item" onClick={()=>filterItems()}>
        <div className="nav-link text-black"style={{cursor:"pointer"}} >فست فود ها</div>
     </li>
  {
  categories?.map((item)=>(
   <li className="nav-item text-danger " style={{cursor:"pointer", textAlign:'center', color:'black'}} key={item?.id} onClick={()=>filterItems(item.id)}>
      <div className="nav-link" style={{textAlign:'center', color:'black'}}>{item?.name}</div>
    </li>
  
  ))}
  </ul>
   {children}
   </div>
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