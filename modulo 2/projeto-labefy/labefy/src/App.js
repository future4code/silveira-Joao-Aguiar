import React from "react";
import styled from 'styled-components';
import axios from 'axios';
import AddPlaylist from "./component/AddPlaylist/AddPlaylist";

const MainDiv = styled.div`

`

class App extends React.Component {

  state = {
    valorNomePlaylist:'',
    pagAtual: 'mainPage',
    allPlaylists: []
  }

  //..........................................................................

  pegarPlaylists = ()=> {
    
    const headers = {
      headers: {
        Authorization: "joao-aguiar-silveira"
      }
    }

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

    axios.get(url,headers)
    .then((res)=>{
      this.setState({allPlaylists: res.data.result.list})
      console.log(this.state.allPlaylists)
    }).catch((err)=>{
      console.log(err.data)
    })
  }

  componentDidMount(){
    this.pegarPlaylists()
  }

  criarPlaylist = ()=> {
    const body = {
      name: this.state.valorNomePlaylist
    }

    const headers = {
      headers: {
        Authorization: "joao-aguiar-silveira"
      }
    }

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

    axios.post(url,body,headers)
    .then((res)=>{
      this.pegarPlaylists()
      console.log(`playlist '${this.state.valorNomePlaylist}' criada com sucesso!`)
    }).catch((err)=>{
      console.log(err.data)
    })
  }

  deletarPlaylists = (id)=> {
    const headers = {
      headers: {
        Authorization: "joao-aguiar-silveira"
      }
    }

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

    axios.delete(url,headers)
    .then((res)=>{
      this.pegarPlaylists()
      console.log(this.state.allPlaylists)
    }).catch((err)=>{
      console.log(err.data)
    })
  }


  //..........................................................................

  novaPlaylist = ()=> {
    this.setState({pagAtual: 'playlists'})
  }

  mainPage = ()=> {
    this.setState({pagAtual: 'mainPage'})
  }

  onChangeNomePlaylist = (e)=> {
    this.setState({valorNomePlaylist: e.target.value})
  }

//............................................................................

  render(){

    const playlists = this.state.allPlaylists.map((playlist)=>{
      return (
        <div>
          <p>{playlist.name}</p>
          <button onClick={()=> {this.deletarPlaylists(playlist.id)}}>X</button>
        </div>
      ) 
    })


    switch (this.state.pagAtual) {

      case 'mainPage':
        return (
          <MainDiv>
            <button onClick={this.novaPlaylist}>
              criar nova playlist
            </button>
          </MainDiv>    
        )
      case 'playlists':
        return (
          <MainDiv>
            <AddPlaylist
              mainPage = {this.mainPage}
              valorNomePlaylist = {this.state.valorNomePlaylist}
              onChangeNomePlaylist = {this.onChangeNomePlaylist}
              criarPlaylist = {this.criarPlaylist}
            />
            {playlists}
          </MainDiv>    
        )
        case 'infoPlaylist':
        return (
          <MainDiv>
            <button onClick={this.novaPlaylist}>
              criar nova playlist
            </button>
          </MainDiv>    
        )
        
        
    
      default:
        return(
          <div>erro</div>
        )
        
    }
    
  }
  
}

export default App;
