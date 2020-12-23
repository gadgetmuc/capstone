import React from 'react';
import styled from 'styled-components/macro';

export default function NaviProfileButton ({children, changeAppMode, appMode}) {

    return (
        <NaviProfileDiv appMode={appMode} onClick={() => changeAppMode(2)} className={appMode === 2 ? 'app_mode_2' : ''}>
            {children}
        </NaviProfileDiv>
    );
}

const NaviProfileDiv = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    text-align: center;
    width: 25vw;
    height: 68px;
    font-family: Monaco, sans-serif;
    background-color: #e80;
    border-radius: 5px;
    box-shadow: 3px 3px 3px papayawhip;
    &.app_mode_2 {
        background-color: orange;
    }
`

