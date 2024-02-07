import { ProductsContext, UserContext } from "../App"
import { useContext } from "react"

export default function Product(props){
    const {handleAddProduct} = useContext(ProductsContext)
    const {user} = useContext(UserContext)

    console.log(user)
    const currentProduct={
        price:props.price,
        id:props.id,
        quanitity:1,
        name:props.title
    }
    return(
        <div className="product">
            <p className="category">Category:{props.category}</p>
            <p className="miscInProduct">Price: {props.price}$</p>
            <p className="miscInProduct">Rating: {props.rating}</p>
            <p className="miscInProduct">Title: {props.title}</p>
            <img className="product-image" src={props.image} alt={props.description}/>
            {!user.cart.has(props.id) &&<button onClick={()=>handleAddProduct(currentProduct)} className="addToCartButton">Add To Cart</button>}
        </div>
    )
}