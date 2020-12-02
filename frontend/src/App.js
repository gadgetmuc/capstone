import React from 'react';
import styled from 'styled-components/macro';

import Header from './Header';
import Body from './Body';
import CategoryButton from './CategoryButton';
import NavigationButtonArea from './NavigationButtonArea';


import categories from './data/categories.js';

function App() {
  return (
    <Body>
      <Header>Einkaufslisten-App</Header>
      <CategoryButtonArea className="App">
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

      <NavigationButtonArea />

    </Body>
  );
}

export default App;


const CategoryButtonArea = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin: 10px;
  background-color: deeyskyblue;
`