import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LocationOnOutlined from '@material-ui/icons/LocationOnOutlined';
import {
    Link
} from "react-router-dom";


function Header({ cartItems, user, signOut }) {

    const getCount = () => {
        let count = 0;
        // Loop through all cart items
        cartItems.forEach((item) => {
            // add the quantity of the cart item to total;
            count += item.product.quantity;
        })

        return count;
    }
    return (
        <Container>   {/* We  used Container div instead of Header we have function name Header so during css it throughs erroer  */} 
            
            <Link to = "/">
                 <HeaderLogo>
                    <img src={"https://i.imgur.com/7I9Was5.png" } alt="AMAZON"/>
                    <HeaderSite>.in</HeaderSite>
                </HeaderLogo>
       
            </Link>
           
            <HeaderOptionAddress>               
                <LocationOnOutlined/>
                <HeaderOption>
                    <OptionLineOne>Hello</OptionLineOne>
                    <OptionLineTwo>Select Your Address</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAddress>
            
            <HeaderSearch>
                <HeaderSearchInput type='text'/>
                <HeaderSearchIconContainer>
                    <SearchIcon/>
                </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNavItems>
                <HeaderOption onClick={signOut}>
                    <OptionLineOne>Hello, {user.name}</OptionLineOne>
                    <OptionLineTwo>Account & Lists</OptionLineTwo>
                </HeaderOption>
                <HeaderOption>
                    <OptionLineOne>Return</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOption>
                
                <HeaderOptionCart>
                    <Link to ="Cart">
                        <ShoppingCartOutlinedIcon />
                        <CartCount>{getCount()}</CartCount>
                    </Link>
                </HeaderOptionCart>

            </HeaderNavItems>
        </Container>
    )
}

export default Header;

    // align-items: center;             centers vertically
    // justify-content: space-between;  centers horizontally
    // overflow: hidden;                to make border-radius work together with input search
    // a tag css was added bcoz the cart section was showing text decoration

const Container = styled.div`
    height: 60px;
    background-color: #0F1111;
    display: flex;
    align-items: center;            
    justify-content: space-between;  
    color: white;
`

const HeaderLogo = styled.div`
    img {
        width: 100px;
        margin-left: 20px;
        padding-top: 5px;
    }
    display: flex;
    cursor: pointer;
`
const HeaderSite = styled.div`
    color: white;
    padding-top: 5px;
`
const HeaderOptionAddress = styled.div`
    padding-left: 9px;
    display: flex;
    align-items: center;
    
`

const OptionLineOne = styled.div`
    font-size: 12px;
`

const OptionLineTwo = styled.div`
    font-size: 14px;
    font-weight: 700;
`

const HeaderSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height: 35px;
    border-radius: 4px;
    overflow: hidden;
    margin-left: 4px;
    margin-right: 5px;
    background-color: white;
    :focus-within {
        box-shadow: 0 0 0 3px #F90;
    }
`


const HeaderSearchInput = styled.input`
    flex-grow: 1;   /* Stretches the input box */
    border: 0;
    :focus {
        outline: none;
    }
`

const HeaderSearchIconContainer = styled.div`
    background-color: #febd69;
    width: 45px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const HeaderNavItems = styled.div`
    display: flex;
    
`

const HeaderOption = styled.div`
    /* TRouBLe  */
    padding: 10px 9px 10px 9px;
    cursor: pointer;
`

const HeaderOptionCart = styled.div`
    display: flex;
    a {
        display: flex;
        align-items: center;
        padding-right: 9px;
        color: white;
        text-decoration: none;
    }
    margin-right: 15px;
`

const CartCount = styled.div`
    padding-left: 4px;
    font-weight: 700;
    color: #f08804;
`
