import React, {useState, useEffect} from 'react';
import styled from 'styled-components/macro';


export default function ArticleSelector ({description, amount}) {



    return (
        <div>            
            <ArticleSelectorFlex>
                <ArticleSelectorDescription>
                    {description}
                </ArticleSelectorDescription>
                <button onClick={() => {alert(minusButtonAlert)}}>-</button>
                <ArticleSelectorAmount>{amount}</ArticleSelectorAmount>
                <button onClick={() => {alert(plusButtonAlert)}}>+</button>
            </ArticleSelectorFlex>
        </div>
    )
}




const ArticleSelectorFlex = styled.div`
    display: flex;
    color: red;
    justify-content: space-between;
    height: 10vw;
    width: 70hw;
    color: #111;
    margin-bottom: 3px;
    border-radius: 5px;
    background-image: linear-gradient(ivory, papayawhip);
    padding-left: 5px;
`

const ArticleSelectorDescription = styled.span`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: bottom;
    background-color: hotpink;
    width: 70%;
`
const ArticleSelectorAmount = styled.span`
    display: flex;
    flex-direction: column;
    width: 2rem;
    justify-content: center;
    align-items: center;

`
const minusButtonAlert = `This button lowers a variable value which will be sent to the database when the close button gets pressed. The value will be initiated at the time the overlay comes up, and get the value of the according useState.`

const plusButtonAlert = `This button raises a variable value which will be sent to the database when the close button gets pressed. The value will be initiated at the time the overlay comes up, and get the value of the according useState.`

//// I was trying to get the shoppingLists amounts into the ArticleSelector, but the respective array is empty. Dunno y.