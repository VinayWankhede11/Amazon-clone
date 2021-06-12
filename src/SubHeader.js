import React from 'react'
import styled from 'styled-components'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

function SubHeader() {
    return (
        <Container>
            <HeaderOption>
                <HeaderOptionOne>
                    <FormatListBulletedIcon/>
                        &nbsp;<strong>All</strong>
                </HeaderOptionOne>
                <HeaderOptionTwo>Mobiles</HeaderOptionTwo>
                <HeaderOptionThree>Amazon Pay</HeaderOptionThree>
                <HeaderOptionFour>Gift Cards</HeaderOptionFour>
                <HeaderOptionFive>Home Improvement</HeaderOptionFive>
                <HeaderOptionSix>Gift Ideas</HeaderOptionSix>
                <HeaderOptionSeven>Pet Supplies</HeaderOptionSeven>
                <HeaderOptionEight>AmazonBasics</HeaderOptionEight>
                <HeaderOptionNine>Sports, Fitness & Outdoors</HeaderOptionNine>
                <HeaderOptionTen>Customer Service</HeaderOptionTen>
                <HeaderOptionEleven>
                    <img src={"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/WW84/Launch/400x39-SWM_With-disclaimer_JPN._CB669638753_.jpg" } alt="Amazon Prime Video"/>
                </HeaderOptionEleven>
            </HeaderOption>
        </Container>
    )
}

export default SubHeader

const Container = styled.div`
    height: 39px;
    background-color:#232f3e;
    color: white;
    padding-bottom: 4px;
`
const HeaderOption = styled.div`
    margin-left: 20px;
    font-size: 15px;
    display: flex;
    align-items: center;            
    justify-content: space-between;
    cursor: pointer; 
`
const HeaderOptionOne = styled.div`
    display: flex;
    align-items: center;
`
const HeaderOptionTwo = styled.div``
const HeaderOptionThree = styled.div``
const HeaderOptionFour = styled.div``
const HeaderOptionFive = styled.div``
const HeaderOptionSix = styled.div``
const HeaderOptionSeven = styled.div``
const HeaderOptionEight = styled.div``
const HeaderOptionNine = styled.div``
const HeaderOptionTen = styled.div`
    padding-right: 10px;
`
const HeaderOptionEleven = styled.div`
    padding-left: 10px;
`