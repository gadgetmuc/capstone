import React from 'react';
import styled from 'styled-components/macro';


export default function Body ({children}) {
    return (
        <BodyBackground>{children}</BodyBackground>
    )
}

const BodyBackground = styled.body`
    background: #002;
    width: 100vw;
    height: 100vh;
    z-index: 0;
`