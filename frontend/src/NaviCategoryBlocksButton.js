import React from 'react';
import styled from 'styled-components/macro';

export default function NaviCategoryBlocksButton ({children}) {
    return (
        <NaviCategoryBlocksDiv>{children}</NaviCategoryBlocksDiv>
    );
}

const NaviCategoryBlocksDiv = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    text-align: center;
    width: 25vw;
    height: 18vw;
    font-family: Monaco, sans-serif;
    background-color: #e80;
    border-radius: 5px;
    box-shadow: 3px 3px 3px papayawhip;
`

