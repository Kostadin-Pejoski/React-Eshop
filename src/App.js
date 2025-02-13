import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import CheckOutPage from './Pages/CheckoutPage'
import ProductsPage from './Pages/ProductsPage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { useState,createContext, useEffect} from 'react'
import Register from './Pages/Register'
import User from './User'

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

  function handleLogin(userName,passowrd){
    if(user==null){
      let currentUser=JSON.parse(localStorage.getItem(userName))
        if(currentUser.password===passowrd){
          setUser(new User(currentUser))
          return true
        }
        return false
    }
  }


  function handleProductsSorting(sortBy){
      if(sortBy==='ratting worst'){
        setProducts(prevProducts=>[...prevProducts].sort((a,b)=>a.rating.rate>b.rating.rate ? 1: -1))
      }
      else if(sortBy==='ratting best'){
        setProducts(prevProducts=>[...prevProducts].sort((a,b)=>a.rating.rate>b.rating.rate ? -1: 1))
      }
      else if(sortBy==='expensive'){
        setProducts(prevProducts=>[...prevProducts].sort((a,b)=>a.price>b.price ? -1: 1))
      }
      else if(sortBy==='cheapest'){
        setProducts(prevProducts=>[...prevProducts].sort((a,b)=>a.price>b.price ? 1: -1))
        
      }
      else{
        setProducts(prevProducts=>[...prevProducts].sort((a,b)=>a.id>b.id ? 1: -1))
      }
  }

  function handleQuantityChange(id,action){
    setUser(prevUser=>{
          let updateUser=new User(prevUser)
          let updatedProduct=updateUser.cart.get(id)
          if(action==='increment'){
            updatedProduct.quanitity=updatedProduct.quanitity+1
          }
          else{
            if(updatedProduct.quanitity===1){
              updateUser.cart.delete(id)
              return updateUser
            }
            else{
              updatedProduct.quanitity=updatedProduct.quanitity-1
            }
          }
          updateUser.cart.set(id,updatedProduct)
          return updateUser
        })
  }

  function handleAddProduct(product){
      setUser(prevUser=>{
        let updateUser=new User(prevUser)
        updateUser.cart.set(product.id,product)
        return updateUser
      })
  }

  function handleLogOut(){
    setUser(null)
  }

  return (
        <UserContext.Provider value={{user:user,handleLogOut:handleLogOut,handleLogin:handleLogin,handleAddProduct,handleQuantityChange}}>
        <BrowserRouter>
          <Routes>
            <Route element={<HomePage></HomePage>} path='/home'/>
            <Route element={<Register></Register>} path='/register'/>
            <Route index element={<HomePage></HomePage>}/>
            <Route element={<LoginPage user={user} handleLogin={handleLogin}></LoginPage>} path='/login'/>
            <Route element={<CheckOutPage></CheckOutPage>} path='/checkout'/>
            <Route element={
            <ProductsContext.Provider value={{products,handleAddProduct,handleProductsSorting}}>
            <ProductsPage></ProductsPage>
            </ProductsContext.Provider>
            } path='products'/>
          </Routes>
        </BrowserRouter>
        </UserContext.Provider>
  )
}

export default App;
