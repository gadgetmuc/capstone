import React from 'react';
import styled from 'styled-components/macro';

import categories from './data/categories.js';

import vegetablesImage from './images/vegetables.jpg';
import fruitImage from './images/fruit.jpg';
import milkImage from './images/milk.jpg';
import cookingImage from './images/cooking.jpg';
import breakfastImage from './images/breakfast.jpg';
import breadImage from './images/bread.jpg';
import coldCutsImage from './images/coldCuts.jpg';
import beveragesImage from './images/beverages.jpg';
import snacksImage from './images/snacks.jpg';
import instantImage from './images/instant.jpg';
import frozenImage from './images/frozen.jpg';
import bodyCareImage from './images/bodyCare.jpg';
import babyImage from './images/baby.jpg';
import houseCleaningImage from './images/houseCleaning.jpg';
import nonFoodImage from './images/nonFood.jpg';

// import Overlay from './Overlay.js';


export default function CategoryButtonsPage({children, makeAppear, makeAppearCategory, appMode})
{
  
  
  
  return (
    <div>
      <Spacer />
        <CategoryButtonArea className={appMode === 1 ? 'app_mode_1' : ''}>
          <CatButton image={vegetablesImage} className="category0" onClick={() => makeAppear(0)}>{categories[0]}</CatButton>
          <CatButton image={fruitImage} className="category1" onClick={() => makeAppear(1)}>{categories[1]}</CatButton>
          <CatButton image={milkImage} className="category2" onClick={() => makeAppear(2)}>{categories[2]}</CatButton>
          <CatButton image={cookingImage} className="category3" onClick={() => makeAppear(3)}>{categories[3]}</CatButton>
          <CatButton image={breakfastImage} className="category4" onClick={() => makeAppear(4)}>{categories[4]}</CatButton>
          <CatButton image={breadImage} className="category5" onClick={() => makeAppear(5)}>{categories[5]}</CatButton>
          <CatButton image={coldCutsImage} className="category6" onClick={() => makeAppear(6)}>{categories[6]}</CatButton>
          <CatButton image={beveragesImage} className="category7" onClick={() => makeAppear(7)}>{categories[7]}</CatButton>
          <CatButton image={snacksImage} className="category8" onClick={() => makeAppear(8)}>{categories[8]}</CatButton>
          <CatButton image={instantImage} className="category9" onClick={() => makeAppear(9)}>{categories[9]}</CatButton>
          <CatButton image={frozenImage} className="category10" onClick={() => makeAppear(10)}>{categories[10]}</CatButton>
          <CatButton image={bodyCareImage} className="category11" onClick={() => makeAppear(11)}>{categories[11]}</CatButton>
          <CatButton image={babyImage} className="category12" onClick={() => makeAppear(12)}>{categories[12]}</CatButton>
          <CatButton image={houseCleaningImage} className="category13" onClick={() => makeAppear(13)}>{categories[13]}</CatButton>
          <CatButton image={nonFoodImage} className="category14" onClick={() => makeAppear(14)}>{categories[14]}</CatButton>
        </CategoryButtonArea>
      <Spacer />
    </div>
  )
}

const CatButton = styled.button`
  width: 85px;
  height: 85px;
  border-radius: 5px;
  font-size: 1.1rem;
  /* background-image: linear-gradient(135deg, papayawhip, orange); */
  background-image: url(${props => props.image});
  background-size: cover;
  color: #000;
  &:active {
  background-image: linear-gradient(315deg, rgba(ff, ef, d5, .3), rgba(ff, a5, 0, .3));
  color: #333;
  }
  `  

const CategoryButtonArea = styled.div`
  display: grid;
  visibility: hidden;
  color: white;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  gap: 30px 20px;
  margin-top: 80px;
  margin-bottom: 80px;
  background-color: rgba(0,0,0,0);
  &.app_mode_1 {
    visibility: visible;
  }

`

const Spacer = styled.div`
  height: 50px;
  opacity: 0;
`