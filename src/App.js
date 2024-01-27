import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import CheckOutPage from './Pages/CheckoutPage'
import ProductsPage from './Pages/ProductsPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
 
  return (
        <BrowserRouter>
          <Routes>
            <Route element={<HomePage></HomePage>} path='/home'/>
            <Route index element={<HomePage></HomePage>}/>
            <Route element={<LoginPage></LoginPage>} path='/login'/>
            <Route element={<CheckOutPage></CheckOutPage>} path='/checkout'/>
            <Route element={<ProductsPage></ProductsPage>} path='products'/>
          </Routes>
        </BrowserRouter>
  )
}

export default App;
