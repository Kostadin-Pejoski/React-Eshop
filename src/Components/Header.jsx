import {NavLink } from "react-router-dom"
import '../index.css'
import { UserContext } from "../App"
import { useContext } from "react"

export default function Header(){
    const value = useContext(UserContext)
    let loginLogout
    if(value.user==null){
        loginLogout=<NavLink to='/login'>Log in</NavLink>
    }
    else{
        loginLogout=<NavLink onClick={value.handleLogOut} to='/login'>Log Out</NavLink>
    }
    return(
        <header>
            <p>Pazar 4</p>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/checkout'>Checkout</NavLink>
                <NavLink to='/products'>Products</NavLink>
                {loginLogout}
            </nav>
        </header>
    )
}