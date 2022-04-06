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

:hover{
  background-color: rgb(240, 240, 240);;
}


div{
  width:100%;
}

p{
  margin:0px;
  cursor: pointer;
}

`
const Del = styled.button`
  cursor: pointer;
  border:none;
  background-color:transparent;
  :hover{
    background-color:red;
  }

`
const Edit = styled.button`
  cursor: pointer;
  border:none;
  background-color:transparent;
  :hover{
    background-color:aqua;
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

const Info = styled.div`
text-align:center;
`



class App extends React.Component {

  state = {
    valorUser: '',
    valorEmail: '',
    pesquisar: '',
    usuarios: [],
    tela: 'cadastro',
    usuarioAtual: [],
    editando: false
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
        alert(`Usuário '${this.state.valorUser}' criado com sucesso!`)
        this.setState({ valorEmail: '' })
        this.setState({ valorUser: '' })

      })
      .catch((err) => {
        alert(err.response.data)
      })

  }

  editarUsuarios = (id) => {

    const body = {
      name: this.state.valorUser,
      email: this.state.valorEmail
    }

    const headers = {
      headers: {
        Authorization: 'joao-aguiar-silveira'
      }
    }

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

    axios.put(url, body, headers)
      .then((res) => {
        this.getUsuarios()
        alert(`Usuário '${this.state.valorUser}' editado com sucesso!`)
        this.setState({
          valorUser: '',
          valorEmail: ''
        })
      })
      .catch((err) => {
        alert(err.response.data)
      })

  }

  deleteUsuarios = (nome, id) => {

    const headers = {
      headers: {
        Authorization: 'joao-aguiar-silveira'
      }
    }

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

    let confirmar = window.confirm(`Tem certeza que deseja excluir o usuário: ${nome}?`)
    if (confirmar) {
      axios.delete(url, headers)
        .then((res) => {
          this.getUsuarios()
          alert(`Usuário '${nome}' deletado com sucesso`)
          this.setState({ tela: 'user' })
        })
        .catch((err) => {
          alert(err.response.data)
        })

    }

  }


  onClickMainTela = () => {
    this.setState({ tela: 'cadastro' })
  }

  onClickUserTela = () => {
    this.setState({ tela: 'user' })
  }

  onClickInfoTela = (id) => {

    const headers = {
      headers: {
        Authorization: 'joao-aguiar-silveira'
      }
    }

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

    axios.get(url, headers)
      .then((res) => {
        this.setState({ usuarioAtual: res.data })
        this.setState({ tela: 'info' })
      })
      .catch((err) => {
        alert(err.response.data)
      })

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
          <div onClick={() => { this.onClickInfoTela(user.id) }}>
            <p key={user.id}>{user.name}</p>
          </div>
          <Del onClick={() => this.deleteUsuarios(user.name, user.id)}>X</Del>
        </ShowNames>
      )
    })


    let telaAtual;
    switch (this.state.tela) {

      case 'cadastro':
        return (
          <Display>
            <Page>
              <h1>Cadastre um usuário</h1>
              <MainPage
                valorUser={this.state.valorUser}
                valorEmail={this.state.valorEmail}
                onChangeInputUser={this.onChangeInputUser}
                onChangeInputEmail={this.onChangeInputEmail}
                criarUsuarios={this.criarUsuarios}
              />
              <button onClick={this.onClickUserTela}>Ver Usuários</button>
            </Page>
          </Display>
        )

      case 'user':
        return (
          <Display>
            <Page>
              <h1>Usuários</h1>
              {renderizarNomes}
              <Voltar onClick={this.onClickMainTela}>Voltar</Voltar>
            </Page>
          </Display>

        )

      case 'info':
        return (
          <Display>
            <Info>
              <div>
                <p><strong>Nome:</strong> {this.state.usuarioAtual.name}</p>
                <p><strong>Email:</strong> {this.state.usuarioAtual.email}</p>
                <p><strong>ID:</strong> {this.state.usuarioAtual.id}</p>
              </div>
              <button onClick={() => this.deleteUsuarios(this.state.usuarioAtual.name, this.state.usuarioAtual.id)}>Deletar este usuário</button>
              <button onClick={this.onClickUserTela}>Voltar a Usuarios</button>
            </Info>
          </Display>
        )

      default:
        return (
          <Display>
            <Page>
              <h1>Ocorreu um erro</h1>
            </Page>
          </Display>
        )
    }



  }

}

export default App;
