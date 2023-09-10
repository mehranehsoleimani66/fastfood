import { useEffect } from "react";
import axios from 'axios';

const CategoriList = () => {

    useEffect(()=>{

        const fetchCategory = async () => {
            try {
              const response = await axios.get("https://react-mini-projects-api.classbon.com/FoodCategory/categories");
              console.log(response.date);
            } catch (error) {
              console.log(error);
            }
          };
        
          fetchCategory();
        }, []);
       
    }



// const fetchCategory = async () => {
//     const response = await axios.get("https://react-mini-projects-api.classbon.com/FoodCategory/categories")
//     console.log(response.date);
// }
// fetchCategory();

  
    return <div>categori</div>

 
export default CategoriList;