
import { useEffect, useState } from "react";
import axios from "./axios";


   const instance = axios.create({
    baseURL:"http://react-mini-projects-api.classbon.com",});
    
    
    const useAxios = (axiosParam) => {
    
    const [response,setResponse]= useState(null);
    const [error,setError]= useState('');
    const [loading,setLoading]= useState(true);

    const  fetchData= async()=>{
        try{
            setLoading(true);
            const response =await instance.request (axiosParams);
           
            setLoading(false)
            setFastFoods(response.data);
        }
         
            catch (error) {
                console.log(error);
              }
         }  
       
    
    
    useEffect(()=>{
        fetchData();
    },[axiosParams.url])



   
 return [response,error,loading];
     
}
 
export default useAxios;