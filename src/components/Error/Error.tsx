import React from 'react';
import {StyledLink} from '../Navigation/Navigation-styles';
import style from './Error.module.css';


export const Error404 = () => {

    return <div className={style.error_wrapper}>
<div className={style.error_text}>        Sorry, this page doesn`t exist</div>
        <div className={style.error_button}><StyledLink to="/products">Go to main page</StyledLink></div>
    </div>
}
