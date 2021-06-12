import React from 'react'
import styled from 'styled-components'
import { db } from './firebase'


// props is used to pass data from home.js to product.js
function Product({ title, price, rating, image, id }) {

     const addToCart = () => {
        console.log(id);
        const cartItem = db.collection("cartItems").doc(id); // create new doc from the id of product
        cartItem.get()
        .then((doc)=>{
            console.log(doc);
            if(doc.exists){
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            } else {
                db.collection("cartItems").doc(id).set({
                    name: title,
                    image: image,
                    price: price,
                    quantity: 1
                })
            }
        })
    }

    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Price>
                <span>&#8377; </span>{price}
            </Price>
            <Rating>
                {
                    Array(rating)
                        .fill()
                        .map(rating => <p>⭐</p>)
                }
            </Rating>
            <Image src= {image} />
            <ActionSection>
                <AddToCartButton
                    onClick={addToCart}
                >
                    Add to Cart
                </AddToCartButton>
            </ActionSection>
        </Container>
    )
}

export default Product

//flex-direction: coloumn; brings the price in the coloumn respect to other items in container
//object-fit: contain; was used bcoz the image was strecting up and getting distorted


const Container = styled.div`
    background-color: white;
    z-index: 100;
    flex: 1;
    padding: 20px;
    margin: 10px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
`
const Title = styled.span`
    font-weight:400;
`
const Price = styled.span`
    font-weight: 500;
    margin-top: 3px;
`
const Rating = styled.div`
    display: flex;   
`
const Image = styled.img`
    padding-top: 10px;
    max-height: 200px;
    object-fit: contain;
`

const ActionSection = styled.div`
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const AddToCartButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
    cursor: pointer;
`
