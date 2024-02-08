import Product from "./Product"
import { ProductsContext, } from "../App"
import { useContext } from "react"
export default  function ProductsMain(){
    
    const {products} = useContext(ProductsContext)
    const productsElements = products.map(product=><Product 
        category={product.category} key={product.id}
        title={product.title} id={product.id}
        price={product.price}
        image={product.image}
        rating={product.rating.rate}
     />)
    return (
        <div>
            <div className="productsMain">
                <label htmlFor="sortByLabel">Sort by:</label>
                <select id="sortByLabel">
                    <option>Cheapest first</option>                    
                    <option>Most expensive first</option>                    
                    <option>Ratting</option>                    
                </select>
            </div>
            <div className="products">
            {productsElements}        
            </div>
        </div>
    )
}