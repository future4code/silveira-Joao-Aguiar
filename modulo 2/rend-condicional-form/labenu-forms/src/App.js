import React from 'react';
import styled from 'styled-components';
import MainForm from './components/Main/Main';
import E2 from './components/E2/Etapa2';
import E1 from './components/E1/Etapa1';
import E3 from './components/E3/Etapa3';
import Final from './components/Final/Final';


const MainContainer = styled.div`
height:700px;
display:flex;
justify-content: center;
align-items:center;

@media screen and (max-width:500px){
  .showcontainer{
    width: 90%;
  }
}
`

const Container = styled.div`
display: flex;
flex-direction: column-reverse;
border: solid 1.5px;
border-radius: 10px;
width: 50%;
height: 70%;
`

const MainButton = styled.button`
position:relative;
top:1.5px;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;

border: none;
height:50px;
color:white;
background-color: black;

:hover{
  background-color: rgb(32, 32, 32);
}

:active{
  background-color: white;
  color: black;
}
`

class App extends React.Component {

state = {
  num: 0,
  displayButton: 'Iniciar Form',
  formulario: <MainForm />,

}

onClickMainButton = () => {
  if(this.state.num === 0){
    this.state.num = 1;
  }
  if(this.state.num < 4){
    this.setState({num: this.state.num + 1})
    this.setState({displayButton:'Próximo'})
    console.log(this.state.num)
  }
  else if ( this.state.num === 4){
    this.setState({displayButton:'Novo Form'})
    this.setState({num:0})
    console.log(this.state.num)
  }
  else{
    this.setState({displayButton:'Iniciar Form'})
    console.log(this.state.num)
  }

  this.mainButtonResponse();

}

mainButtonResponse = () => {
  switch (this.state.num){
    case 0: 
    this.setState({formulario: <MainForm />})
    break;

    case 1: 
    this.setState({formulario: <E1 />})
    break;

    case 2: 
    this.setState({formulario: <E2 />})
    break;

    case 3: 
    this.setState({formulario: <E3 />})
    break;

    case 4: 
    this.setState({formulario: <Final />})
    break;
    default: <div>default</div>
  }
}

render(){
  return (
    <MainContainer>
        <Container className='showcontainer'>
            <MainButton className='mbutton' onClick={this.onClickMainButton}>
                {this.state.displayButton}
            </MainButton>
            {this.state.formulario}
        </Container>
    </MainContainer> 
  );
}

}

export default App;
