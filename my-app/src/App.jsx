import CategoriList from "./CategoriList/categoriList";
import Header from "./Header/header";
import './App.css';
import { useEffect, useState } from "react";

import Loading from "./Loading/loading";
import FastFoodList from "./FastFoodList/fastFoodList";
import SearchBar from "./SearchBar/searchBar";
import notFound from './assets/images/notFound.png'
import useAxios from "./useAxios";



function App() {
    const [url,setUrl]= useState('/FastFood/list');
    const [fastFoodItems, ,loading]= useAxios({
        url,
    });

   
const filterItems =(categoryId)=>{
   setUrl( `/FastFood/list${categoryId?  '?categoryId=' + categoryId:''}`);
}


const searchItems = async( term)=>{
    setUrl(`/FastFood/search/${term ? '?term=' + term:''}`)
   
};

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
};

 return(
    
  <div className="wrapper bg-fade-dark">
  <Header> </Header>
  <CategoriList filterItems={filterItems}>
  <SearchBar searchItems={searchItems}/>
  </CategoriList>

<div className="container mt-4" >{renderContent()}
</div>
  </div>
 );

}
export default App;
