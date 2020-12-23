import {useState, useEffect} from 'react';
import styled from 'styled-components/macro';

import vegetablesImage from './images/vegetables.jpg';
import coldCutsImage from './images/coldCuts.jpg';
import bodyCareImage from './images/bodyCare.jpg';

import Header from './Header';
import Body from './Body';
import ShoppingCart from './ShoppingCart';
import CategoryButtonsPage from './CategoryButtonsPage';
import ProfilePage from './ProfilePage';
import NavigationButtonArea from './NavigationButtonArea';

import CategoryVegetables from './CategoryVegetables';
import CategoryColdCuts from './CategoryColdCuts';
import CategoryBodyCare from './CategoryBodyCare';

function App() {

  const [shoppingListIdState, setShoppingListIdState] = useState(1); // selected shoppinglist, hardcoded for now

  const [articles, setArticles] = useState([]);

  const [appMode, setAppMode] = useState(0); // this is hardcoded for the category buttons mode

  const [hideShoppingListName, setHideShoppingListName] = useState(true);

  function changeAppMode(mode) {
    setAppMode(mode);
    console.log(appMode);
  }


  useEffect(() => {
    fetch('http://shoppinglist-app.local/articles')
    .then(response => response.json())
    .then((data) => setArticles(data))
  }, []); 


  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('http://shoppinglist-app.local/user/data')
    .then(response => response.json())
    .then((data) => setUser(data))
  }, []);

  
  const [isOverlayVisible, setIsOverlayVisible] = useState(null);

  const makeAppear = (category) => setIsOverlayVisible(category);
  

  return ( 
    <Body>
      <Header />
        <CategoryButtonsPage appMode={appMode} makeAppear={makeAppear} makeAppearCategory="null" />

      <Overlay key="0" className={isOverlayVisible === 0 ? '' : 'hide_overlay'}>
        <OverlayHeader>
          <CategoryImage src={vegetablesImage} alt="vegetables" />
          <CategoryHeadline>
            vegetables
          </CategoryHeadline>
          <CloseThisOverlayButton onClick={() => {setIsOverlayVisible(null)}} /> 
        </OverlayHeader>
        <CategoryVegetables articles={articles} shoppingListIdState={shoppingListIdState}/>
      </Overlay>

      <Overlay key="6" className={isOverlayVisible === 6 ? '' : 'hide_overlay'}>
        <OverlayHeader>
          <CategoryImage src={coldCutsImage} alt="cold cuts" />
          <CategoryHeadline>
            cold cuts
          </CategoryHeadline>
          <CloseThisOverlayButton onClick={() => {setIsOverlayVisible(null)}} /> 
        </OverlayHeader>
        <CategoryColdCuts articles={articles} shoppingListIdState={shoppingListIdState}/>
      </Overlay>

      <Overlay key="11" className={isOverlayVisible === 11 ? '' : 'hide_overlay'}>
        <OverlayHeader>
          <CategoryImage src={bodyCareImage} alt="body care &amps; cosmetics" />
          <CategoryHeadline>
            body care &amp;<br />cosmetics
          </CategoryHeadline>
          <CloseThisOverlayButton onClick={() => {setIsOverlayVisible(null)}} /> 
        </OverlayHeader>
        <CategoryBodyCare articles={articles} shoppingListIdState={shoppingListIdState}/>
      </Overlay>

      <ShoppingCartArea className={appMode === 0 ? 'app_mode_0' : ''}>
        <ShoppingListNameLabel
        className={hideShoppingListName ? '' : 'click_away_shopping_list_name'}
        onClick={() => setHideShoppingListName(!hideShoppingListName)}>
          "Wochenendeinkauf"
          <HideShoppingListNameDiv />
        </ShoppingListNameLabel>
        <ShoppingCart appMode={appMode} />
      </ShoppingCartArea> 

      <ProfilePageWrapper className={appMode === 2 ? 'app_mode_2' : ''}>
        <ProfilePage />
      </ProfilePageWrapper>

      <NavigationButtonArea changeAppMode={changeAppMode} />

    </Body>
  );
}

export default App;

//// ◁ ×

const Overlay = styled.div`
  border-radius: 13px;
  visibility: visible;
  position: absolute;
  top: 110px;
  height: 90%;
  color: ivory;
  left: 5%;
  right: 5%;
  justify-content: center;
  opacity: .95;
  z-index: 10;
  background-color: #111;
  transition: visibility 0s ease-in-out .5s;
  &.hide_overlay {
    visibility: hidden;
    transition: visibility 0s ease-in-out .5s;
  }
`

const OverlayHeader = styled.div`
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.4rem;
  display: flex;
  color: #111;
  background-image: linear-gradient(180deg, green, #111);
  border-radius: 13px 13px 0 0;

`
 const CategoryImage = styled.img`
  height: 3.4rem;
  width: 3.4rem;
  border-right: 1px solid #333;
  border-radius: 13px 0 0 0;
  // background-color: limegreen;
 `

 const CategoryHeadline = styled.div`
  color: #eee;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  font-size: 1.5rem;
  font-family: Monaco;
  height: 3.4rem;
 `

 const CloseThisOverlayButton = styled.div`
  display: flex;
  border-left: 1px solid #333;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(180deg, #e22, #111);
  border-radius: 0 13px 0 0;
  width: 3.4rem;
  height: 3.4rem;
  color: #ddd;
  font-size: 4rem;
  &:hover {
    background-image: linear-gradient(180deg, #f33, #111);
    font-size: 4.1rem;
  }
  &::after {
    content: "◁";
  }
  &.close_shopping_cart_button {
    border-radius: 13px;
  }
`

const ShoppingCartArea = styled.div`
  visibility: hidden;
  position: absolute;
  top: 80px;
  left: 3px;
  right: 3px;
  &.app_mode_0 {
    visibility: visible;
  }
`

const ProfilePageWrapper = styled.div`
  width: 375px;
  height: 667px;
  background-image: linear-gradient(orange, papayawhip);
  visibility: hidden;
  position: absolute;
  top: 80px;
  &.app_mode_2 {
    visibility: visible;
    background-color: red;
  }
`

const ShoppingListNameLabel = styled.div`
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
  font-weight: bold;
  padding: 5px 15px;
  margin-left: 30px;
  margin-right: 30px;
  background-color: #f1c232;
  border-radius: 5px;
  height: 2.3rem;
  text-align: center;
  box-shadow: 1px 1px 3px #333; 
  &.click_away_shopping_list_name {
    visibility: hidden;
  }
`

const HideShoppingListNameDiv = styled.div`
  display: flex;
  direction: column;
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