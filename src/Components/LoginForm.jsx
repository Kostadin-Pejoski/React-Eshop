import { useRef} from "react"
export default function LoginForm(props){
    const passwordInput = useRef()
    const userNameInput = useRef()
    function prevent(e){
        e.preventDefault()
    }
    function loginFunc(){
        if(passwordInput.current.value==='' || userNameInput.current.value===''){
            alert('not all fields are filled in')
            return
        }
        else{
            if(localStorage.getItem(userNameInput.current.value)==null){
                alert('no such user exists')
                // userNameInput.current.value=''
                // passwordInput.current.value=''
                // nameInput.current.value=''
                // lastNameInput.current.value=''
            }
            else{

                if(props.handleLogin(userNameInput.current.value,passwordInput.current.value)===false){
                    alert('wrong password')
                }
            }
        }
    }
    const form =  <form className="login-container" onSubmit={prevent}>
        <input ref={userNameInput} className="input-field" type="text" placeholder="user name"/>
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