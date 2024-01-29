import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import CheckOutPage from './Pages/CheckoutPage'
import ProductsPage from './Pages/ProductsPage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { useState,createContext, useEffect} from 'react'

export const UserContext = createContext()
export const ProductsContext = createContext()
function App() {
  const [user,setUser] = useState(null)
  const [products,setProducts] = useState([])
  useEffect(()=>{
    fetchAndSetProducts()
  },[])

  async function fetchAndSetProducts(){
   
    let res = await fetch('https://fakestoreapi.com/products')
    let json = await res.json()
    setProducts(json)
  }

  function handleLogin(firstName,lastName,password){
    if(user==null){
      let currentUser={
        firstName:firstName,
        lastName:lastName,
        password:password
      }
      setUser(currentUser)
    }
  }

  function handleLogOut(){
    setUser(null)
  }

  return (
        <UserContext.Provider value={{user:user,handleLogOut:handleLogOut,handleLogin:handleLogin}}>
        <BrowserRouter>
          <Routes>
            <Route element={<HomePage></HomePage>} path='/home'/>
            <Route index element={<HomePage></HomePage>}/>
            <Route element={<LoginPage user={user} handleLogin={handleLogin}></LoginPage>} path='/login'/>
            <Route element={<CheckOutPage></CheckOutPage>} path='/checkout'/>
            <Route element={
            <ProductsContext.Provider value={products}>
            <ProductsPage></ProductsPage>
            </ProductsContext.Provider>
            } path='products'/>
          </Routes>
        </BrowserRouter>
        </UserContext.Provider>
  )
}

export default App;
