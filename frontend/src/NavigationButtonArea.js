import React from 'react';
import styled from 'styled-components/macro';

import NaviShoppingCartButton from './NaviShoppingCartButton';
import NaviCategoryBlocksButton from './NaviCategoryBlocksButton';
import NaviProfileButton from './NaviProfileButton';


export default function NavigationButtonArea ({changeAppMode, appMode}) {
    
    return (
        <NavBar>
            <NaviShoppingCartButton changeAppMode={changeAppMode} appMode={appMode}>shopping cart</NaviShoppingCartButton>
            <NaviCategoryBlocksButton changeAppMode={changeAppMode} appMode={appMode}>categories</NaviCategoryBlocksButton>
            <NaviProfileButton changeAppMode={changeAppMode} appMode={appMode}>profile</NaviProfileButton>
        </NavBar>
    )
}


const NavBar = styled.div`
    z-index: 3;
    position: fixed;
    display: flex;
    bottom: 0;
    left: 0;
    right: 0;
    margin-top: 30px;
    height: 90px;
    justify-content: space-around;
    align-items: center;
    background-image: linear-gradient(135deg, #291080, #030981);
    font-family: Monaco, sans-serif;
`