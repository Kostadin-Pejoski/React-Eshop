import Header from "../Components/Header"
import LoginForm from "../Components/LoginForm"
export default function LoginPage(props){


    return(
        <>
            <Header/>
            <LoginForm user={props.user} handleLogin={props.handleLogin}/>
        </>
    )
}