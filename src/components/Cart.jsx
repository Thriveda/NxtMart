import Header from './Header'
import Footer from './Footer'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import cartSlice from '../redux/slices/CartSlice'
import Count from './Count'
import HeaderMV from './HeaderMV'

const actions =   cartSlice.actions

function Cart() {
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width:768px").matches)
  
  useEffect(()=>{
          const mediaQuery = window.matchMedia("(max-width: 768px)")
          const handleResize = (e) => setIsMobile(e.matches)
          mediaQuery.addEventListener("change", handleResize)
          return () => mediaQuery.removeEventListener("change", handleResize) 
      }, [])

   const cartProducts = useSelector((store)=>{
      return store.cartState.cartProducts 
   })
   const cartQuantity = useSelector((store)=>{
      return store.cartState.cartQuantity
   })
   const totalAmount = useSelector((store)=>{
      return store.cartState.totalAmount
   })
    
   const navigate = useNavigate()
   const dispatch = useDispatch()
  function onIncrement(item){
        
        dispatch(actions.addItem(item))
        dispatch(actions.amount())
    }
    function onDecrement(item){
        dispatch(actions.deleteItem(item))
        dispatch(actions.amount())     
    }
    function checkoutBut(){
      navigate('/paymentpage', {replace:true})
    }
  return (
    isMobile ?  
    <div className='flex flex-col py-3 h-screen'>
        <h1 className='text-2xl self-center'>Checkout</h1>
        <p className='self-end my-1 mx-4'>items({cartQuantity===0 ? 0 : cartQuantity})</p>
        {cartQuantity !== 0 ? <div className='flex flex-col justify-between items-center'>
          <ul className='flex flex-col justify-start mt-6 w-screen pb-4'>
          {cartProducts.map((item)=>{
          return(
            <li className='flex flex-row justify-between items-center mb-2'>
              <div className='flex flex-row justify-between items-center'>
                <img src={item.image} className='h-[64px] w-[84px] m-4' alt={item.name} />
                <div className='flex flex-col ml-1'>
                  <p className="font-medium line-clamp-1">{item.name}</p>
                  <p className="text-[gray] m-1">{item.weight}</p>
                  <p className="font-semibold">{item.price}</p>
                </div>
              </div>
              <div className="flex flex-row border-2 border-[#088C03] text-[#088C03] rounded-md py-1 px-3 mr-6">
                <button onClick={()=>onIncrement(item)} className="">+</button>
                <p className="mx-2.5"><Count cartProducts={cartProducts} id={item.id}/></p>
                <button onClick={()=>onDecrement(item)} className="">-</button>
              </div>                  
            </li>  
          )
        })}   
          </ul>     
          <div className='flex flex-row justify-center items-center' style={{"margin-bottom":"30%"}}>
            <p>Total ({cartProducts.length} items) : ₹ {totalAmount}</p>
            <button className='bg-[#088C03] ml-3 px-2 py-1.5 rounded-md text-[white]' onClick={checkoutBut}>Checkout</button>
          </div>
       </div> :
      <div className='flex flex-col justify-center items-center min-h-[65vh]'>
        <img src="https://res.cloudinary.com/dpqs7ibuh/image/upload/v1754391602/Logo_qzeygb.png" alt="logo" className='size-12'/>
        <p className=''>Cart is empty</p>
      </div> }
       <div className='fixed bottom-0 w-screen bg-[#FFFFFF] mt-3'>
       <HeaderMV />
       </div>
    </div> :
     <div className='h-screen'>
      <div>
      <Header/>
      </div>
      {cartProducts.length!==0?<div className = "pb-3">
        <h1 className='font-bold text-2xl mt-10 ml-34'>Items</h1>
        <ul className='flex flex-col justify-start mx-34 mt-6 border-3 border-[#D8D8D8] rounded-lg mb-5'  style={{"margin-bottom":"15%"}} >
          {cartProducts.map((item)=>{
            return(
              <>
              <li className='flex flex-row justify-between items-center mb-2'>
                <div className='flex flex-row justify-start items-center'>
                  <img src={item.image} className='h-[120px] w-[150px] m-4' alt={item.name} />
                  <div className='flex flex-col ml-10'>
                    <p className="text-sm font-medium line-clamp-2">{item.name}</p>
                    <p className="text-sm text-[gray] m-1">{item.weight}</p>
                    <p className="text-sm font-semibold">{item.price}</p>
                  </div>
                </div>
                <div className="flex flex-row border-2 border-[#088C03] text-[#088C03] rounded-md py-1 px-3 mr-6">
                  <button onClick={()=>onIncrement(item)} className="">+</button>
                  <p className="mx-2.5"><Count cartProducts={cartProducts} id={item.id}/></p>
                  <button onClick={()=>onDecrement(item)} className="">-</button>
                </div>                  
              </li>
              <div className='h-0.5 bg-[#D8D8D8] mx-3'></div>
              </>
              
            )
          })}        
          <div className='flex flex-row justify-end items-center mx-36 my-6'>
            <p>Total ({cartProducts.length} items) : ₹ {totalAmount}</p>
            <button className='bg-[#088C03] ml-3 px-2 py-1.5 rounded-md text-[white]' onClick={checkoutBut}>Checkout</button>
          </div>
        </ul>
      </div>:
      <div className='flex flex-col justify-center items-center min-h-[60vh]'>
        <img src="https://res.cloudinary.com/dpqs7ibuh/image/upload/v1754391602/Logo_qzeygb.png" alt="logo" className='size-12'/>
        <p className=''>Cart is empty</p>
      </div>}
      <div className='fixed bottom-0 w-screen z-50'>
        <Footer />
      </div>
    </div> 
  )
}

export default Cart