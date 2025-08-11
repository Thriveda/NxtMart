import { createSlice } from "@reduxjs/toolkit"

let products = localStorage.getItem("cartProducts1")
let parsedProducts = products ? JSON.parse(products) : []
let amount = localStorage.getItem("amount")
let parsedAmount = amount ? parseFloat(amount) : 0
const cartSlice = createSlice({
    name:"cartSlice",
    initialState:{
        cartQuantity:0,
        cartProducts: parsedProducts,
        totalAmount:parsedAmount
    }, 
    reducers:{
        addItem:(state, actions)=>{
            state.cartQuantity++
            localStorage.setItem("cartProducts1", JSON.stringify(state.cartProducts))
            
            const addProduct = actions.payload;
            const checkPro = state.cartProducts.find((each)=>each.id === addProduct.id)
            if (!checkPro){
                const product = {...addProduct, quantity:1}
                state.cartProducts.push(product)
            }
            else{
                checkPro.quantity++
                
            }
        },
        deleteItem:(state, actions)=>{
            const delItem = actions.payload
            const checkProductInd = state.cartProducts.findIndex((each)=>each.id === delItem.id)
            if (checkProductInd === -1){
                alert("Not available")
            }
            else{
                if (state.cartProducts[checkProductInd].quantity===1){
                    state.cartProducts.splice(checkProductInd,1)
                }
                else{
                    state.cartProducts[checkProductInd].quantity--
                }
            }
            state.cartQuantity--;
            localStorage.setItem("cartProducts1", JSON.stringify(state.cartProducts))
            
        },
        amount:(state)=>{
            let ta=0;
            
            for (let i=0; i<state.cartProducts.length; i++){
                const price = state.cartProducts[i].price
                ta+=(parseFloat(price.slice(1))*parseInt(state.cartProducts[i].quantity))           
            }
            console.log(ta)
            state.totalAmount = ta
            localStorage.setItem("amount", JSON.stringify(state.totalAmount))
            
        }

    }
})

export default cartSlice