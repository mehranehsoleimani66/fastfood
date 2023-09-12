import CategoriList from "./CategoriList/categoriList";
import Header from "./Header/header";
import './App.css';
import { useEffect, useState } from "react";
import axios from "./axios";
import Loading from "./Loading/loading";
import FastFoodList from "./FastFoodList/fastFoodList";
import SearchBar from "./SearchBar/searchBar";
import notFound from './assets/images/notFound.png'




function App() {
    const [loading,setLoading]= useState(true)
    const [fastFoodItems,setFastFoods]= useState([])

   const  fetchData= async(categoryId=null)=>{
    try{
        setLoading(true);
        const response =await axios.get (
        `/FastFood/list${categoryId?  '?categoryId=' + categoryId:''}`) ;
       
        setLoading(false)
        setFastFoods(response.data);
    }
     
        catch (error) {
            console.log(error);
          }
     }  
   


useEffect(()=>{
    fetchData();
},[])


const filterItems =(categoryId)=>{
fetchData(categoryId);
}


const searchItems = async( term)=>{
    setLoading(true);
    try {
        const response = await axios.get(`/FastFood/search/${term ? '?term=' + term:''}`)
        const {data} = response
        setFastFoods(data)
        setLoading(false);
      
      } catch (error) {
        console.log(error);
      }
}



const renderContent= ()=>{
 if (loading){
    return <Loading theme ='dark'/>
   }

   if (fastFoodItems.length===0){
    return (
        <>
         <div className="alert alert-warning text-center">
             <p>آیتم مورد نظر یافت نشد </p>
        <img className="mx-auto mt-5 d-black fade-In-Horiz" src={notFound} />
        </div>
        </>   
    )
}
return <FastFoodList fastFoodItems={fastFoodItems}/>
}

 return(
    
  <div className="wrapper bg-fade-dark">
  <Header> </Header>
  <CategoriList filterItems={filterItems}>
  <SearchBar searchItems={searchItems}/>
  </CategoriList>

<div className="container mt-4" >{renderContent()}
</div>
  </div>
 )
}

export default App;
