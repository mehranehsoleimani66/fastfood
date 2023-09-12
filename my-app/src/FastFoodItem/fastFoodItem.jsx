import { BsFillCartFill } from "react-icons/bs";
import './fastFoodItem.css';
const FastFoodItem = ({name, ingredient,price,imageUrl,delay}) => {
    return ( 
        <div className="card product-card h-100 border-0 shadow-sm pb-1 fade-In-Horiz" style={{animationDelay:delay + 's'}}>
             <span className="badge badge-end-0 badge-shadow bg-success fs-md fw-medium">
                قیمت : {price.toLocaleString()} تومان
             </span>
             <div className="card__placeholder">
             <img  className="card-img-top" src={imageUrl}/>
             </div>
             
             <div className="card-body text-center pt-3 pb-4 d-flex flex-column">
                <h2 className="mb-2">{name}</h2>
                <div className="fs-ms fw-bold text-muted mb-3">{ingredient}</div>
                <button className="btn btn-outline-success btn-sm w-100 mt-auto fw-bold">
                <BsFillCartFill className="fs-5 ms-3"/>افزودن به سبد خرید
                </button>
             </div>

        </div>
     );
}
 
export default FastFoodItem;