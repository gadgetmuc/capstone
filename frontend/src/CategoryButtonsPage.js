import React from 'react';
import styled from 'styled-components/macro';

import CategoryButton from './CategoryButton.js';
import categories from './data/categories.js';


export default function CategoryButtons ({ children }) {
  return (
    <CategoryButtonArea>
        <CategoryButton>{categories[0]}</CategoryButton>
        <CategoryButton>{categories[1]}</CategoryButton>
        <CategoryButton>{categories[2]}</CategoryButton>
        <CategoryButton>{categories[3]}</CategoryButton>
        <CategoryButton>{categories[4]}</CategoryButton>
        <CategoryButton>{categories[5]}</CategoryButton>
        <CategoryButton>{categories[6]}</CategoryButton>
        <CategoryButton>{categories[7]}</CategoryButton>
        <CategoryButton>{categories[8]}</CategoryButton>
        <CategoryButton>{categories[9]}</CategoryButton>
        <CategoryButton>{categories[10]}</CategoryButton>
        <CategoryButton>{categories[11]}</CategoryButton>
        <CategoryButton>{categories[12]}</CategoryButton>
        <CategoryButton>{categories[13]}</CategoryButton>
        <CategoryButton>{categories[14]}</CategoryButton>

    </CategoryButtonArea>
  )
}

const CategoryButtonArea = styled.div`
  margin-top: 20%;
  display: grid;
  color: white;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  // margin: 10px;
  background-color: rgba(0,0,0,0);
`