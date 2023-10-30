/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Calculadora from './Components/Calculadora';


const AppContainer = styled.div`
  display: flex;
  text-align: center;
  margin-top: 30px;
`;

function App() {
  return (
    <AppContainer>
      <Calculadora />
    </AppContainer>
  );
}

export default App;
