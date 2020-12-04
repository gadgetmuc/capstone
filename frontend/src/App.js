import {useState, useEffect} from 'react';
import styled from 'styled-components/macro';

import Header from './Header';
import Body from './Body';
import CategoryButtonsPage from './CategoryButtonsPage';
import NavigationButtonArea from './NavigationButtonArea';
import CategoryVegetables from './CategoryVegetables';

function App() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://shoppinglist-app.local/user/articles')
    .then(response => response.json())
    .then((data) => setArticles(data))
  }, []); 

  const [amounts, setAmounts] = useState([]);



  return (
    <Body>
      <Header>Einkaufslisten-App</Header>
        <CategoryButtonsPage />
        <Overlay>
          <p>Hier kommt das overlay hin. Blablabla</p>
          <CategoryVegetables articles={articles}/>
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
  color: deeppink;
  left: 3%;
  right: 3%;
  bottom: 3%;
  justify-content: center;
  opacity: .95;
  z-index: 10;
  background-color: #111;

  
`

