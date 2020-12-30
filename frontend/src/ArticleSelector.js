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
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 10px;
    margin-right: 10px;
    height: 50px;
    width: 70hw;
    border-radius: 7px;
    background-image: linear-gradient(ivory, papayawhip);
    justify-content: space-between;
    padding-left: 5px;
    color: #111;
`

const ArticleSelectorDescription = styled.span`
    display: flex;
    flex-flow: column wrap;
    width: 70%;
    justify-content: center;
    align-items: bottom;
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
    border-radius: 7px;
    font-size: 1.6rem;
`

//// Fetching the shoppingLists amounts into the ArticleSelector does not work bc the database structure was built wrong. 