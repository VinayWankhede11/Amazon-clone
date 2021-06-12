import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'

function CartItems( {cartItems} ) {
    return (
        <Container>
            <Title>Shopping Cart</Title>
            <hr/>
            <ItemsContainer>
                {
                    cartItems.map((item)=>(
                        <CartItem 
                            id={item.id}
                            item={item.product}
                        />
                    ))
                }
            </ItemsContainer>
        </Container>
    )
}

export default CartItems

// flex: 0.8: means that div will take 80% of the place wrt other div who is their with flex with him
const Container = styled.div`
    flex: 0.8;
    padding: 20px;
    margin-right: 18px;
    background-color: white;
`

const Title = styled.h1`
    margin-bottom: 8px;
`
const ItemsContainer = styled.div``