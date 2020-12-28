import React from 'react';
import {StyledLink, Wrapper} from './Navigation-styles';

export const Navigation = () => {
    return <nav>
        <Wrapper>
            <li style={{display: "flex", margin: "0 5%"}}>

            <StyledLink to="/">Main page</StyledLink>
            </li>
            <li style={{display: "flex"}}>
                <StyledLink to="/bag">Shop bag</StyledLink>
            </li>
        </Wrapper>
    </nav>

}
// #363B4D
