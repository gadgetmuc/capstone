import React from 'react';
import styled from 'styled-components/macro';

export default function CategoryButton ({children}) {
    return (
        <Div>
            {children}
        </Div>
    );
}


const Div = styled.div`
    display: flex;
    flex-flow: column wrap;
    text-align: center;
    justify-content: center;
    height: 28vw;
    width: 28vw;
    border-radius: 5px;
    border: 0;
    color: #222;
    font-family: Monaco;
    background: linear-gradient(45deg, papayawhip, orange);
    box-shadow: 3px 3px 1px #ddd;
    background-image: url('./images/vegetables.jpg') orange;
`