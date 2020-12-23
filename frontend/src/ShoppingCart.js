import React, {useState} from 'react';
import styled from 'styled-components/macro';



export default function ShoppingCart({appMode}) {

    const heinz = [
        ['a', 0, 'Bananen', 3],
        ['n', 1, 'Cola', 1],
        ['f', 2, 'Erdnüsse', 2],
        ['j', 3, 'Fladenbrot', 1],
        ['o', 4, 'Geranien', 1],
        ['u', 5, 'Klopapier', 9],
        ['a', 6, 'Limetten', 4],
        ['i', 7, 'Müsli', 1],
        ['f', 8, 'Schokolade', 3],
        ['g', 9, 'Zimtsterne', 3]
    ];
    
    let ketchup = [];
    heinz.map((item) => ketchup.push([item[0] + item[1], item[2], item[3]]));
    ketchup = ketchup.sort();

    const [heinzState, setHeinzState] = useState(ketchup); //confusing at first glance, sry!

    return (
        <div>
            <ShoppingCartItemFlexArea className={appMode === 0 ? 'app_mode_0' : ''}>
                {heinzState.map((item) => 
                    <ShoppingCartItemFlex key={item[0] + item[1]}>
                        <Amount>{item[2]}</Amount>
                        <Description>{item[1]}</Description>
                        <PutIntoBasketButton 
                        onChange={(event) => setHeinzState()}
                        onClick={() => {
                            const aux = heinzState.findIndex(element => element[0] === item[0]);
                            setHeinzState([...heinzState.slice(0, aux), ...heinzState.slice(aux + 1)]);
                        }}
                        >✓</PutIntoBasketButton>
                        <PutOnHoldButton
                        onChange={(event) => setHeinzState()}
                        onClick={() => {
                            const aux = heinzState.findIndex(element => element[0] === item[0]);
                            setHeinzState([...heinzState.slice(0, aux), ...heinzState.slice(aux + 1)]);
                        }}>⏳</PutOnHoldButton>
                    </ShoppingCartItemFlex>
                )}
            </ShoppingCartItemFlexArea>
    
        </div>


    );
}



const ShoppingCartItemFlexArea = styled.div`
    visibility: hidden;
    &.app_mode_0 {
        visibility: visible;
    }
`

const ShoppingCartItemFlex = styled.div`
    height: 50px;
    left: 10px;
    right: 10px;
    display: flex;
    margin: 10px 5px;
    background-image: linear-gradient(135deg, papayawhip, ivory);
    border-radius: 5px;
    color: #111;
    align-items: center;
    padding-left: 5px;
    box-shadow: 2px 2px 3px #333;
`

const Amount = styled.div`
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
    background-image: linear-gradient(315deg, papayawhip, ivory);
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-right: 5px;
`

const Description = styled.span`
    width: 70%;
    height: 2rem;
    padding-left: 5px;
    border-radius: 3px;
    font-size: 1.3rem;
`

const PutIntoBasketButton = styled.button`
    margin-right: 5px;
    margin-left: 5px;
    width: 2.2rem;
    height: 2.2rem;
    font-size: 1.2rem;
    color: ivory;
    background-image: linear-gradient(135deg, #111, green);
    border-radius: 50%;
`

const PutOnHoldButton = styled.button`
    margin-right: 5px;
    background-image: linear-gradient(135deg, #111, #e22);
    height: 2.2rem;
    width: 2.2rem;
    border-radius: 50%;
`   