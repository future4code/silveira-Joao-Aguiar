import React from "react";
import { MainPage } from './components/MainPage/MainPage'
import styled from "styled-components";

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
height: 600px;
`



function App() {
  return (
    <Container>
      <MainPage/>
    </Container>
  );
}

export default App;
