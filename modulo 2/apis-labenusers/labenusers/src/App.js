import styled from 'styled-components';
import axios from 'axios';
import React from 'react';
import MainPage from './components/MainPage/MainPage';

const ShowNames = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin:auto;
width:300px;
margin-bottom:2px;
border-top:solid 1px;
border-bottom:solid 1px;

p{
  margin:0px;
}
button{
  border:none;
  background-color:transparent;
  :hover{
    background-color:red;
  }
}
`

const Display = styled.div`
display:flex;
height:600px;
width:80%;
margin: auto;
justify-content:center;
align-items:center;

`

const Page = styled.div`
display:flex;
flex-direction: column;

h1{
  margin: auto;
}

`

const Voltar = styled.button`
width: 300px;
margin:auto;
`



class App extends React.Component {

  state = {
    valorUser: '',
    valorEmail: '',
    pesquisar: '',
    usuarios: [],
    tela: true
  }

  getUsuarios = () => {

    const headers = {
      headers: {
        Authorization: 'joao-aguiar-silveira'
      }
    }

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

    axios.get(url, headers)
      .then((res) => {
        this.setState({ usuarios: res.data })
      })
      .catch((err) => {
        alert(err.response.data)
      })

  }

  componentDidMount() {
    this.getUsuarios()
  }

  criarUsuarios = () => {

    const body = {
      name: this.state.valorUser,
      email: this.state.valorEmail
    }

    const headers = {
      headers: {
        Authorization: 'joao-aguiar-silveira'
      }
    }

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

    axios.post(url, body, headers)
      .then((res) => {
        this.getUsuarios()
        this.setState({valorEmail:''})
        this.setState({valorUser:''})
        alert('Usuário criado!')
      })
      .catch((err) => {
        alert(err.response.data)
      })

  }

  deleteUsuarios = (nome,id) => {

    const headers = {
      headers: {
        Authorization: 'joao-aguiar-silveira'
      }
    }

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

      axios.delete(url, headers)
      .then((res) => {
        this.getUsuarios()
        alert(`Usuário ${nome} deletado com sucesso`)
      })
      .catch((err) => {
        alert(err.response.data)
      })
    
    }
  

  onClickTela = () => {
    this.setState({ tela: !this.state.tela })
  }

  //...........configuração dos inputs............
  onChangeInputUser = (e) => {
    this.setState({ valorUser: e.target.value })
  }

  onChangeInputEmail = (e) => {
    this.setState({ valorEmail: e.target.value })
  }


  render() {

    const renderizarNomes = this.state.usuarios.map((user) => {
      return (
        <ShowNames>
          <p key={user.id}>{user.name}</p>
          <button onClick={()=> this.deleteUsuarios(user.name,user.id)}>X</button>
        </ShowNames>
      )
    })


    let telaAtual;
    if (this.state.tela) {
      telaAtual = (
        <Page>
          <h1>Cadastre um usuário</h1>
          <MainPage
            valorUser={this.state.valorUser}
            valorEmail={this.state.valorEmail}
            onChangeInputUser={this.onChangeInputUser}
            onChangeInputEmail={this.onChangeInputEmail}
            criarUsuarios={this.criarUsuarios}
          />
          <button onClick={this.onClickTela}>Ver Usuários</button>
        </Page>
      )
    } else {
      return (
        <Page>
          <h1>Usuários</h1>
          {renderizarNomes}
          <Voltar onClick={this.onClickTela}>Voltar</Voltar>
        </Page>
      )
    }


    return (
      <Display>
        {telaAtual}
      </Display>
    );
  }

}

export default App;
