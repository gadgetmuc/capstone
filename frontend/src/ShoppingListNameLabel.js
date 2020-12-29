import React from 'react';
import styled from 'styled-components/macro';

export default function ShoppingListNameLabel({
    hideShoppingListNameLabel,
    toggleShoppingListNameLabel,
    shoppingListName
}) { 

    return (
        <ShoppingListNameLabelDiv
            className={hideShoppingListNameLabel === 0 ? '' : 'hide_shopping_list_name'}
            onClick={() => toggleShoppingListNameLabel(1)}>
                {shoppingListName}
            <HideShoppingListNameDiv />
        </ShoppingListNameLabelDiv>
    )
}


const ShoppingListNameLabelDiv = styled.div`
  position: fixed;
  bottom: 95px;
  visibility: visible;
  display: flex;
  direction: column;
  justify-content: center;
  align-items: center;
  color: #111;
  font-family: Monaco, sans-serif;
  font-size: 1.43rem;
  font-weight: 500;
  padding: 5px 15px;
  margin-left: 30px;
  margin-right: 30px;
  background-color: #f1c232;
  border-radius: 5px;
  height: 2.3rem;
  text-align: center;
  box-shadow: 1px 1px 3px #333; 
  &.hide_shopping_list_name {
    visibility: hidden;
  }
`

const HideShoppingListNameDiv = styled.div`
  display: flex;
  direction: column;
  margin-left: 13px;
  margin-bottom: 7px;
  color: red;
  font-size: Monaco, sans-serif;
  font-weight: bold;
  font-size: 2rem;
  justify-content: center;
  align-items: center; 
  &:after {
    content: "×";
  }
`