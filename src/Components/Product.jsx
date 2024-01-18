import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import axios from 'axios'
const Product=()=>{
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
           setProducts(res.data)
        })
        .catch((Error)=>{
            console.log(Error)
        })
    },[])
    function addtocart(product){
      setCart([...cart, { ...product,count:1 }])
    }
    function isInCart(product){
        const x = cart.find((cp)=>{
           if(cp.title===product.title){
            return true
           }else{
            return false
           }
        })
        return (x)
    }
    function inccount(product){
        const temp=cart.map((cp)=>{
            if(cp.title===product.title){
               cp.count= cp.count+1
            }
            return cp
        })
        setCart([...temp])
    }
    function deccount(product){
        const temp=cart.map((cp)=>{
            if(cp.title===product.title){
               cp.count= cp.count-1
            }
            return cp
        })
        setCart([...temp])
    }
    return(
        <div className="Product-container">
            <div className="sub-container">
            {
                products.length>0 && (products.map((product,index)=>{
                    return(
                        <li className="list">
                            <h3>{product.title}</h3>
                            <img src={product.image} alt="" width="100px"/>
                            <h2>${product.price}</h2>
                            {
                                isInCart(product) &&(
                                    <>
                                    <button onClick={()=>{inccount(product)}}>+</button>
                                    <button onClick={()=>{deccount(product)}}>-</button>
                                    </>
                                )
                            }
                            {
                                !isInCart(product) && (
                                    <button onClick={()=>{addtocart(product)}}>Add to Cart</button>
                                )
                            }
                            
                            
                        </li>
                    )
                })
            )}
            </div>
            <div className='Cart-container' >
            <Cart cart={cart}/>
            </div>
            
        </div>
    )
}
export default Product;