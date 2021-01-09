import React from 'react';
import styled from 'styled-components/macro';

export default function NaviCategoryBlocksButton ({children, changeAppMode, appMode, loggedIn}) {

    

    return (
        <NaviCategoryBlocksDiv appMode={appMode} onClick={() => loggedIn === true ? changeAppMode(1) : alert("Please log in first.")} className={appMode === 1 ? 'app_mode_1' : ''}>
            {children}
        </NaviCategoryBlocksDiv>
    );
}

const NaviCategoryBlocksDiv = styled.div`
    display: flex;
    flex-flow: column wrap;
    height: 68px;
    width: 25vw;
    box-shadow: 3px 3px 3px papayawhip;
    border-radius: 5px;
    background-color: #e80;
    justify-content: center;
    align-items: center;
    text-align: space-evenly;
    font-family: Monaco, sans-serif;
    &.app_mode_1 {
        background-color: orange;
    }
`

