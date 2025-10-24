import QuantityCounter from "./QuantityCounter"
export default function ProductCard({image, productName, brand, price, quantity, productAmount
, handleAddToAmount, handleRemoveAmount, productid, handleAddToCart}){
   
 
    
    return(
        <div className="ProductCard">
            
            <img src={image} alt="" height="100px" />
            
            <h3>{productName}</h3>
            <h5>{brand}</h5>

            <p>Price: ${price}</p>

            <p>Quantity: {quantity}</p>
            
            
            
            <QuantityCounter productAmount = {productAmount.amount} handleAddToAmount = {handleAddToAmount}
             handleRemoveAmount = {handleRemoveAmount} productid = {productid} handleAddToCart = {handleAddToCart} />
        
            <div>
                <button onClick={() => handleAddToCart(productAmount)}>ADD TO CART</button>
            </div>
         
        </div>
    )
}