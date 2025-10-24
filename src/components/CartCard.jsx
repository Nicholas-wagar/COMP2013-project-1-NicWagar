import QuantityCounter from "./QuantityCounter";

export default function CartCard({productid, product, amount, price, image, handleRemoveFromCart, handleRemoveAmount, handleAddToAmount, handleAddToCart}){
return (
    <div className = "CartCard">
    <img src={image} alt="" height="50px"/>
    <h2>{product}</h2>
    <p>amount: {amount}</p>
    <p>Total Price: {(amount * price).toFixed(2)}</p>
    
    <QuantityCounter productAmount = {amount} handleAddToAmount = {handleAddToAmount}
             handleRemoveAmount = {handleRemoveAmount}  handleAddToCart = {handleAddToCart} productid = {productid} />
    <div>
    <button onClick={() => handleAddToCart(productid)}>add</button>

    <button onClick= {() => handleRemoveFromCart()}>Remove</button> 
    </div>
    </div>
);
}