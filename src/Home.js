import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import Product from './Product'
 import { db } from './firebase.js'

function Home() {
    // created a state usestate
    const  [products, setProducts] = useState([])

    const getProducts = () =>{
        db.collection('products').onSnapshot((snapshot)=> {
            let tempProducts = []

            tempProducts = snapshot.docs.map((doc) =>  (
                {
                    id: doc.id,
                    product: doc.data()
                }
            ));
            setProducts(tempProducts);
            
        })
    }

    // To stop getting repetition output due to rendering of reactjs we use useEffect so by this addition the ouput will be shown only oncce and i.e. 1st time  
    useEffect(()=>{
        console.log("Call products");
        getProducts()
    }, [])
    
    return (
        <Container>
            <Banner>

            </Banner>
            <Content>
                {
                    products.map((data)=>(
                        <Product 
                            title={data.product.name}
                            price={data.product.price}
                            rating={data.product.rating}
                            image={data.product.image}
                            id={data.id}
                        />
                        
                    ))
                    
                }   
    
            </Content>
           

        </Container>
    )
}

export default Home

// background-position: center;  means that it is position of background and make sure that brackground image will be at center
// background-size: cover; means that it will resize itself and cover the whole div (cover almost similar as auto, contain)
// mask-image:  ; if u mask image the black portion becomes white
// max-width: 1500px; it will make a max margin of 1500px on right side of page
// margin: 0 auto;   to make above banner to center from right we use 0 for top&bottom and auto for right&left

const Container = styled.div`
    width: 1500px;
    margin: 0 auto;
`

const Banner = styled.div`
    background-image: url('https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/May/M17/non-reg/1500x600_Hero-Tall_JPN._CB668432235_.jpg');
    min-height: 639px;
    background-position: center;
    background-size: cover;
    z-index: -1;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`

const Content = styled.div`
    padding-left: 2.5px;
    padding-right: 10px;
    margin-top: -380px; 
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    place-items: right-normal;
    width: 100%;
`
    
