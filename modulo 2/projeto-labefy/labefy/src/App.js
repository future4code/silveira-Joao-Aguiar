import React from "react";
import styled from 'styled-components';
import axios from 'axios';
import AddPlaylist from "./component/AddPlaylist/AddPlaylist";
import InfoPlaylist from "./component/InfoPlaylist/InfoPlaylist";


const MainDiv = styled.div`
  a{
    display:block;
  }
`

const Info = styled.div`
cursor:pointer;
`

const ContainerPlaylist = styled.div`
display:flex;
align-items: center;

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
    nomePlaylistAtual:'',
    idPlaylistAtual:'',
    add: false
  }

  //..........................................................................

  pegarPlaylists = () => {

    const headers = {
      headers: {
        Authorization: "joao-aguiar-silveira"
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

  componentDidMount() {
    this.pegarPlaylists()
  }

  criarPlaylist = () => {
    const body = {
      name: this.state.valorNomePlaylist
    }

    const headers = {
      headers: {
        Authorization: "joao-aguiar-silveira"
      }
    }

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

    axios.post(url, body, headers)
      .then((res) => {
        this.pegarPlaylists()
        console.log(`playlist '${this.state.valorNomePlaylist}' criada com sucesso!`)
        this.setState({valorNomePlaylist:''})
      }).catch((err) => {
        console.log(err)
      })
  }

  deletarPlaylists = (id,nome) => {
    const headers = {
      headers: {
        Authorization: "joao-aguiar-silveira"
      }
    }

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

  if(window.confirm(`tem certeza que deseja deletar a playlist: '${nome}'`)){
    axios.delete(url, headers)
    .then((res) => {
      this.pegarPlaylists()
      console.log(this.state.allPlaylists)
    }).catch((err) => {
      console.log(err.data)
    })
  }
   
  }

  infoPlaylist = (id,nome) => {

    const headers = {
      headers: {
        Authorization: "joao-aguiar-silveira"
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

  addState = ()=> {
    this.setState({add: !this.state.add})
  }


  //..........................................................................

  playlists = () => {
    this.setState({ pagAtual: 'playlists' })
  }

  mainPage = () => {
    this.setState({ pagAtual: 'mainPage' })
  }

  onChangeNomePlaylist = (e) => {
    this.setState({ valorNomePlaylist: e.target.value })
  }

  //............................................................................

  render() {

    const playlists = this.state.allPlaylists.map((playlist) => {
      return (
        <ContainerPlaylist>
          <Info onClick={() => { this.infoPlaylist(playlist.id, playlist.name) }}>
            <p>{playlist.name}</p>
          </Info>
          <button onClick={() => { this.deletarPlaylists(playlist.id,playlist.name) }} >X</button>
        </ContainerPlaylist>
      )
    })



    switch (this.state.pagAtual) {

      case 'mainPage':
        return (
          <MainDiv>
            <h1>Labefy</h1>
            <button onClick={this.playlists}>
              Playlists
            </button>
          </MainDiv>
        )
      case 'playlists':
        return (
          <MainDiv>
            <AddPlaylist
              mainPage={this.mainPage}
              valorNomePlaylist={this.state.valorNomePlaylist}
              onChangeNomePlaylist={this.onChangeNomePlaylist}
              criarPlaylist={this.criarPlaylist}
            />
            {playlists}
            <button onClick={this.mainPage}>
                    Voltar
                </button>
          </MainDiv>
        )
      case 'infoPlaylist':
        return (         
          <MainDiv>
            <InfoPlaylist
              nomePlaylistAtual = {this.state.nomePlaylistAtual}
              playlistPage = {this.playlists}
              musicas = {this.state.playlistAtual}
              add = {this.state.add}
              addState = {this.addState}
              id = {this.state.idPlaylistAtual}
              nome = {this.state.nomePlaylistAtual}
              infoPlaylist = {this.infoPlaylist}
            />
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
