import { useNavigate } from "react-router"

export default function LoginForm(){
    function prevent(e){
        e.preventDefault()
    }
    const navigate=useNavigate()
    function loginFunc(){
        navigate(-1)
    }

    return (
        <form onSubmit={prevent}>
            <input type="text" placeholder="first name"/>
            <input type="text" placeholder="last name"/>
            <input type="text" placeholder="password"/>
            <button onClick={loginFunc}>Log in</button>
        </form>
    )
}