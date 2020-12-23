import React from 'react';
import styled from 'styled-components/macro';

export default function NaviShoppingCartButton ({children, changeAppMode, appMode}) {



    return (
        <NaviShoppingCartDiv onClick={() => changeAppMode(0)} className={appMode === 0 ? 'app_mode_0' : ''}>{children}</NaviShoppingCartDiv>
    );
}

const NaviShoppingCartDiv = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    text-align: center;
    font-family: Monaco, sans-serif;
    width: 25vw;
    height: 68px;
    background-color: #e80;
    border-radius: 5px;
    box-shadow: 3px 3px 3px papayawhip;
    &.app_mode_0 {
        background-color: red;
    }
`

