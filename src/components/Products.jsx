import { useSelector, useDispatch } from "react-redux"
import cartSlice from "../redux/slices/CartSlice"
import Count from "./Count"
import './index.css'


const actions = cartSlice.actions

function Products(props){
    const {each} = props
    const cartProducts = useSelector((store)=>{
        return store.cartState.cartProducts
    })
    
    const dispatch = useDispatch()
    function addButton(item){
        dispatch(actions.addItem(item))
        dispatch(actions.amount())
    }
    function onIncrement(item){
        dispatch(actions.addItem(item))
        dispatch(actions.amount())
    }
    function onDecrement(item){
        dispatch(actions.deleteItem(item))
        dispatch(actions.amount())
    }
    return(
        <div className="flex flex-row justify-start items-start overflow-x-auto no-scrollbar">
            {each.products.map((item)=>{
                return(
                    <div className="border-2 border-[#D8D8D8] rounded-lg h-[236px] md:h-[250px] min-w-[192px] md:min-w-[256px] p-6 m-1.5 md:m-3 flex flex-col justify-between items-center">
                        <img src={item.image} alt={item.name} className="h-[92px] md:h-[116px] w-[112px] md:w-[150px]" />
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-col">
                                <p className="text-sm font-medium line-clamp-2">{item.name}</p>
                                <p className="text-sm text-[gray]">{item.weight}</p>
                                <p className="text-sm font-semibold">{item.price}</p>
                            </div>
                            {cartProducts?.some((cartItem)=>cartItem.id===item.id)? <div className="flex flex-row border-2 border-[#088C03] text-[#088C03] rounded-md py-1 px-3 ml-2.5">
                                <button onClick={()=>onIncrement(item)} className="">+</button>
                                <p className="md:mx-2.5"><Count cartProducts={cartProducts} id={item.id}/></p>                                
                                <button onClick={()=>onDecrement(item)} className="">-</button>
                            </div>:<button className="border-2 border-[#088C03] text-[#088C03] rounded-md py-1 px-4 md:px-5 ml-3" onClick={()=>addButton(item)}>Add</button>}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Products