import React from 'react';
import styled from 'styled-components/macro';

export default function Header({children}) {
    return(
        <HeaderStyled>{children}</HeaderStyled>
    );
}

const HeaderStyled = styled.div`
    font-size: 2rem;
    text-align: center;
    color: #eee;
    font-family: Monaco, sans-serif;
    font-weight: 700;
    padding-top: 20px;
    padding-bottom: 20px; 
`
