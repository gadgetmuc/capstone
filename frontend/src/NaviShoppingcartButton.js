import React from 'react';
import styled from 'styled-components/macro';

export default function NaviShoppingcartButton ({children}) {
    return (
        <NaviShoppingCartDiv>{children}</NaviShoppingCartDiv>
    );
}

const NaviShoppingCartDiv = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    text-align: center;
    font-family: Monaco, sans-serif;
    width: 25vw;
    height: 18vw;
    background-color: #e80;
    border-radius: 5px;
    box-shadow: 3px 3px 3px papayawhip;
`
