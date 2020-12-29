import React from 'react';
import {BagIcon, StyledLink, Wrapper} from './Navigation-styles';
import shoppingBag from '../../common-files/bag.png'


export const Navigation = () => {
    return <nav>
        <Wrapper>
            <li style={{display: "flex", margin: "0 5%"}}>

                <StyledLink to="/">Main page</StyledLink>
            </li>
            <li style={{display: "flex"}}>
                <StyledLink to="/bag">
                    <BagIcon src={shoppingBag}/>
                    <div>sum</div>
                </StyledLink>
            </li>
        </Wrapper>
    </nav>

}
// #363B4D
