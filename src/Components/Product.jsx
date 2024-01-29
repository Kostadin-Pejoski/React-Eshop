export default function Product(props){
    return(
        <div className="product">
            <p className="category">Category:{props.category}</p>
            <p className="miscInProduct">Price: {props.price}$</p>
            <p className="miscInProduct">Rating: {props.rating}</p>
            <p className="miscInProduct">Title: {props.title}</p>
            <img className="product-image" src={props.image} alt={props.description}/>
            <button className="addToCartButton">Add To Cart</button>
        </div>
    )
}