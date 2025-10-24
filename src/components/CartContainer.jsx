import CartCard from "./CartCard";

export default function CartContainer({cart, handleRemoveFromCart, handleAddToAmount,
     handleRemoveAmount, handleAddToCart, handleRemoveCart }){
return ( <div>
    {cart.map((item) => <CartCard key={item.id} {...item} 
    amount={item.amount} price={item.price} 
    image={item.image} productid = {item.id} 
    product = {item.productName}
    handleRemoveFromCart = {handleRemoveFromCart} 
    handleAddToAmount = {handleAddToAmount}
    handleRemoveAmount = {handleRemoveAmount}  handleAddToCart = {handleAddToCart}/>)}
    <button onClick={handleRemoveCart}>empty cart</button>
</div>
);
}