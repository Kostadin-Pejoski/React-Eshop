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
        password:password,
        cart:new Map(),
        calculateTotal:function (){
          let total=0
          this.cart.forEach((value,key)=>{
            total+=value.quanitity*value.price
          })
          return total
        },
        generateCartLiElements:function(){
           return Array.from(this.cart.values()).map(product=>
            <li class="product-item">
            <p class="placeholder">Name: {product.name}</p>
            <p class="placeholder">Quantity: {product.quanitity}</p>
            <p class="placeholder">Price per one: {product.price}$</p>
            <p class="placeholder">Total: {product.quanitity*product.price}$</p>
            <div className='quantityDiv'>
              <button className='quantityBtn' onClick={()=>handleQuantityChange(product.id,'increment')}>+</button>
              <button className='quantityBtn' onClick={()=>handleQuantityChange(product.id,'decrement')}>-</button>
            </div>
            </li>
           )
        }
      }
      setUser(currentUser)
    }
  }

  function handleQuantityChange(id,action){
    setUser(prevUser=>{
          let updateUser={...prevUser}
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
        let updateUser={...prevUser}
        updateUser.cart.set(product.id,product)
        return updateUser
      })
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
            <ProductsContext.Provider value={{products,handleAddProduct}}>
            <ProductsPage></ProductsPage>
            </ProductsContext.Provider>
            } path='products'/>
          </Routes>
        </BrowserRouter>
        </UserContext.Provider>
  )
}

export default App;
