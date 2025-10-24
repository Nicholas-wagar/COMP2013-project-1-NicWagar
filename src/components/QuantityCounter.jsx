export default function QuantityCounter({productAmount, handleAddToAmount, 
    handleRemoveAmount, productid}){
    
    return (
        <div>
            <p>to add: {productAmount}</p>
            <div>
                <button onClick={() => handleAddToAmount(productid)}>+</button>

                <button onClick={() => handleRemoveAmount(productid)}>-</button>
            </div>
            
        </div>
        
    )
            
}