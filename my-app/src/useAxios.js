
import { useEffect, useState } from "react";
import axios from 'axios';


   const instance = axios.create({
    baseURL:"https://react-mini-projects-api.classbon.com",});
    
    
    const useAxios = (axiosParams) => {
    
    const [response,setResponse]= useState(null);
    const [error,setError]= useState('');
    const [loading,setLoading]= useState(true);

    const  fetchData= async()=>{
        try{
            
            const response =await instance.request (axiosParams);
           
            setResponse(response.data);
            console.log(response);
        }
         
            catch (error) {
                console.log(error);
              }
             finally {
                setLoading(false);
              }
         }  
       
    
    
    useEffect(()=>{
        fetchData();
    },[axiosParams.url])



   
 return [response,error,loading];
     
};
 
export default useAxios;