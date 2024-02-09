import Product from "./Product"
import { ProductsContext, } from "../App"
import { useContext, useEffect } from "react"
export default  function ProductsMain(){
    
    const {products} = useContext(ProductsContext)
    const {handleProductsSorting} = useContext(ProductsContext)
    useEffect(()=>{
        handleProductsSorting('default')
    },[])
    // console.log(products[0])
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
                <select onChange={(e)=>handleProductsSorting(e.target.value)} id="sortByLabel">
                    <option value={"default"}>Default</option>
                    <option value={"cheapest"}>Cheapest first</option>                    
                    <option value={"expensive"}>Most expensive first</option>                    
                    <option value={"ratting worst"}>Worst rated first</option>                    
                    <option value={"ratting best"}>Best rated first</option>                    
                </select>
            </div>
            <div className="products">
            {productsElements}        
            </div>
        </div>
    )
}