import QuantityButtons from "./QuantityButtons"
export default function CartProduct({product}){
    return (
        <li className="product-item" key={product.id}>
            <p className="placeholder">Name: {product.name}</p>
            <p className="placeholder">Price per one: {product.price}$</p>
            <p className="placeholder">Total: {product.quanitity*product.price}$</p>
            <QuantityButtons productId={product.id}/>
            </li>
    )
}