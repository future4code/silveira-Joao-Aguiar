import styled from "styled-components";
import AppRouter from "./router/router";
import './App.css';
import React from "react";

const AppDiv = styled.div`

`
function App() {
  return (
    <AppDiv>
      <AppRouter/>
    </AppDiv>
  );
}

export default App;
