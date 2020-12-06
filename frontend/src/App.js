import {useState, useEffect} from 'react';
import styled from 'styled-components/macro';

import Header from './Header';
import Body from './Body';
import CategoryButtonsPage from './CategoryButtonsPage';
import NavigationButtonArea from './NavigationButtonArea';
import CategoryVegetables from './CategoryVegetables';

function App() {

  const [shoppingListIdState, setShoppingListIdState] = useState(1); // hardcoded for now

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://shoppinglist-app.local/articles')
    .then(response => response.json())
    .then((data) => setArticles(data))
  }, []); 


  const [amounts, setAmounts] = useState([]);

  useEffect(() => {
    fetch('http://shoppinglist-app.local/shopping/lists')
    .then(response => response.json())
    .then((data) => setAmounts(data))
  }, []);



  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('http://shoppinglist-app.local/user/data')
    .then(response => response.json())
    .then((data) => setUser(data))
  }, []);


  return (
    <Body>
      <Header>Einkaufslisten-App</Header>
        <CategoryButtonsPage />
        <Overlay>
          <p>Hier kommt das overlay hin. Blablabla</p>
          <CategoryVegetables articles={articles} amounts={amounts} shoppingListIdState={shoppingListIdState}/>
        </Overlay>

      <NavigationButtonArea />

    </Body>
  );
}

export default App;



const Overlay = styled.div`
  position: absolute;
  border-radius: 13px;
  // visibility: hidden;
  top: 3%;
  color: ivory;
  left: 3%;
  right: 3%;
  bottom: 3%;
  justify-content: center;
  opacity: .95;
  z-index: 10;
  background-color: #111;

  
`

