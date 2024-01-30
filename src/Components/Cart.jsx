import { useNavigate } from "react-router"
import { UserContext } from "../App"
import { useContext,useRef } from "react"
export default function Cart(){
    const passwordConfirmRef = useRef()
    const {user,handleLogOut} = useContext(UserContext)
    const navigate = useNavigate()
    function handleCheckout(){
        if(passwordConfirmRef.current.value===user.password){
            alert('sucessfull checkout')
            navigate('/')
            handleLogOut()
        }
        else{
            alert('incorrect password')
        }
        passwordConfirmRef.current.value=''
    }

    return (
        <div className="order-container">
            <div className="short">
            <h1 className="total-price">Total Price: {user.calculateTotal().toFixed(2)}$</h1>
            <input ref={passwordConfirmRef} type="password" placeholder="Insert password to confirm purchase" className="input-field"/>
            <button onClick={handleCheckout} className="confirm-checkout-btn">Confirm checkout</button>
            </div>
            <h2 className="product-list-heading">List of Products:</h2>
            <ul className="product-list">
               {user.generateCartLiElements()}
            </ul>
        </div>
    )
}