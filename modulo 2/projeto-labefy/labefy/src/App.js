import React from "react";
import styled from 'styled-components';
import axios from 'axios';
import AddPlaylist from "./component/AddPlaylist/AddPlaylist";
import InfoPlaylist from "./component/InfoPlaylist/InfoPlaylist";
import base from './base.css'

//joao-aguiar-silveira

const MainDiv = styled.div`

`

const Voltar = styled.button`
border: none;
height: 20px;
background-color: black;
color:white;
cursor: pointer;
`

const Del = styled.button`
cursor: pointer;
border:none;
background-color: transparent;
height:100%;
width: 20px;

:hover{
  background-color: red;
}
`

const List = styled.div`
  display:flex;
  flex-direction: column;
  border: solid 1px;
  width: 168px;
  background-color: white;

  h4{
    margin: auto;
  }

  
`

const Info = styled.div`
cursor:pointer;
padding-bottom: 5px;
padding-top: 5px;
`

const Display = styled.div`
background-color: white;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
border:solid 1px;
border-radius: 5px;
box-shadow: 0px 2px 7px 5px rgba(0, 0, 0, 0.39);
width:40%;
height: 40%;

h2{
  padding-bottom: 15px;
}
button{
  background-color: black;
  color: white;
  border:none;
  border-radius: 2px;
  width: 200px;
  height:30px;

  :hover{
    background-color: rgb(20, 20, 20);
    cursor: pointer;
  }
}
`

const Input = styled.input`
  width: 200px;
  height:30px;
  border:solid 1px;
  border-radius: 2px;
  margin-bottom: 5px;

  :focus{
    outline:0px;
  }

`

const DivMain = styled.div`
display:flex;
justify-content:center;
align-items: center;
flex-direction:column;
background-color: rgba(243, 158, 0);
width:100%;
height: 700px;
`

const Header = styled.header`
width:97%;
background-color: black;
color: white;
margin:0px;
padding:20px;
`

const ContainerPlaylist = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
border-bottom:solid 1px;

:hover{
  background-color: rgba(197, 197, 197);
}
`

class App extends React.Component {


  state = {
    valorNomePlaylist: '',
    pagAtual: 'mainPage',
    allPlaylists: [],
    playlistAtual: [],
    nomePlaylistAtual: '',
    idPlaylistAtual: '',
    add: false,
    valorAuth: 'joao-aguiar-silveira'
  }

  //..........................................................................

  pegarPlaylists = () => {

    const headers = {
      headers: {
        Authorization: this.state.valorAuth
      }
    }

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

    axios.get(url, headers)
      .then((res) => {
        this.setState({ allPlaylists: res.data.result.list })
        console.log(this.state.allPlaylists)
      }).catch((err) => {
        console.log(err.data)
      })
  }

  criarPlaylist = () => {
    const body = {
      name: this.state.valorNomePlaylist
    }

    const headers = {
      headers: {
        Authorization: this.state.valorAuth
      }
    }

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

    axios.post(url, body, headers)
      .then((res) => {
        this.pegarPlaylists()
        console.log(`playlist '${this.state.valorNomePlaylist}' criada com sucesso!`)
        this.setState({ valorNomePlaylist: '' })
      }).catch((err) => {
        console.log(err)
      })
  }

  deletarPlaylists = (id, nome) => {
    const headers = {
      headers: {
        Authorization: this.state.valorAuth
      }
    }

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

    if (window.confirm(`tem certeza que deseja deletar a playlist: '${nome}'`)) {
      axios.delete(url, headers)
        .then((res) => {
          this.pegarPlaylists()
          console.log(this.state.allPlaylists)
        }).catch((err) => {
          console.log(err.data)
        })
    }

  }

  infoPlaylist = (id, nome) => {

    const headers = {
      headers: {
        Authorization: this.state.valorAuth
      }
    }

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

    axios.get(url, headers)
      .then((res) => {
        this.setState({
          playlistAtual: res.data.result.tracks,
          nomePlaylistAtual: nome,
          idPlaylistAtual: id
        })
        this.setState({ pagAtual: 'infoPlaylist' })
      }).catch((err) => {
        console.log(err.data)
      })

  }

  addState = () => {
    this.setState({ add: !this.state.add })
  }


  //..........................................................................

  playlists = () => {
    if(this.state.valorAuth !=''){
      this.setState({ pagAtual: 'playlists' })
      this.pegarPlaylists()
    }else{
      alert("insira uma autorização")
    }
  }

  mainPage = () => {
    this.setState({ pagAtual: 'mainPage' })
    this.pegarPlaylists()
  }

  onChangeNomePlaylist = (e) => {
    this.setState({ valorNomePlaylist: e.target.value })
  }

  onChangeValorAuth = (e) => {
    this.setState({ valorAuth: e.target.value })
  }

  //............................................................................

  render() {

    const playlists = this.state.allPlaylists.map((playlist) => {
      return (
        <ContainerPlaylist>
          <Info onClick={() => { this.infoPlaylist(playlist.id, playlist.name) }}>
            <p>{playlist.name}</p>
          </Info>
          <Del onClick={() => { this.deletarPlaylists(playlist.id, playlist.name) }} >X</Del>
        </ContainerPlaylist>
      )
    })



    switch (this.state.pagAtual) {

      case 'mainPage':
        return (
          <MainDiv>
            <Header>
              <h1>Labefy</h1>
            </Header>
            <DivMain>
              <Display>
                <h2>Digite sua Autorização</h2>
                <Input
                  required
                  onChange={this.onChangeValorAuth}
                  value={this.state.valorAuth}
                  placeholder="nome-sobrenome-turma"
                />
                <button onClick={this.playlists}>
                  Playlists
                </button>
              </Display>
            </DivMain>
          </MainDiv>
        )
      case 'playlists':
        return (
          <MainDiv>
            <Header>
              <h1>Labefy</h1>
            </Header>
            <DivMain>
              <AddPlaylist
                mainPage={this.mainPage}
                valorNomePlaylist={this.state.valorNomePlaylist}
                onChangeNomePlaylist={this.onChangeNomePlaylist}
                criarPlaylist={this.criarPlaylist}
              />
              <List>
                <h4>Playlists</h4>
                <hr/>
              {playlists}
              <Voltar onClick={this.mainPage}>
                Voltar
              </Voltar>
              </List>
            </DivMain>
          </MainDiv>
        )
      case 'infoPlaylist':
        return (
          <MainDiv>
            <Header>
              <h1>Labefy</h1>
            </Header>
            <DivMain>
            <InfoPlaylist
              nomePlaylistAtual={this.state.nomePlaylistAtual}
              playlistPage={this.playlists}
              musicas={this.state.playlistAtual}
              add={this.state.add}
              addState={this.addState}
              id={this.state.idPlaylistAtual}
              nome={this.state.nomePlaylistAtual}
              infoPlaylist={this.infoPlaylist}
              auth={this.state.valorAuth}
            />
            </DivMain>
            
          </MainDiv>
        )



      default:
        return (
          <div>erro</div>
        )

    }

  }

}

export default App;
