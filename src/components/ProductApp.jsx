
import { useState } from "react";
import empty from '../assets/cart-empty.png';
import full from '../assets/cart-full.png';
import ProductCardContainer from './productCardContainer';
import CartContainer from "./CartContainer";

export default function ProductApp({data}){
    const [productAmount, setProductAmount] = useState(
        data.map((prod) => {
            return{
            id: prod.id,
            amount: prod.amount,
            }
            })
        );
    const handleAddToAmount = (productid) => {
        const newProductAmount = productAmount.map((prod) => {
            if (prod.id === productid){
                return{...prod, amount: prod.amount + 1}
            };
            return prod;
        });
        setProductAmount(newProductAmount);
        return;
    };

    const handleRemoveAmount = (productid) => {
        const newProductAmount = productAmount.map((prod) => {
            if (prod.id === productid && prod.amount > 0){
                return{...prod, amount: prod.amount - 1}
            };
            return prod;
        });
        setProductAmount(newProductAmount);
        return;
    };

    const [cart, setCart] = useState([]);

    const handleAddToCart = (productToAdd) => {
        const currrentProduct = data.find((prod) => prod.id === productToAdd);
        const productInCart = cart.find((item) => item.id === productToAdd.id);
        if(productToAdd.amount === 0){
            alert("please add amount before adding to cart");
            return;
        }
        if(!productInCart){
            setCart((prevCart) => {
                return [...prevCart, {...currrentProduct, amount: productToAdd.amount}]
            });
        }else{
            //setCart((prevCart) => {
                //return [...prevCart, {amount: (productInCart.amount + currrentProduct.amount)}]
            //});
            alert("unexpected item in bagging area");
        };

    };

    const handleRemoveFromCart = (cartItem) => {  
        const filteredCart = cart.filter((item) => item.id !== cartItem.id);
        setCart(filteredCart);
    };

    const handleRemoveCart = () => {  
        setCart([]);
    };

    return (
        <div>
        <div className="Header">
            <h4>greetings user</h4>
            <h2>GROCHER APP</h2>
            <img src={cart.length === 0 && empty} alt="" height="50px" />
            <img src={cart.length > 0 && full} alt="" height="50px"/>
        </div>
        <div>
            
            <ProductCardContainer 
             data={data} 
             productAmount={productAmount}
             setProductAmount = {setProductAmount} 
             handleAddToAmount = {handleAddToAmount}
             handleRemoveAmount = {handleRemoveAmount}
             handleAddToCart = {handleAddToCart}/>
             
        </div>
        <div>
            <h1>Cart</h1>
            <p>{cart.length === 0 && "Cart is empty!"}</p>
            <CartContainer cart={cart}
            handleRemoveFromCart = {handleRemoveFromCart}
            handleAddToAmount = {handleAddToAmount}
            handleRemoveAmount = {handleRemoveAmount}
            handleAddToCart = {handleAddToCart}
            handleRemoveCart = {handleRemoveCart}/>
        </div>
        </div>
  )
}