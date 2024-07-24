import { useRef } from "react"
import {  useNavigate } from "react-router"
export default function RegisterForm(){
    const nameInput = useRef()
    const lastNameInput=useRef()
    const passwordInput=useRef()
    const userNameInput=useRef()
    const navigate=useNavigate()
    function registerFunc(e){
        e.preventDefault()
        let name=nameInput.current.value
        let lastName=lastNameInput.current.value
        let password=passwordInput.current.value
        let userName=userNameInput.current.value
        
        if(name!=='' && lastName!=='' && password!=='' && userNameInput.current.value!==''){
            if(localStorage.getItem(userName)!=null){
                alert('user with this username already exists')
            }
            else{
                const newUser = {
                    firstName:name,
                    userName:userName,
                    lastName:lastName,
                    password:password
                }
                localStorage.setItem(userName,JSON.stringify(newUser))
                alert('sucessfull register')
                navigate('/')
            }
        }
        else{
            alert('please make sure you filled all the fields')
        }
    }

    return (
        <form className="login-container" >
        <input ref={nameInput} className="input-field" type="text" placeholder="first name"/>
        <input  ref={lastNameInput} className="input-field" type="text" placeholder="last name"/>
        <input  ref={userNameInput} className="input-field" type="text" placeholder="user name"/>
        <input ref={passwordInput} className="input-field" type="password" placeholder="password"/>
        <button className="login-button" onClick={registerFunc}>Register</button>
        </form>
    )
}