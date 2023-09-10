import { useEffect, useState } from "react";
import axios from 'axios';

const CategoriList = () => {
const [categories , setCategories] = useState([])
    useEffect(()=>{

        const fetchCategory = async () => {
            try {
              const response = await axios.get("https://react-mini-projects-api.classbon.com/FoodCategory/categories");
              setCategories(response.date);
            } catch (error) {
              console.log(error);
            }
          };
        
          fetchCategory();
        }, []);
      
//   if (categories.length === 0) {
//     return <div>Loading...</div>;
//   }
       
  console.log(categories,'categories')
    return (
    
    <nav className="container mt-n5">
        <div className="d-flex align-items-center bg-white  rounded-3 py-4 shadow-lg py-4" style={{height:"80px"}}>
          <ul className="nav">
            <li className="nav-item">
              <a href="#" className="nav-link">فست فود ها</a>
           </li>
       {categories?.map((item)=>{
           <div>{console.log(categories,'llllllllll')}
          <li className="nav-link text-danger" key={item.id}>
            <a className="nav-link " href="#">{item?.name}</a>
          </li>
          </div>
            })}
             </ul>

        </div>
    </nav>
        ) }
 
export default CategoriList;