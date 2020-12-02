import React from 'react';
import styled from 'styled-components/macro';

export default function NaviProfileButton ({children}) {
    return (
        <NaviProfileDiv>{children}</NaviProfileDiv>
    );
}

const NaviProfileDiv = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    text-align: center;
    width: 25vw;
    height: 18vw;
    background-color: #e80;
    border-radius: 5px;
    box-shadow: 3px 3px 3px papayawhip;
`

