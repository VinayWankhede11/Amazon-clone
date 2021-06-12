import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format'; 

function CartTotal({ getTotalPrice, getCount }) {

    return (
        <Container>
            <Subtotal>Subtotal ({getCount()} items): &#8287; 
                <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" prefix={'₹'} />
            </Subtotal>
            <CheckoutButton>Proceed to Buy</CheckoutButton>
        </Container>
    )
}

export default CartTotal

const Container = styled.div`
    padding: 20px;
    background-color: white;
    margin-top: 10px;
    padding-bottom: 40px;
`
const Subtotal = styled.h3`
    margin-bottom: 12px;
`

const CheckoutButton = styled.button`
    background-color: #f0c14b;
    width: 100%;
    padding: 8px 0px 8px 0px;
    border: 0px solid #a88734;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    :hover {
        background:  #ddb347;
    }
    
`