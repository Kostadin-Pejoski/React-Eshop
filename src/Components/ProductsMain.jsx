import Product from "./Product"
import { ProductsContext } from "../App"
import { useContext } from "react"
export default  function ProductsMain(){
    const products = useContext(ProductsContext)
    const productsElements = products.map(product=><Product 
        category={product.category} key={product.id}
        title={product.title}
        price={product.price}
        image={product.image}
        rating={product.rating.rate}
     />)
    return (
        <div className="products">
            {productsElements}        
        </div>
    )
}