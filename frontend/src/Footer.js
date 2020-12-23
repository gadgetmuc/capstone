import React from 'react';
import styled from 'styled-components/macro';

export default function NaviFooter() {
    return(
        <Footer>
        </Footer>
    )
}

const Footer = styled.div`
    display: fixed;
    background-color: deeppink;
    // background-image: linear-gradient(180deg, #030981, #291080);
    width: 100hw;
    height: 80px;
    z-index: 100;
    bottom: 0px;
    left: 0px;
    right: 0px;

`