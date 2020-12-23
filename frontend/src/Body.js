import React from 'react';
import styled from 'styled-components/macro';
import cartsImage from './images/carts.jpg';


export default function Body ({children}) {
    return (
        <BodyBackground image={cartsImage}>{children}</BodyBackground>
    )
}

const BodyBackground = styled.section`
    background-image: linear-gradient(170deg, #150540, #111);
    /* position: relative; */
    top: 0;
    /* bottom: 0; */
    left: 0;
    right: 0;
    width: 375px;
    height: 667;
    z-index: 0;
    background-image: url(${props => props.image});
    background-size: cover;
`