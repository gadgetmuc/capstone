import React from 'react';
import styled from 'styled-components/macro';

export default function NaviCategoryBlocksButton ({
    children,
    changeAppMode,
    toggleShoppingListNameLabel,
    appMode
}) {

    return (
        <NaviCategoryBlocksDiv
            appMode={appMode}
            onClick={() => {
                changeAppMode(1);
                toggleShoppingListNameLabel(0);
            }}
            className={appMode === 1 ? 'app_mode_1' : ''}>
            {children}
        </NaviCategoryBlocksDiv>
    );
}

const NaviCategoryBlocksDiv = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    text-align: space-evenly;
    width: 25vw;
    height: 68px;
    font-family: Monaco, sans-serif;
    background-color: #e80;
    border-radius: 5px;
    box-shadow: 3px 3px 3px papayawhip;
    &.app_mode_1 {
        background-color: orange;
    }
`

