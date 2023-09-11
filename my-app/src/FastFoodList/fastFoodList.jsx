import FastFoodItem from "../FastFoodItem/fastFoodItem";

const FastFoodList = ({fastFoodItems}) => {
    return ( 
   <div className="row">
{fastFoodItems.map(item=>{
    return(
        <div className="col-md-4 sm-col-3 mb-grid-gutter" key={item.id}>
            <FastFoodItem {...fastFoodItems}/>
        </div>
    )
})}

   </div>
     );
}
 
export default FastFoodList;