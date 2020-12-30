import React from 'react';
import {BagIcon, StyledLink, Wrapper} from './Navigation-styles';
import shoppingBag from '../../common-files/bag.png'
import {useAppState} from "../../state/AppProvider";
import {useHistory, useLocation} from 'react-router-dom';


export const Navigation = () => {

    const {state} = useAppState()

    let history = useHistory();
    let location = useLocation()

    return <nav>
        <Wrapper>
            <div
                style={{color: "white", margin: " 0 3%"}}
                onClick={history.goBack}
            >Back
            </div>
            <div style={{width: "55%", display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                <li style={{display: "flex", margin: "0 5%"}}>
                    <StyledLink to="/products">Main page</StyledLink>
                </li>
                {
                    location.pathname === "/bag" ? <div/> :
                        <li style={{display: "flex", width: '29%'}}>
                            <StyledLink to="/bag">
                                <BagIcon src={shoppingBag}/>
                                <div>sum {state.basket.totalSum}</div>
                            </StyledLink>
                        </li>
                }
            </div>
        </Wrapper>
    </nav>

}
// #363B4D
