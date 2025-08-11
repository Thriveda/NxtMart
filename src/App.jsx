import './App.css'
import { Routes , Route } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import Cart from './components/Cart'
import PageNotFound from './components/PageNotFound'
import ProtectedRoute from './components/ProtectedRoute'
import PaymentPage from './components/PaymentPage'


function App() {
  return (

      <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/home' element={<ProtectedRoute>
          <Home />
        </ProtectedRoute>}>
        </Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/paymentpage' element={<PaymentPage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    
  )
}

export default App
