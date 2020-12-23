import React, {useState} from 'react';
import styled from 'styled-components/macro';


export default function ArticleSelector ({description, amount}) {

    // {amount} is a hardcoded random amount, since the backend doesn't work properly!

    const [amountState, setAmountState] = useState(amount); 

    const minusButton = () => {
        amountState !== 0 && setAmountState(amountState - 1);
        console.log({amountState, description});
    }

    const plusButton = () => {
        amountState !== 9 && setAmountState(amountState + 1);
        console.log({amountState, description});
    }
    
    const isZero = amountState === 0;

    const isNine = amountState === 9;

    return (
        <div>
            <ArticleSelectorFlex>
                <ArticleSelectorDescription>
                    {description}
                </ArticleSelectorDescription>
                <Button disabled={isZero} onClick={minusButton}>-</Button>
                <ArticleSelectorAmount>{amountState}</ArticleSelectorAmount>
                <Button disabled={isNine} onClick={plusButton}>+</Button>
            </ArticleSelectorFlex>
        </div>
    )
}


const ArticleSelectorFlex = styled.div`
    display: flex;
    color: red;
    justify-content: space-between;
    height: 50px;
    width: 70hw;
    color: #111;
    margin-top: 5px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
    border-radius: 7px;
    background-image: linear-gradient(ivory, papayawhip);
    padding-left: 5px;
`

const ArticleSelectorDescription = styled.span`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: bottom;
    width: 70%;
    font-size: 1.05rem;
`
const ArticleSelectorAmount = styled.span`
    display: flex;
    flex-direction: column;
    width: 3rem;
    justify-content: center;
    align-items: center;

`

const Button = styled.button`
    font-size: 1.6rem;
    border-radius: 7px;
`

//// Fetching the shoppingLists amounts into the ArticleSelector does not work bc the database structure was built wrong. 