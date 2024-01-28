import { Link } from "react-router-dom"

export default function Header(){
    return(
        <header>
            <p>Place holder shop name</p>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='checkout'>Checkout</Link>
                <Link to='login'>Login</Link>
                <Link to='products'>Products</Link>
            </nav>
        </header>
    )
}