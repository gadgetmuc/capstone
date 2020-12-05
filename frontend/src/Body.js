import React from 'react';
import styled from 'styled-components/macro';


export default function Body ({children}) {
    return (
        <BodyBackground>{children}</BodyBackground>
    )
}

const BodyBackground = styled.section`
    background: #002;
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
`