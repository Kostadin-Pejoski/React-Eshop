import { useContext } from "react"
import { UserContext } from "../App"

export default function QuantityButtons({productId}){
    const {handleQuantityChange} = useContext(UserContext)
    const {user} = useContext(UserContext)
    return (
        <div className='quantityDiv'>
              <button className='quantityBtn' onClick={()=>handleQuantityChange(productId,'increment')}>+</button>
              <p>Current Quantity:{user.cart.get(productId).quanitity}</p>
              <button className='quantityBtn' onClick={()=>handleQuantityChange(productId,'decrement')}>-</button>
            </div>
    )
}