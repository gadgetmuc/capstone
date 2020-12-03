import React from 'react';
import styled from 'styled-components/macro';

import Header from './Header';
import Body from './Body';
import CategoryButtonsPage from './CategoryButtonsPage';
import NavigationButtonArea from './NavigationButtonArea';

function App() {
  return (
    <Body>
      <Header>Einkaufslisten-App</Header>
        <CategoryButtonsPage />
        <Overlay>
          <p>Hier kommt das overlay hin. Blablabla</p>
        </Overlay>

      <NavigationButtonArea />

    </Body>
  );
}

export default App;



const Overlay = styled.div`
  position: absolute;
  border-radius: 13px;
  visibility: hidden;
  top: 3%;
  left: 3%;
  right: 3%;
  bottom: 3%;
  justify-content: center;
  opacity: .95;
  z-index: 10;
  background-color: #111;
`
