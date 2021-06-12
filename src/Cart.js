import React from 'react'
import styled from 'styled-components'
import CartItems from './CartItems'
import CartTotal from './CartTotal'


// APP => Cart =>CartItems

function Cart({cartItems}) {
    const getTotalPrice = () => {
        let total = 0;
        cartItems.forEach((item)=>{
            total += (item.product.price * item.product.quantity)
        })
        return total;
    }

    const getCount = () => {
        let count = 0;
        // Loop through all cart items
        cartItems.forEach((item) => {
            // add the quantity of the cart item to tota;
            count += item.product.quantity;
        })

        return count;
    }
    return (
        <Container>
            <Ad><strong>Pay faster for all your shopping needs <font color = "#b22222">with Amazon Pay balance </font></strong> <br/>
                Get Instant refund on cancellations | Zero payment failures</Ad>
            <CartContainer>
                 <CartItems cartItems={cartItems}/>
                <CartAd>
                    <img src = {"https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"} alt=""/>
                    <CartTotal getCount={getCount} getTotalPrice={getTotalPrice}/>
                </CartAd>
            </CartContainer>    
        </Container>
    )
}
  
export default Cart

const Container = styled.div`
    
`
const Ad =styled.div`
    padding-top: 12px;
    padding-left: 18px;
`

const CartContainer = styled.div`
    display: flex;
    padding: 14px 18px 0 18px;
    align-items: flex-start;
`

const CartAd = styled.div`
    flex: 0.2;    
`