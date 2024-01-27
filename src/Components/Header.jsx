import { Link } from "react-router-dom"

export default function Header(){
    return(
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='checkout'>Checkout</Link>
                <Link to='login'>Login</Link>
                <Link to='products'>Products</Link>
            </nav>
        </header>
    )
}