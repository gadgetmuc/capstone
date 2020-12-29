import React from 'react';
import styled from 'styled-components/macro';

import NaviShoppingcartButton from './NaviShoppingCartButton';
import NaviCategoryBlocksButton from './NaviCategoryBlocksButton';
import NaviProfileButton from './NaviProfileButton';


export default function NavigationButtonArea ({
    changeAppMode,
    toggleShoppingListNameLabel,
    appMode}) {
    
    return (
        <NavBar>
            <NaviShoppingcartButton
                toggleShoppingListNameLabel={toggleShoppingListNameLabel}
                changeAppMode={changeAppMode}
                appMode={appMode}>
                    shopping cart
            </NaviShoppingcartButton>
            
            <NaviCategoryBlocksButton
                toggleShoppingListNameLabel={toggleShoppingListNameLabel}
                changeAppMode={changeAppMode}
                appMode={appMode}>
                    categories
            </NaviCategoryBlocksButton>
            
            <NaviProfileButton
                changeAppMode={changeAppMode}   
                appMode={appMode}>
                    profile
            </NaviProfileButton>
        </NavBar>
    )
}


const NavBar = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    righT: 0;
    align-items: center;
    height: 90px;
    font-family: Monaco, sans-serif;
    margin-top: 30px;
    background-image: linear-gradient(135deg, #291080, #030981);
    justify-content: space-around;
    z-index: 11;
`