import CategoriList from "./CategoriList/categoriList";
import Header from "./Header/header";
import './App.css';
import { useEffect, useState } from "react";
import axios from "./axios";
import Loading from "./Loading/loading";
import FastFoodList from "./FastFoodList/fastFoodList";




function App() {
    const [loading,setLoading]= useState(false)
    const [fastFoodItems,setItems]= useState([])

   const  fetchData= async(categoryId=null)=>{
    try{
        setLoading(true);
        const response =await axios.get (
        `/Course/list${categoryId?  '?categoryId=' + categoryId:''}`) ;
       
        console.log(response.data , 'fastFoodItems');
    }
     
        catch (error) {
            console.log(error);
          }
     }  
   


useEffect(()=>{
    fetchData();
},[])

const renderContent= ()=>{
 if (loading){
    return <Loading theme ='dark'/>
   }
return <FastFoodList fastFoodItems={fastFoodItems}/>
}

 return(
    
  <div className="wrapper bg-fade-dark">
  <Header> </Header>
  <CategoriList></CategoriList>
<div className="container mt-4" >
{renderContent()}
</div>
  </div>
 )
}

export default App;
