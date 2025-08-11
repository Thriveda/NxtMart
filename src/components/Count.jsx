function Count(props){
    const {cartProducts, id} = props
    let num = 0 ;
    for(let i=0; i < cartProducts.length; i++){
        if(cartProducts[i].id == id){
           num =cartProducts[i].quantity;
        }
    }
    return(<>
    {num}
    </>)
}
export default Count