import React from 'react';
import styled from 'styled-components/macro';

export default function Header({children}) {
    return(
        <HeaderStyled>{children}</HeaderStyled>
    );
}

const HeaderStyled = styled.div`
    z-index: 2;
    position: fixed;
    top: 0px;
    width: 100%;
    height: 50px;
    background-image: linear-gradient(135deg, #291080, #030981);
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    font-family: Monaco, sans-serif;
    font-size: 8.5vw;
    font-weight: 700;
    color: #eee;
    &::after {
        content: "Einkaufslisten-App";
    }
`
