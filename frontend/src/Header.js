import React from 'react';
import styled from 'styled-components/macro';

export default function Header({children}) {
    return(
        <HeaderStyled>{children}</HeaderStyled>
    );
}

const HeaderStyled = styled.div`
    background-color: red;
    position: fixed;
    top: 0px;
    width: 100%;
    height: 5%;

    font-size: 7vw;
    text-align: center;
    color: #eee;
    font-family: Monaco, sans-serif;
    font-weight: 700;
    padding-top: 20px;
    padding-bottom: 20px; 
`
