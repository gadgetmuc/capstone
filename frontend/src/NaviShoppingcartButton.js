import React from 'react';
import styled from 'styled-components/macro';

export default function NaviShoppingCartButton ({children, changeAppMode, appMode, loggedIn}) {



    return (
        <NaviShoppingCartDiv onClick={() => loggedIn === true ? changeAppMode(0) : alert("Please log in first.")} className={appMode === 0 ? 'app_mode_0' : ''}>{children}</NaviShoppingCartDiv>
    );
}

const NaviShoppingCartDiv = styled.div`
    display: flex;
    flex-flow: column wrap;
    height: 68px;
    width: 25vw;
    box-shadow: 3px 3px 3px papayawhip;
    border-radius: 5px;
    background-color: #e80;
    justify-content: center;
    text-align: center;
    font-family: Monaco, sans-serif;
    &.app_mode_0 {
        background-color: red;
    }
`

