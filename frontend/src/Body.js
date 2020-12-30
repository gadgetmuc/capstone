import React from 'react';
import styled from 'styled-components/macro';
import cartsImage from './images/carts.jpg';


export default function Body ({children}) {
    return (
        <BodyBackground image={cartsImage}>{children}</BodyBackground>
    )
}

const BodyBackground = styled.section`
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
    width: 375px;
    height: 667;
    background-image: url(${props => props.image});
    background-size: cover;
`