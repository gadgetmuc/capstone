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

  const [users, setUsers] = useState([]);
  
  const [loggedIn, setLoggedIn] = useState(false);
  
  const [shoppingListIdState, setShoppingListIdState] = useState(null);
  
  const [articles, setArticles] = useState([]);
  
  const [appMode, setAppMode] = useState(2); // this is hardcoded for the category buttons mode
  
  const [hideShoppingListName, setHideShoppingListName] = useState(true);

  const [isOverlayVisible, setIsOverlayVisible] = useState(null);

  const makeAppear = (category) => setIsOverlayVisible(category);

  const [whichShoppingListIsChosen, setWhichShoppingListIsChosen] = useState('nothing selected');



  function changeAppMode(mode) {
    setAppMode(mode);
    // console.log(appMode);
  }

  function chooseShoppingList(shoppingListName) {
    setWhichShoppingListIsChosen(shoppingListName)
    // console.log(whichShoppingListIsChosen)
  }
  
  // function changeLoggedInUser(thisUserTriesToLogIn) {
  //   setLoggedInUser(thisUserTriesToLogIn)
  // }
  // console.log(loggedIn);

  function changeLoggedInState(state) {
    setLoggedIn(state);
  }
  

  useEffect(() => {
    fetch('http://shoppinglist-app.local/articles')
    .then(response => response.json())
    .then((data) => setArticles(data))
  }, []); 
  
  useEffect(() => {
    fetch('http://shoppinglist-app.local/user/data')
    .then(response => response.json())
    .then((data) => setUsers(data))
  }, []);
    
  
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
        onClick={() => whichShoppingListIsChosen === 'nothing selected' ? setAppMode(2) : setHideShoppingListName(!hideShoppingListName)}>
          {whichShoppingListIsChosen}
          <HideShoppingListNameDiv />
        </ShoppingListNameLabel>
        <ShoppingCart appMode={appMode} whichShoppingListIsChosen={whichShoppingListIsChosen} articles={articles} />
      </ShoppingCartArea> 

      <ProfilePageWrapper  className={appMode === 2 ? 'app_mode_2' : ''}>
        <ProfilePage users={users} loggedIn={loggedIn} whichShoppingListIsChosen={whichShoppingListIsChosen} chooseShoppingList={chooseShoppingList} changeLoggedInState={changeLoggedInState} appMode={appMode} />
      </ProfilePageWrapper>

      <NavigationButtonArea changeAppMode={changeAppMode} loggedIn={loggedIn} />

    </Body>
  );
}

export default App;

//// ◁ ×

const Overlay = styled.div`
  z-index: 1;
  visibility: visible;
  opacity: .95;
  position: absolute;
  top: 110px;
  height: 90%;
  left: 5%;
  right: 5%;
  border-radius: 13px;
  background-color: #111;
  justify-content: center;
  color: ivory;
  transition: visibility 0s ease-in-out .5s;
  &.hide_overlay {
    visibility: hidden;
    transition: visibility 0s ease-in-out .5s;
  }
`

const OverlayHeader = styled.div`
  display: flex;
  padding-bottom: 5px;
  background-image: linear-gradient(180deg, green, #111);
  height: 3.4rem;
  border-radius: 13px 13px 0 0;
  justify-content: space-between;
  align-items: center;
  color: #111;
`

 const CategoryImage = styled.img`
  height: 3.4rem;
  width: 3.4rem;
  border-radius: 13px 0 0 0;
  border-right: 1px solid #333;
`

 const CategoryHeadline = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 3.4rem;
  justify-content: center;
  align-items: center;
  font-family: Monaco;
  font-size: 1.5rem;
  color: #eee;
`

 const CloseThisOverlayButton = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid #333;
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
  visibility: hidden;
  position: absolute;
  top: 80px;
  width: 375px;
  height: 667px;
  background-image: linear-gradient(orange, papayawhip);
  &.app_mode_2 {
    visibility: visible;
    background-color: red;
  }
`

const ShoppingListNameLabel = styled.div`
  visibility: visible;
  position: fixed;
  bottom: 95px;
  display: flex;
  direction: column;
  box-shadow: 1px 1px 3px #333; 
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 5px;
  height: 2.3rem;
  background-color: #f1c232;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  text-align: center;
  color: #111;
  font-family: Monaco, sans-serif;
  font-size: 1.43rem;
  font-weight: bold;
  &.click_away_shopping_list_name {
    visibility: hidden;
  }
`

const HideShoppingListNameDiv = styled.div`
  display: flex;
  direction: column;
  justify-content: center;
  align-items: center; 
  color: red;
  font-size: Monaco, sans-serif;
  font-weight: bold;
  font-size: 2rem;
  &::after {
    content: "  ×";
  }
`