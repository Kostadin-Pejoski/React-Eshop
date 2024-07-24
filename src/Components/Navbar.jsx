import { UserContext } from "../App"
import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
export function Navbar() {

    
    const value = useContext(UserContext)
    const [visible,setVisible] = useState(false)

    useEffect(()=>{
        window.addEventListener("resize",resizeHandler)

        return ()=>{
            window.removeEventListener("resize",resizeHandler)
        }
    },[])

    function resizeHandler(){
        return
    }

    const desktop = <nav>
    <NavLink to='/'>Home</NavLink>
    {value.user!=null && <NavLink to='/checkout'>Checkout</NavLink>}
    {value.user!=null && <NavLink to='/products'>Products</NavLink>}
    <NavLink to='/register'>Register</NavLink>
    {value.user==null?<NavLink to='/login'>Log in</NavLink>:<NavLink onClick={value.handleLogOut} to='/login'>Log Out</NavLink>}
    </nav>

    return (
      desktop 
    )
}