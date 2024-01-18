import React from 'react'

function Cart(props) {
    function gettotal(){
       return props.cart.reduce((t,p)=>{
               return t+(p.price*p.count)
        },0)
       
    }
    
  return (
    <div className='c'>
        <h1>Cart</h1>
        {
            props.cart.map((p)=>{
                return(
                   
                    <li className='list-cart'>
                        <div>
                        <h5> {p.title}</h5>
                       
                        </div>
                        <div>
                        <img src={p.image} alt="" width="30px"/>
                        </div>
                        <div>
                            <h6>{p.count}*{p.price}</h6>
                        </div>
                       <div >
                       <h4>${p.count*p.price}</h4>
                       </div>
                       
                      
                    </li>
                   
                        
                  
                )
            })
        }
        <hr />
                      <div className='total'>
                       <h1>Total:</h1>
                       <h1>${gettotal()}</h1>
                       </div>
    </div>
  )
}

export default Cart