import React from 'react'
import styled from 'styled-components'
import {
    Link
} from "react-router-dom";

function Footer() {
    return (
        <Container>
            <FooterOption>
            <FooterOptionA>               
                <FooterOptionOne>
                    <OptionLineOne>Get to Know Us</OptionLineOne>
                    <OptionLineTwo>About Us</OptionLineTwo>
                    <OptionLineThree>Careers</OptionLineThree>
                    <OptionLineFour>Press Releases</OptionLineFour>
                    <OptionLineFive>Amazon Cares</OptionLineFive>
                    <OptionLineSix>Gift a Smile</OptionLineSix>
                </FooterOptionOne>
                <FooterOptionTwo>
                    <OptionLineOne>Connect With Us</OptionLineOne>
                    <OptionLineTwo>Facebook</OptionLineTwo>
                    <OptionLineThree>Twitter</OptionLineThree>
                    <OptionLineFour>Instagram</OptionLineFour>
                </FooterOptionTwo>
                <FooterOptionThree>
                    <OptionLineOne>Make Money With Us</OptionLineOne>
                    <OptionLineTwo>Sell on Amazon</OptionLineTwo>
                    <OptionLineThree>Sell Under Amazon Accelarator</OptionLineThree>
                    <OptionLineFour>Amazon Global Selling</OptionLineFour>
                    <OptionLineFive>Become an Affiliate</OptionLineFive>
                    <OptionLineSix>Fulfilment by Amazon</OptionLineSix>
                    <OptionLineSeven>Advertise Your Products</OptionLineSeven>
                    <OptionLineEight>Amazon Pay on Merchants</OptionLineEight>
                </FooterOptionThree>
                <FooterOptionFour>
                    <OptionLineOne>Let Us Help You</OptionLineOne>
                    <OptionLineTwo>COVID-19 and Amazon</OptionLineTwo>
                    <OptionLineThree>Your Account</OptionLineThree>
                    <OptionLineFour>Returns Centre</OptionLineFour>
                    <OptionLineFive>100% Purchase Protection</OptionLineFive>
                    <OptionLineSix>Amazon App Download</OptionLineSix>
                    <OptionLineSeven>Amazon Assistant Downloads</OptionLineSeven>
                    <OptionLineEight>Help</OptionLineEight>
                </FooterOptionFour>
            </FooterOptionA>
            <FooterOptionB>
                <Link to = "/">
                 <FooterLogo>
                    <img src={"https://i.imgur.com/7I9Was5.png" } alt="AMAZON"/>
                </FooterLogo>
            </Link>
            <FooterPlace>
                    <OptionOne>Australia</OptionOne>
                    <OptionTwo>Brazil</OptionTwo>
                    <OptionThree>Canada</OptionThree>
                    <OptionFour>China</OptionFour>
                    <OptionFive>France</OptionFive>
                    <OptionSix>Germany</OptionSix>
                    <OptionSeven>Italy</OptionSeven>
                    <OptionEight>Japan</OptionEight>
                    <OptionNine>Mexico</OptionNine>
                    <OptionTen>Netherlands</OptionTen>
                    <OptionEleven>Poland</OptionEleven>
                    <OptionTwelve>Singapore</OptionTwelve>
                    <OptionThirteen>Spain</OptionThirteen>
                    <OptionFourteen>Turkey</OptionFourteen>
                    <OptionFifteen>United Arab Emirates</OptionFifteen> 
                    <OptionSixteen>United Kingdom</OptionSixteen>
                    <OptionSeventeen>United States</OptionSeventeen>
                </FooterPlace>
            </FooterOptionB>
            </FooterOption>
            <FooterOptionC>
                <OptionFooterLineA>
                    <OptionLine1>
                        <OptionFooterLineOne>AbeBooks</OptionFooterLineOne>
                        <OptionFooterLineTwo>Books, art</OptionFooterLineTwo>
                        <OptionFooterLineThree>& collectibles</OptionFooterLineThree>
                    </OptionLine1>
                    <OptionLine2>
                        <OptionFooterLineOne>Amazon Web Services</OptionFooterLineOne>
                        <OptionFooterLineTwo>Scalable Cloud</OptionFooterLineTwo>
                        <OptionFooterLineThree>Computing Services</OptionFooterLineThree>
                    </OptionLine2>
                    <OptionLine3>
                        <OptionFooterLineOne>Audible</OptionFooterLineOne>
                        <OptionFooterLineTwo>Download</OptionFooterLineTwo>
                        <OptionFooterLineThree>Audio Books</OptionFooterLineThree>
                    </OptionLine3>
                    <OptionLine4>
                        <OptionFooterLineOne>DPReview</OptionFooterLineOne>
                        <OptionFooterLineTwo>Digital</OptionFooterLineTwo>
                        <OptionFooterLineThree>Photography</OptionFooterLineThree>
                    </OptionLine4>
                    <OptionLine5>
                        <OptionFooterLineOne>IMDb</OptionFooterLineOne>
                        <OptionFooterLineTwo>Movies, TV</OptionFooterLineTwo>
                        <OptionFooterLineThree>& Celebrities</OptionFooterLineThree>
                    </OptionLine5>
                </OptionFooterLineA>
                <OptionFooterLineB>
                    <OptionLine1>
                        <OptionFooterLineOne>Shopbop</OptionFooterLineOne>
                        <OptionFooterLineTwo>Designer</OptionFooterLineTwo>
                        <OptionFooterLineThree>Fashion Brands</OptionFooterLineThree>
                    </OptionLine1>
                    <OptionLine2>
                        <OptionFooterLineOne>Amazon Business</OptionFooterLineOne>
                        <OptionFooterLineTwo>Everything For</OptionFooterLineTwo>
                        <OptionFooterLineThree>Your Business</OptionFooterLineThree>
                    </OptionLine2>
                    <OptionLine3>
                        <OptionFooterLineOne>Prime Now</OptionFooterLineOne>
                        <OptionFooterLineTwo>2-Hour Delivery</OptionFooterLineTwo>
                        <OptionFooterLineThree>on Everyday Items</OptionFooterLineThree>
                    </OptionLine3>
                    <OptionLine4>
                        <OptionFooterLineOne>Amazon Prime Music</OptionFooterLineOne>
                        <OptionFooterLineTwo>70 million songs, ad-free</OptionFooterLineTwo>
                        <OptionFooterLineThree>Over 9 million podcast episodes</OptionFooterLineThree>
                    </OptionLine4>
                    <OptionLine5>
                        <OptionFooterLineOne></OptionFooterLineOne>
                        <OptionFooterLineTwo></OptionFooterLineTwo>
                        <OptionFooterLineThree></OptionFooterLineThree>
                    </OptionLine5>
                </OptionFooterLineB>
                <OptionCopyRight>
                    <Condition>Conditions of Use & Sale</Condition>  
                    <Privacy>Privacy Notice</Privacy>
                    <Interest>Interest-Based Ads</Interest>
                    <Year>© 1996-2021, Amazon.com, Inc. or its affiliates</Year>  
                </OptionCopyRight>   
            </FooterOptionC>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    color: white;
    padding-top: 20px;

`
const FooterOption = styled.div`
    background-color:#232f3e;
    height: 420px;            
    padding-top: 50px;
`
const FooterOptionA = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
    line-height: 27px;
    box-shadow: 0px 1px 0px 1px rgba(255,255,255,0.1);
`
const FooterOptionB = styled.div`

`
const FooterOptionOne = styled.div``
const FooterOptionTwo = styled.div`
    padding-left: 100px;
`
const FooterOptionThree = styled.div`
     padding-left: 100px;
`
const FooterOptionFour = styled.div`
     padding-left: 100px;
`
const OptionLineOne = styled.div`
    font-weight: 700;
    padding-bottom: 5px;
`
const OptionLineTwo = styled.div`
    font-weight: 450;
    font-size: 14px;
`
const OptionLineThree = styled.div`
    font-weight: 450;
    font-size: 14px;
`
const OptionLineFour = styled.div`
    font-weight: 450;
    font-size: 14px;
`
const OptionLineFive = styled.div`
    font-weight: 450;
    font-size: 14px;
`
const OptionLineSix = styled.div`
    font-weight: 450;
    font-size: 14px;
`
const OptionLineSeven = styled.div`
    font-weight: 450;
    font-size: 14px;
`
const OptionLineEight = styled.div`
    font-weight: 450;
    font-size: 14px;
`
const FooterLogo = styled.div`
    img {
        width: 80px;
        padding-top: 45px;
        padding-bottom: 40px;
        cursor: pointer;  
    }
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const FooterPlace = styled.div`
    display: flex;
    justify-content: center;
    font-size: 13px;
`
const OptionOne = styled.div`
    padding-left: 20px;
`
const OptionTwo = styled.div`
    padding-left: 20px;
`
const OptionThree = styled.div`
    padding-left: 20px;
`
const OptionFour = styled.div`
    padding-left: 20px;
`
const OptionFive = styled.div`
    padding-left: 20px;
`
const OptionSix = styled.div`
    padding-left: 20px;
`
const OptionSeven = styled.div`
    padding-left: 20px;    
`
const OptionEight = styled.div`
    padding-left: 20px;
`
const OptionNine = styled.div`
    padding-left: 20px;
`
const OptionTen = styled.div`
    padding-left: 20px;
`
const OptionEleven = styled.div`
    padding-left: 20px;
`
const OptionTwelve = styled.div`
    padding-left: 20px;
`
const OptionThirteen = styled.div`
    padding-left: 20px;
`
const OptionFourteen = styled.div`
    padding-left: 20px;    
`
const OptionFifteen = styled.div`
    padding-left: 20px;  
`
const OptionSixteen = styled.div`
    padding-left: 20px;  
`
const OptionSeventeen = styled.div`
    padding-left: 20px;      
`
const FooterOptionC = styled.div`
    height: 200px;
    background-color: #131A22;;
`
const OptionFooterLineA =styled.div`
    display: flex;
    justify-content: center;
    color: white;
    font-size: 10px;
    padding-top: 20px;
`
const OptionFooterLineB =styled.div`
    display: flex;
    justify-content: center;
    color: white;
    font-size: 10px;
    padding-top: 20px;
    padding-left: 30px;
`

const OptionLine1 = styled.div`
    
`
const OptionLine2 = styled.div`
    padding-left: 100px;
`
const OptionLine3 = styled.div`
    padding-left: 100px;
`
const OptionLine4 = styled.div`
    padding-left: 100px;
`
const OptionLine5 = styled.div`
    padding-left: 100px;
`
const OptionFooterLineOne =styled.div`
    font-size: 11px;
    font-weight: 500;
`
const OptionFooterLineTwo =styled.div`
     color: rgba(255, 255, 255, 0.8);
`
const OptionFooterLineThree =styled.div`
     color: rgba(255, 255, 255, 0.8);
`
const OptionCopyRight = styled.div`
    display: flex;
    padding-top: 40px;
    justify-content: center;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.8);
`
const Condition = styled.div`
    padding-left: 12px;
`
const Privacy = styled.div`
    padding-left: 12px;
`
const Interest = styled.div`
    padding-left: 12px;
`
const Year = styled.div`
    padding-left: 12px;
`
