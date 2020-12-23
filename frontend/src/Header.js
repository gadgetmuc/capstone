import React from 'react';
import styled from 'styled-components/macro';

export default function Header({children}) {
    return(
        <HeaderStyled>{children}</HeaderStyled>
    );
}

const HeaderStyled = styled.div`
    background-image: linear-gradient(135deg, #291080, #030981);
    position: fixed;
    top: 0px;
    width: 100%;
    height: 50px;
    z-index: 99;
    font-size: 8.5vw;
    text-align: center;
    color: #eee;
    font-family: Monaco, sans-serif;
    font-weight: 700;
    padding-top: 20px;
    padding-bottom: 20px;
    &::after {
        content: "Einkaufslisten-App";
    }
`
