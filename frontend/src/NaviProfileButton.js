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
    box-shadow: 3px 3px 3px papayawhip;
    border-radius: 5px;
    width: 25vw;
    height: 68px;
    background-color: #e80;
    justify-content: center;
    text-align: center;
    font-family: Monaco, sans-serif;
    &.app_mode_2 {
        background-color: orange;
    }
`

