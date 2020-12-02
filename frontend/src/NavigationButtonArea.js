import React from 'react';
import styled from 'styled-components/macro';

import NaviShoppingcartButton from './NaviShoppingcartButton';
import NaviCategoryBlocksButton from './NaviCategoryBlocksButton';
import NaviProfileButton from './NaviProfileButton';



export default function NavigationButtonArea () {
    return (
        <NavBar>
            <NaviShoppingcartButton>shopping cart</NaviShoppingcartButton>
            <NaviCategoryBlocksButton>categories</NaviCategoryBlocksButton>
            <NaviProfileButton>profile</NaviProfileButton>
        </NavBar>
    )
}


const NavBar = styled.div`
    display: flex;
    height: 20vw;
    margin-bottom: 0px;
    font-family: Monaco, sans-serif;
    margin-top: 30px;
    position: relative;
    justify-content: space-around;
    bottom: 10px;
    z-index: 1;
`