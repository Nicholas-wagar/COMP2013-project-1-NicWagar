
import ProductCard from "./ProductCard";
export default function ProductCardContainer({data, productAmount, setProductAmount, 
    handleAddToAmount, handleRemoveAmount, handleAddToCart} ) {
    
    return(
        <div className = "productCardContainer">
            {data.map((product) => (
                <ProductCard key={product.id} {...product} 
                productAmount={productAmount.find((prod) => prod.id == product.id)}
                setProductAmount={setProductAmount} 
                handleAddToAmount = {handleAddToAmount}
                handleRemoveAmount = {handleRemoveAmount} 
                productid = {product.id}
                handleAddToCart = {handleAddToCart}/>
            ))}
        </div>
    );
        
    
}