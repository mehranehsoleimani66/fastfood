import FastFoodItem from "../FastFoodItem/fastFoodItem";

const FastFoodList = ({fastFoodItems}) => {
    let delay = 0.1;
    return ( 
   <div className="row">
{fastFoodItems.map(item=>{
    delay+=0.30;
    return(
        <div className="col-md-4 sm-col-6 mb-grid-gutter" key={item.id}>
            <FastFoodItem {...item} delay={delay}/>
        </div>
    )
})}

   </div>
     );
}
 
export default FastFoodList;