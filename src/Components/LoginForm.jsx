import { useRef} from "react"
export default function LoginForm(props){
    const nameInput = useRef()
    const lastNameInput = useRef()
    const passwordInput = useRef()
    function prevent(e){
        e.preventDefault()
    }
    function loginFunc(){
        if(nameInput.current.value==='' || lastNameInput.current.value==='' || passwordInput.current.value===''){
            alert('not all fields are filled in')
            return
        }
        else{
            props.handleLogin(nameInput.current.value,lastNameInput.current.value,passwordInput.current.value)       
        }
    }
    const form =  <form className="login-container" onSubmit={prevent}>
        <input ref={nameInput} className="input-field" type="text" placeholder="first name"/>
        <input  ref={lastNameInput} className="input-field" type="text" placeholder="last name"/>
        <input ref={passwordInput} className="input-field" type="password" placeholder="password"/>
        <button className="login-button" onClick={loginFunc}>Log in</button>
        </form>
    let render
    if(props.user==null){
        render=form
    }
    else{
        render=<div className="logged-in-message">
            <p>Sucessfull login</p>
            <p>Welcome back {props.user.firstName} {props.user.lastName}</p>
        </div>
    }
    return (
       render
    )
}